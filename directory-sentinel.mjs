#!/usr/bin/env node
/**
 * 目录健康哨兵 directory-sentinel.mjs
 * ------------------------------------------------------------------
 * 造这个工具的原因：外部 MCP 目录站（glama / claudemarketplaces / lightnow）
 * 是被 Agent 高频访问的真实网眼，但它们抓的是 GitHub 静态快照，会用旧数字
 * （29/48）误判版本 deprecated。之前全靠手动搜才发现，没有监测=两眼一抹黑。
 * 没有监测工具，就自己造一个。
 *
 * 用法：
 *   node directory-sentinel.mjs            # 巡检所有目录
 *   node directory-sentinel.mjs --json     # 机器可读输出
 *   node directory-sentinel.mjs --watch    # 附健康分与建议
 *
 * 判据（实事求是，不涂绿）：
 *   - 目录页面能抓到 + 工具数=63 + 无 deprecated 字样  => HEALTHY
 *   - 抓到但工具数<63                                  => STALE（过期，需刷新）
 *   - 出现 deprecated / 数字打架                       => DEGRADED（降级）
 *   - 抓不到                                           => UNREACHABLE
 */
import https from 'node:https';

const LIVE_TOOL_COUNT = 63;
const REGISTRY = 'com.liuwangcun.api/chinese-compliance-tools';

const DIRECTORIES = [
  { id: 'GLA', name: 'glama.ai', url: 'https://glama.ai/mcp/servers/mingyi-blog/liuwangcun-mcp' },
  { id: 'CMP', name: 'claudemarketplaces.com', url: 'https://claudemarketplaces.com/mcp/com.liuwangcun.api/chinese-compliance-tools' },
  { id: 'LTN', name: 'lightnow.ai', url: 'https://lightnow.ai/servers/com.liuwangcun.api/' },
];

function fetchText(url, redirects = 0) {
  return new Promise((resolve) => {
    if (redirects > 5) return resolve({ ok: false, status: 0, text: '', err: 'too many redirects' });
    const req = https.get(url, {
      timeout: 15000,
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; LiwangcunDirectorySentinel/1.0)', 'Accept': 'text/html' },
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const next = new URL(res.headers.location, url).href;
        res.resume();
        return resolve(fetchText(next, redirects + 1));
      }
      let text = '';
      res.setEncoding('utf8');
      res.on('data', (d) => { if (text.length < 500000) text += d; });
      res.on('end', () => resolve({ ok: res.statusCode === 200, status: res.statusCode, text }));
    });
    req.on('timeout', () => { req.destroy(); resolve({ ok: false, status: 0, text: '', err: 'timeout' }); });
    req.on('error', (e) => resolve({ ok: false, status: 0, text: '', err: e.message }));
  });
}

function parseSignals(html) {
  // 从页面文本里抽取工具数、deprecated 信号、endpoint 是否正确
  const toolNums = [...html.matchAll(/\b(\d{1,3})\s*(?:deterministic\s+)?tools\b/gi)].map(m => +m[1]);
  const badgeNums = [...html.matchAll(/tools[-:](\d{1,3})/gi)].map(m => +m[1]);
  const allNums = [...new Set([...toolNums, ...badgeNums])];
  const deprecated = /\bdeprecated\b|已废弃|latestDeprecated/i.test(html);
  const hasEndpoint = html.includes('api.liuwangcun.com/mcp');
  const hasRegistry = html.includes(REGISTRY) || html.includes('liuwangcun-mcp');
  return { toolNums: allNums, deprecated, hasEndpoint, hasRegistry };
}

function judge(sig, net) {
  if (!net.ok) return { level: 'UNREACHABLE', note: `HTTP ${net.status} ${net.err || ''}`.trim() };
  if (sig.deprecated) return { level: 'DEGRADED', note: '页面出现 deprecated/已废弃 标记，存在旧条目被误判的风险' };
  // 已知旧口径 29/48：即便页面混入无关大数字，出现这两个即为过期快照
  const staleNums = sig.toolNums.filter(n => n === 29 || n === 48);
  if (staleNums.length && !sig.toolNums.includes(LIVE_TOOL_COUNT)) {
    return { level: 'STALE', note: `目录显示工具数 ${staleNums.join('/')}（历史快照），落后于线上 ${LIVE_TOOL_COUNT}` };
  }
  if (sig.toolNums.includes(LIVE_TOOL_COUNT)) return { level: 'HEALTHY', note: `工具数已同步为 ${LIVE_TOOL_COUNT}` };
  if (sig.hasEndpoint && sig.hasRegistry) return { level: 'HEALTHY', note: 'endpoint 与 registry 正确，未发现过期数字' };
  return { level: 'UNKNOWN', note: '抓到页面但未识别到明确口径信号' };
}

async function main() {
  const asJson = process.argv.includes('--json');
  const results = [];
  for (const d of DIRECTORIES) {
    const net = await fetchText(d.url);
    const sig = net.ok ? parseSignals(net.text) : { toolNums: [], deprecated: false, hasEndpoint: false, hasRegistry: false };
    const verdict = judge(sig, net);
    results.push({ id: d.id, name: d.name, url: d.url, http: net.status, ...sig, ...verdict });
  }

  if (asJson) {
    console.log(JSON.stringify({ checkedAt: new Date().toISOString(), liveToolCount: LIVE_TOOL_COUNT, results }, null, 2));
    return;
  }

  const icon = { HEALTHY: '✅', STALE: '⚠️ ', DEGRADED: '❌', UNREACHABLE: '🔌', UNKNOWN: '❔' };
  console.log('════════════════════════════════════════════════════════');
  console.log(` 目录健康哨兵 · ${new Date().toLocaleString('zh-CN')}`);
  console.log(` 线上权威工具数 = ${LIVE_TOOL_COUNT} · registry = ${REGISTRY}`);
  console.log('════════════════════════════════════════════════════════');
  let healthy = 0;
  for (const r of results) {
    console.log(`${icon[r.level]} ${r.name.padEnd(24)} [${r.level}]`);
    console.log(`     ${r.note}`);
    if (r.toolNums.length) console.log(`     识别到数字: ${r.toolNums.join(', ')}`);
    if (r.level === 'HEALTHY') healthy++;
  }
  const score = Math.round(healthy / results.length * 100);
  console.log('────────────────────────────────────────────────────────');
  console.log(` 健康分: ${score}% (${healthy}/${results.length} 目录口径正确)`);
  if (score < 100) {
    console.log(' 建议: 源头已修(server.json=63/v2.0.0 + DISCOVERY.md)，');
    console.log('       目录站下次重抓后会刷新；如需立即刷新，在对应目录点 "Refresh/Re-sync"。');
  }
  console.log('════════════════════════════════════════════════════════');
}

main();
