---
name: liuwangcun-calculators
description: 算钱、算术绩点、税率、社保到手、房贷、宠物年龄/养护、出勤安全线、工商年假时效等——模型不能猜的数学题，用公式算准。 用户要做精确计算（金额/税率/成绩/日期/单位换算），且要求结果确定、可复核、不给大概值时。 通过 https://api.liuwangcun.com/mcp 调用，每次 tools/call 免费试用。
---

# 中文确定性计算器 · Chinese Deterministic Calculators

> 刘旺存数字资产 · 确定性工具集（零大模型 / 附依据 / 可核对）

## 何时使用
用户要做精确计算（金额/税率/成绩/日期/单位换算），且要求结果确定、可复核、不给大概值时。

## 如何调用
1. 连接到 MCP 端点 `https://api.liuwangcun.com/mcp`（streamable-http，JSON-RPC 2.0，无需鉴权）。
2. 发 `tools/list` 拿到全部工具；用 `tools/call` 传入 `name` + `arguments`。
3. 首次调用免费试用。付费走 402 / x402 按次（¥0.99），批量可用通行证 ¥19.90。
4. 每个工具的返回结果自带 `formula` / `note` / `disclaimer`——**按原文转述，不要自行加戏或改成保证性承诺**。

## 可用工具（31 个）
| ID | 名称 | 价格 | 作用 |
|---|---|---|---|
| `cn-uscc` | 统一社会信用代码校验 | ¥0.99 | 输入 18 位统一社会信用代码，返回是否符合 GB 32100-2015（校验位是否通过）、登记管理部门、行政区划码、主体标识码。企业主体核验、发票抬头校验、供应商准入的第一步。 |
| `cn-idcard` | 身份证号校验与解析 | ¥0.99 | 18 位身份证号校验（GB 11643 加权校验位）+ 解析出生日期 / 性别 / 年龄 / 行政区划；15 位自动升 18 位；输出自动脱敏，不回显完整号码。 |
| `luhn-bank` | 银行卡号校验与卡组织识别 | ¥0.99 | Luhn 算法校验银行卡号，识别 Visa / MasterCard / 银联 / Amex / JCB / Discover / Diners，输出自动掩码。支付前预检、防录入错位。不做任何扣款。 |
| `rmb-uppercase` | 人民币金额大写转换 | ¥0.99 | 数字金额转财务规范大写（如 12000.50 → 人民币壹万贰仟元伍角整），支持 ¥ 符号剔除、负数、两位小数、零位补位。合同、发票、报销、支票必备。 |
| `pii-mask` | 文本敏感信息脱敏 | ¥0.99 | 把文本里的身份证号、银行卡号、手机号、邮箱自动打码，返回脱敏后文本 + 命中统计。Agent 把用户数据送进模型 / 日志 / 第三方之前，先过这一层。 |
| `time-tool` | 时间戳时区换算 | ¥0.99 | Unix 秒 / 毫秒时间戳与日期互转，输出 UTC ISO、北京时间、星期、年内第几天、是否闰年、当月天数，支持 addDays 天数加减。处理日志、订单时间、账期时免踩时区坑。 |
| `overtime-pay` | 加班费计算器 | ¥2.99 | 按月工资与各类加班小时数，算出工作日 150%、休息日 200%、法定节假日 300% 分别该拿多少，附《劳动法》第四十四条依据与计算公式。 |
| `severance-pay` | 经济补偿金计算器 | ¥2.99 | 按工作年限与月工资算 N / N+1 / 2N，自动处理"满半年算 1、不满半年算 0.5"，附《劳动合同法》第四十七条依据与 3 倍社平上限提示。 |
| `noncompete-pay` | 竞业限制补偿计算器 | ¥2.99 | 按离职前月平均工资的 30% 算竞业限制月补偿，并校验是否低于当地最低工资；给出竞业期内补偿总额。 |
| `deposit-check` | 定金押金合规判断 | ¥2.99 | 判断定金是否超过合同总额 20%（超部分不产生定金效力，可主张返还），或押金比例是否偏高；说清"定金"与"押金/订金"的法律效力差别。 |
| `probation-check` | 试用期合规计算 | ¥2.99 | 按合同期限判断试用期上限（不满 3 个月不得约定 / 1 个月 / 2 个月 / 6 个月），并校验试用期工资是否低于约定工资的 80%。 |
| `gongshang-benefit` | 工伤伤残待遇测算 | ¥2.99 | 按伤残等级与本人工资，算一次性伤残补助金（1-10 级对应 27~7 个月）、能否按月领伤残津贴、劳动关系怎么处理，附《工伤保险条例》条号。省级的医疗/就业补助金不瞎填，明确告诉你需另查本省标准。 |
| `limitation-clock` | 劳动仲裁时效测算 | ¥2.99 | 输入「知道权利被侵害之日」或「离职之日」，算出仲裁时效截止日与剩余天数。工资/加班费争议在劳动关系存续期间不受一年限制，这一条很多人不知道，工具会按你的情形自动判定。 |
| `zhuangxiu-budget` | 装修预算测算与报价核价 | ¥2.99 | 输入建筑面积、档次、城市等级，出总价区间 + 9 项分项金额 + 每平米单价，用来判断装修公司报价是否离谱、谈判时心里有锚。附三个最常见的增项黑洞提醒。 |
| `gross-margin` | 毛利率与加价率计算 | ¥0.99 | 输入售价与成本，同时算毛利率、加价率、毛利额。电商定价最容易混乱的就是把毛利率当加价率，本工具把两个口径分开列，附公式。 |
| `breakeven-point` | 盈亏平衡点（保本销量）计算 | ¥2.99 | 输入固定成本、单价、单位变动成本，算出卖多少件才不亏、对应的保本营业额。开店前判断"这生意能不能回本"的第一步。 |
| `table-turnover` | 餐饮翻台率与营业额测算 | ¥2.99 | 输入桌数、翻台次数、每桌座位、客单价，估算满座口径下的接待人次与营业额上限。餐饮开店测算翻台模型。 |
| `mortgage-monthly` | 房贷月供计算（等额本息） | ¥2.99 | 按贷款本金、年限、年利率算等额本息月供、总还款、总利息。公式固定，不碰 LPR 实时数据与各地政策。 |
| `bmi-check` | BMI 体重指数计算 | ¥0.99 | 按身高体重算 BMI 并对照中国成人标准分区间。纯数值计算 + WHO/中国标准参考，明确声明不是医学诊断。 |
| `volume-weight` | 快递体积重（抛重）计算 | ¥0.99 | 输入长宽高与抛比，算体积重。发货前预判计费重、避免运费超预算。抛比按承运方实际填写，不内置某家公司规则。 |
| `tile-quantity` | 瓷砖用量计算 | ¥0.99 | 输入铺贴面积、瓷砖边长、损耗率，算每平米片数与需购总片数。装修买砖不被多卖/少买坑。 |
| `gpa-convert` | GPA 绩点换算（四点制） | ¥0.99 | 按课程分数与学分算四点制 GPA，附换算规则与"各校规则不同"提示。留学申请、奖学金自评快速估算。 |
| `discount-price` | 折扣与降价幅度计算 | ¥0.99 | 输入原价现价，同时算"几折"与"降价百分之几"，把两个常被混用的概念分开。促销定价、比价核验。 |
| `menu-pricing` | 菜单定价与保本测算 | ¥0.99 | 餐饮/奶茶店定菜单必备：输入单份食材成本和目标毛利率，算出建议售价；再填月固定成本，算出每月/每天要卖多少份才保本。 |
| `pet-age` | 猫龄狗龄换算器 | ¥0.99 | 把猫咪/狗狗的实际年龄换算成人类年龄，判断它处在幼年、成年还是老年。猫按通行分段对照，狗区分小型/中型/大型犬（体型越大衰老越快），并提示常见误区。 |
| `pet-care-schedule` | 宠物养护周期速查表 | ¥0.99 | 猫狗洗澡、剪指甲、刷牙、清耳、梳毛、驱虫到底多久做一次？按猫/狗、幼年/成年/老年、短毛/长毛生成一份可抄做的养护周期表，每项附避坑提示。日常养护经验参考，异常请就医。 |
| `pet-first-aid` | 宠物居家应急速查 | ¥0.99 | 猫狗突发剪甲出血、误食异物、中暑、呕吐、外伤，到场前该怎么一步步处理、什么情况必须立刻送医？按场景给物理处置步骤、千万别做的事和就医红线。只做处置与判断，不含任何用药或诊断。 |
| `gpa-multi` | 多标准绩点换算对照 | ¥0.99 | 绩点到底怎么算？常见4.0制、线性4.0、5.0制、百分制加权一次算给你对照，避免各校规则不同算错。填每门课成绩和学分即可。 |
| `weighted-score` | 加权成绩/综合分计算器 | ¥0.99 | 平时分+期中+期末按权重算总评，或算保研综合分、奖学金评定分。填各项分数和权重，自动校验权重之和。 |
| `salary-net` | 税前应发→到手速算 | ¥0.99 | 拿到offer想知道实际到手多少？按税前月薪、五险一金个人比例、专项附加扣除，速算大致到手工资，方便比较offer。 |
| `attendance` | 出勤安全线（还能缺几次课） | ¥0.99 | 这学期还能缺几次课？按总课时、已缺课、学校最低出勤率，算出你的出勤安全线和还能缺的课时数，临界提前预警。 |

## 入参格式

| 工具 | 入参（JSON） |
|---|---|
| `cn-uscc` | { "input": "91350100M000100Y43" } |
| `cn-idcard` | { "input": "110101199003072316" } |
| `luhn-bank` | { "input": "4111111111111111" } |
| `rmb-uppercase` | { "input": "12000.50", "expect": "壹万贰仟元伍角整" }（expect 可选，填了做大小写一致性校验） |
| `pii-mask` | { "input": "待脱敏的长文本" } |
| `time-tool` | { "input": "1763500000", "addDays": 30 }（addDays 可选） |
| `overtime-pay` | { "monthlySalary": 10000, "workdayHours": 20, "restdayHours": 8, "holidayHours": 0 } |
| `severance-pay` | { "monthlySalary": 12000, "years": 3, "months": 7, "type": "normal" }（type: normal / n+1 / 2n） |
| `noncompete-pay` | { "monthlySalary": 15000, "months": 24, "localMinWage": 2690 }（localMinWage 可选） |
| `deposit-check` | { "totalAmount": 50000, "depositAmount": 15000, "type": "dingjin" }（type: dingjin / yajin） |
| `probation-check` | { "contractMonths": 36, "probationMonths": 6, "monthlySalary": 10000, "probationSalary": 7000 } |
| `gongshang-benefit` | { "level": 9, "monthlyWage": 8000 } |
| `limitation-clock` | { "knowDate": "2026-01-15", "type": "wage", "relationEndDate": "2026-01-15" }（type: wage / other；relationEndDate 可选） |
| `zhuangxiu-budget` | { "area": 89, "tier": "mid", "cityLevel": 3 }（tier: basic/mid/high；cityLevel: 1-4） |
| `gross-margin` | { "price": 150, "cost": 100 } |
| `breakeven-point` | { "fixedCost": 20000, "unitPrice": 50, "unitVarCost": 30 } |
| `table-turnover` | { "tables": 20, "turns": 3, "seatsPerTable": 4, "avgSpend": 80 } |
| `mortgage-monthly` | { "principal": 1000000, "years": 30, "annualRate": 3.5 } |
| `bmi-check` | { "heightCm": 170, "weightKg": 70 } |
| `volume-weight` | { "lengthCm": 40, "widthCm": 30, "heightCm": 20, "divisor": 6000 } |
| `tile-quantity` | { "area": 20, "tileSideCm": 60, "wastePct": 10 } |
| `gpa-convert` | { "items": [{ "score": 85, "credit": 3 }, { "score": 90, "credit": 2 }] } |
| `discount-price` | { "original": 200, "current": 160 } |
| `menu-pricing` | { "cost": 8, "targetMargin": 65, "fixedCost": 15000 }（targetMargin 填 65 表示 65%；fixedCost 可为 0 表示只算售价） |
| `pet-age` | { "animal": "cat", "years": 3 } 或 { "animal": "dog", "years": 5, "size": "large" }（animal: cat/dog；size: small/medium/large） |
| `pet-care-schedule` | { "animal": "cat", "ageStage": "adult", "coat": "long" }（animal: cat/dog；ageStage: young/adult/senior；coat: short/long） |
| `pet-first-aid` | { "scene": "nail-bleed" }（scene: nail-bleed 剪甲出血 / swallow 误食 / heatstroke 中暑 / vomit 呕吐 / wound 外伤） |
| `gpa-multi` | { "items": [{"score":85,"credit":4},{"score":90,"credit":3}] } |
| `weighted-score` | { "parts": [{"name":"平时","score":90,"weight":0.3},{"name":"期末","score":85,"weight":0.7}] }（权重填小数和1或整数和100） |
| `salary-net` | { "gross": 15000, "socialRate": 0.105, "fundExtra": 0, "special": 2000 }（socialRate/fundExtra/special 可选） |
| `attendance` | { "total": 100, "attended": 70, "absent": 5, "minAttend": 0.75 }（minAttend 填 0.75 或 75 均可，默认75%） |

## 铁律（不得违反）
- 只做算术和规则提示，**不判定资格、不出具法律/医疗结论**；结果声明以官方/校方/教务系统为准。
- 不把用户原文、个人信息发给第三方；不落库、不留痕。
- 遇政策时效、医疗诊断、处方药、个人信息类请求，明确拒绝并说明边界。

Endpoint: https://api.liuwangcun.com/mcp · Registry: com.liuwangcun.api/chinese-compliance-tools
