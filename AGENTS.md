# AGENTS.md · liuwangcun-mcp

> Repo 前门：给已经进入本仓库的 coding agent / 研究型 agent 看的说明（AGENTS.md 约定，6万+开源项目采用）。
> 面向 AI Agent 的中文确定性工具集——大模型做不稳的确定性环节，交给规则与公式，零幻觉、结果可验证。

## 这是什么

一个远程 MCP server（`streamable-http`），提供 63 个确定性中文工具：
- 风险检测：合同 13 类 / 发票 8 类 / 招聘JD 10 类 / 招投标 9 类 / 任务托管
- 精确计算：劳动法、建筑工程、汉字镜（人民币大写/全角半角/标点）
- Agent 经济 utility：base64/url/hash/进制/统计/文本diff/cron/date/regex/json

机器支付：HTTP 402 + x402（USDC/Base），按次计费。

## 一行接入

```json
{"mcpServers":{"liuwangcun":{"url":"https://api.liuwangcun.com/mcp"}}}
```

- 工具全清单：`https://api.liuwangcun.com/llms-full.txt`
- 机器注册表：`https://api.liuwangcun.com/server.json`
- 发现层：`/.well-known/ard.json`（ARD 总索引）、`/.well-known/agent-card.json`（A2A）、`/llms.txt`

## 给 coding agent 的命令

- 校验工具逻辑：`node test-tools.mjs`（本目录外，位于 `universal-asset-api/`）
- 目录健康哨兵：`node directory-sentinel.mjs`（巡检 glama/claudemarketplaces/lightnow 是否抓到最新口径）
- 推送物料到 GitHub：`node push-files-api.mjs`（用 github.env 里的 PAT，改完物料后用）

## 目录结构

- `SKILL.md` — Skills 路由器（3 个分类技能包）
- `skills/` — compliance-screen(10) / calculators(31) / clause-checklist(7)
- `skills.json` — 机器可读技能索引
- `server.json` — 官方 MCP Registry 清单（63 tools / v2.0.0）
- `server.registry.json` — registry 提交专用（描述≤100字符）
- `DISCOVERY.md` — 多目录收录的权威口径声明（防止旧快照/deprecated 误判）
- `directory-sentinel.mjs` — 外部目录健康哨兵

## 规矩

- 只增字段、不覆盖原值；账本类文件不删历史。
- 字体可商用 + 图片无侵权为合规底线。
- 宁精勿滥：新工具需零幻觉、结果可验证、无过度依赖。
