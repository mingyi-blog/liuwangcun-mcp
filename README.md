# Liuwangcun Chinese Compliance Tools · MCP Server

**63 deterministic tools for Chinese contracts, labor law, everyday money math, and Agent-economy utilities — built for AI agents.**

[![MCP Registry](https://img.shields.io/badge/MCP%20Registry-active-blue)](https://registry.modelcontextprotocol.io/v0/servers?search=com.liuwangcun.api)
[![MCP endpoint](https://img.shields.io/badge/endpoint-live-success)](https://api.liuwangcun.com/mcp)
![no LLM](https://img.shields.io/badge/LLM-none%20·%20deterministic-purple)
![tools](https://img.shields.io/badge/tools-63-green)
![price](https://img.shields.io/badge/trial-free-brightgreen)

LLMs are unreliable at two things in Chinese: **counting money correctly** and **citing the right statute**. This server solves exactly those two, with zero LLM in the loop — pure rules and formulas, with the article number attached to every answer.

## One-line setup

```json
{"mcpServers":{"liuwangcun":{"url":"https://api.liuwangcun.com/mcp"}}}
```

- **Endpoint**: `https://api.liuwangcun.com/mcp`
- **Transport**: streamable-http (JSON-RPC 2.0)
- **Auth**: none. Free trial on every `tools/call`.
- **Registry name**: `com.liuwangcun.api/chinese-compliance-tools`

## Agent Skills (installable)

A curated subset (48 tools) is also packaged as drop-in Skills for Claude / Cursor / Codex — see [`SKILL.md`](SKILL.md) (router) and [`skills/`](skills/) (3 category skills: compliance-screen 10 / calculators 31 / clause-checklist 7). The live MCP endpoint exposes **63 tools**; Skills are a stable subset. Machine-readable index: [`skills.json`](skills.json). Identical endpoint, different discovery path from this MCP config.

## What it does

### 1. Text compliance screening — paste the Chinese text, get risk findings
| Situation | Tool |
|---|---|
| Posting an ad / livestream script, afraid of banned superlatives | `ad-law` |
| About to sign an employment contract | `labor-contract` |
| About to sign a lease | `rental-contract` |
| About to sign a purchase contract | `procurement-contract` |
| Shipping a privacy policy / ToS | `privacy-policy` |
| About to sign a renovation contract | `decoration-contract` |
| Lending or borrowing money | `loan-contract` |
| Signing an NDA | `nda` |
| Taking or giving outsourcing work | `outsourcing-contract` |
| Signing a separation agreement | `separation-agreement` |

### 2. Deterministic calculators — when the model must not guess
| Question your user asks | Tool |
|---|---|
| How much overtime pay am I owed? | `overtime-pay` |
| Severance: N, N+1, or 2N? | `severance-pay` |
| How much non-compete compensation? | `noncompete-pay` |
| Is this deposit over the 20% cap? | `deposit-check` |
| Is this probation period legal? | `probation-check` |
| Work-injury disability benefit amount | `gongshang-benefit` |
| How many days left to file for arbitration? | `limitation-clock` |
| Is this renovation quote reasonable? | `zhuangxiu-budget` |
| Validate a USCC / ID card / bank card | `cn-uscc`, `cn-idcard`, `luhn-bank` |
| Convert amount to Chinese financial uppercase | `rmb-uppercase` |
| Mask PII before sending text to a model | `pii-mask` |
| Timestamp / timezone conversion | `time-tool` |

### 3. Contract clause checklists — by your stance, not generic templates
| Need | Tool |
|---|---|
| Employment contract clause checklist | `labor-template` |
| Lease clause checklist | `rental-template` |
| IOU / loan clause checklist | `loan-template` |
| Renovation contract clause checklist | `decoration-template` |
| Separation agreement clause checklist | `separation-template` |
| Design service contract clause checklist | `design-template` |
| Business partnership agreement clause checklist (for founders) | `partner-template` |

Output is a **checklist of required elements, traps, and negotiation talking points** — deliberately *not* a ready-to-sign contract body. Generic templates are the #1 cause of unread fine print; a checklist forces the reader to fill in their own terms.

## Example

```json
{"jsonrpc":"2.0","id":3,"method":"tools/call",
 "params":{"name":"gongshang-benefit","arguments":{"level":9,"monthlyWage":8000}}}
```

```json
{
  "oneTimeGrantMonths": 9,
  "oneTimeGrant": 72000,
  "oneTimeGrantText": "9 个月 × 8000 元 = 72000 元",
  "basis": "《工伤保险条例》第三十七条：七至十级 13/11/9/7 个月"
}
```

## Why deterministic instead of a prompt

| | Prompt-based | This server |
|---|---|---|
| Overtime 150/200/300% arithmetic | drifts across runs | fixed formula |
| Statute citation | hallucinates article numbers | whitelisted, verified |
| Deposit 20% cap edge cases | inconsistent | unit-tested |
| Cost per call | model tokens | ~0 |
| Audit trail | none | same input → same output |

## Scope and honesty

- Only **national-level** provisions are computed. Province-specific work-injury top-ups are explicitly flagged as "look up your province", rather than invented.
- Clause checklists are **not legal advice** and not a substitute for a licensed lawyer.
- No LLM, no external lookups, no write operations, no payment or identity data.

## Also available

- Human-facing free tool (Chinese): https://api.liuwangcun.com/gongju
- Setup guide: https://api.liuwangcun.com/mcp-setup
- Machine index (llms.txt): https://api.liuwangcun.com/llms.txt

## License

MIT
