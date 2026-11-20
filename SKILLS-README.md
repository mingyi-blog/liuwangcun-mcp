# Liuwangcun Agent Skills

**48 deterministic Chinese tools as installable Agent Skills — zero LLM, verifiable, statute/formula attached.**

[![MCP endpoint](https://img.shields.io/badge/endpoint-live-success)](https://api.liuwangcun.com/mcp)
![tools](https://img.shields.io/badge/tools-48-green)
![no LLM](https://img.shields.io/badge/LLM-none-purple)
![trial](https://img.shields.io/badge/trial-free-brightgreen)

中文版 ↓ · English below ↓

---

## 这是什么

刘旺存数字资产的 **Agent Skills 封装**。把主网关 `api.liuwangcun.com/mcp` 上的 48 个确定性工具，打包成 Claude / Cursor / Codex 等可直接安装的 Skill。

大模型在两件事上不可靠：**算错钱**、**引错法条**。这个工具集里没有大模型——纯规则、纯公式，每个答案都带上依据（法条号 / 计算公式 / 免责声明）。

## 三个 Skill

| Skill | 中文 | 工具数 | 何时用 |
|---|---|---|---|
| [`compliance-screen`](skills/compliance-screen/SKILL.md) | 合规文本风险检测 | 10 | 审中文合同/广告文案的风险点，要可核对、带法条 |
| [`calculators`](skills/calculators/SKILL.md) | 确定性计算器 | 31 | 精确算钱/税率/社保/房贷/绩点/出勤/宠物/日期 |
| [`clause-checklist`](skills/clause-checklist/SKILL.md) | 合同要件清单 | 7 | 写合同前要必备条款和谈判话术 |

根入口 [`SKILL.md`](SKILL.md) 负责路由；机器可读清单 [`skills.json`](skills.json) 供 Agent 自动发现。

## 一行接入

```json
{"mcpServers":{"liuwangcun":{"url":"https://api.liuwangcun.com/mcp"}}}
```

- Transport: streamable-http (JSON-RPC 2.0) · Auth: none
- 每次 `tools/call` 免费试用；付费走 402 / x402 按次，通用通行证 ¥19.90
- `tools/list` 返回全部 48 个工具的 name / description / inputSchema

## 和 `liuwangcun-mcp` 的关系

两个仓库指向**同一个** MCP 端点，能力一致，服务不同发现路径：

- `mingyi-blog/liuwangcun-mcp` — MCP 服务端配置与 Registry 元数据（给 MCP 客户端）
- `mingyi-blog/liuwangcun-skills`（本仓库）— Agent Skills 封装（给装 skill 的客户端）

## 边界（不得违反）

只做算术与规则提示，**不判定资格、不出法律/医疗结论**；不采集个人信息；不碰政策时效与处方药；结果以官方/校方/教务系统为准。

---

## English

48 deterministic Chinese tools packaged as installable Agent Skills. LLMs fail at counting money and citing the right statute — this tool set uses no LLM: pure rules and formulas, with the formula/article attached to every answer.

Three skills: **compliance-screen** (10, text risk screening), **calculators** (31, exact arithmetic), **clause-checklist** (7, contract checklists). One-line MCP setup above; every `tools/call` is free to try.

Same endpoint and identical capabilities as `liuwangcun-mcp`; this repo serves the Skills discovery path. See [SKILL.md](SKILL.md) and [skills.json](skills.json).

## License

MIT — see [LICENSE](LICENSE). Tool outputs are informational only, not legal or medical advice.
