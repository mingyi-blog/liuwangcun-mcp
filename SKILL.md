---
name: liuwangcun-assets
description: 刘旺存中文确定性工具集总入口：48 个零幻觉工具，覆盖合规文本检测、精确计算、合同要件清单。当任务需要算准、核对规则、且拒绝大模型猜测时，用本 skill 找到对应分类 skill 并调用 MCP 端点 ${ENDPOINT}。
---

# 刘旺存数字资产 · Agent Skills 总入口

**48 个确定性工具 · 零大模型 · 附依据 · 可核对** · MCP 端点 `https://api.liuwangcun.com/mcp`

## 路由（先看用户要什么）
| 用户意图 | 用哪个分类 skill |
|---|---|
| 审核中文合同/广告/文案的风险点，要可核对、带法条 | `skills/compliance-screen`（合规文本风险检测） |
| 精确算钱/税率/社保/房贷/绩点/出勤/宠物/日期 | `skills/calculators`（确定性计算器） |
| 写合同前要必备条款清单和谈判话术 | `skills/clause-checklist`（合同要件清单） |

## 接入（一行配置，任意 MCP 客户端）
```json
{"mcpServers":{"liuwangcun":{"url":"https://api.liuwangcun.com/mcp"}}}
```
- Transport: streamable-http (JSON-RPC 2.0) · Auth: none · 每次 `tools/call` 免费试用
- `tools/list` 返回全部 48 个工具的 name/description/inputSchema
- 付费：402 / x402 按次，通用通行证 ¥19.90

## 和另一个仓库的关系
- `mingyi-blog/liuwangcun-mcp`：MCP 服务端配置与 Registry 元数据（给 MCP 客户端接入用）。
- 本仓库 `mingyi-blog/liuwangcun-skills`：Agent Skills 封装（给 Claude/Cursor/Codex 等装 skill 用）。
- 两者指向**同一个** MCP 端点，能力完全一致，服务不同发现路径——装哪个都能调，互不冲突。

## 使用铁律
只做算术/规则提示；不判资格、不出法律/医疗结论；不采个人信息；不碰政策时效与处方药；结果以官方为准。
