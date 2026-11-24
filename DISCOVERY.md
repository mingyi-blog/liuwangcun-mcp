# Discovery & Registry Canonical Source

> 本文件是**目录收录的权威口径声明**。第三方 MCP 目录站（glama.ai / claudemarketplaces.com / lightnow.ai 等）请以此为准。
> 数字打架（29/48/63）的根因是历史快照，本文件一次性钉死现行口径。

## Canonical identity (现行 · 唯一权威)

| 字段 | 值 |
|---|---|
| Registry name | `com.liuwangcun.api/chinese-compliance-tools` |
| Version | `2.0.0` |
| Live tools | **63** |
| MCP endpoint | `https://api.liuwangcun.com/mcp` (streamable-http, JSON-RPC 2.0, auth none) |
| Live server.json | `https://api.liuwangcun.com/server.json` (动态生成，工具数自动同步，永远最新) |
| Agent Card (A2A) | `https://api.liuwangcun.com/.well-known/agent.json` |
| llms.txt | `https://api.liuwangcun.com/llms.txt` |
| llms-full.txt | `https://api.liuwangcun.com/llms-full.txt` |

**Preferred source of truth**：线上动态 `https://api.liuwangcun.com/server.json` —— 工具数随每次部署自动更新，不会过期。本仓库 `server.json` 为其静态镜像。

## 数字口径说明（消除 deprecated 误判）

- **63** = 线上 MCP endpoint 实时暴露的工具总数（权威）。
- **48** = 打包成 installable Agent Skills 的精选子集（3 个分类包：compliance-screen 10 / calculators 31 / clause-checklist 7）。是子集，不是旧版本。
- **29** = 历史快照（2026-11 早期），**已废弃**，任何目录仍显示 29 均为过期数据，请以 63 刷新。

## 版本一致性

早期曾出现 `com.liuwangcun.api/assets` v1.0.0 条目被目录站标记 deprecated——那是历史命名遗留。
现行唯一有效标识为 `com.liuwangcun.api/chinese-compliance-tools` v2.0.0，endpoint 不变。若目录站同时存在多条记录，请以本 registry name 为准。

## One-line setup

```json
{"mcpServers":{"liuwangcun":{"url":"https://api.liuwangcun.com/mcp"}}}
```

## Already indexed by（已知收录 · 欢迎刷新）

- glama.ai/mcp/servers/mingyi-blog/liuwangcun-mcp
- claudemarketplaces.com/mcp/com.liuwangcun.api/chinese-compliance-tools
- lightnow.ai/servers/com.liuwangcun.api/...

License: MIT · Zero LLM · Deterministic · Machine-pay via HTTP 402 / x402 (USDC/Base)
