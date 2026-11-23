# 瞰势 KANSHI · 全量数字资产矩阵（机器可读索引）

> 给 Agent/大模型读：一个文件掌握全站 110 个数字资产。在线讲解页：https://api.liuwangcun.com/assets-guide

## 概要
- 资产总数：110
- 覆盖品类：9
- 核心理念：以 Agent 经济为核心，全部资产可被 Agent 通过 llms.txt / MCP / A2A / HTTP 402 发现与调用。
- 品类分布：
- 风控合规：10 个
- 确定性工具：32 个
- 条款清单：7 个
- 广谱微工具：15 个
- 闲鱼虚拟资料：7 个
- AI提示词包：3 个
- 儿童教育：6 个
- QMuse作品：9 个
- 候选SKU：21 个

## 发现与调用路径
1. Agent 读 https://api.liuwangcun.com/llms.txt 或 llms-full.txt 获取工具清单与参数 schema
2. MCP tools/list 发现 → tools/call 调用（免费试用）
3. 批量/高频走 HTTP 402 机器付：国内支付宝 Machine Pay（CNY）/ 全球 x402（USDC on Base）

## 结构化数据
- 在线讲解页内嵌 ItemList JSON-LD（110 项）+ FAQPage JSON-LD（3 条）
- 机器可读清单：https://api.liuwangcun.com/assets-registry.md
- agent-card：https://api.liuwangcun.com/agent-card.json

## 合规边界
法律/医疗裁量类仅做确定性辅助与条款清单，内嵌边界声明；不碰政策话题；候选SKU明确标注待发布。

## 产物清单（本仓库 content/assets/）
- README.md / 全资产讲解索引页.html：一页覆盖全部资产的图文讲解
- 机器可读清单.md：Markdown 全量清单
- 讲解卡/：每个资产一段说明讲解（共110段）
- 平台文案/：9 品类 × 5 平台（知乎/CSDN/公众号/小红书/口播稿）
- assets-registry.json：单一事实源（字段来自源码，标注证据等级 L1/L2）

生成时间：2026-11-23T04:54:55.694Z
