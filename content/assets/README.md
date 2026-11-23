<!DOCTYPE html>
<html lang="zh-CN"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>瞰势 · 全量数字资产矩阵（110个 · Agent经济）</title>
<meta name="description" content="瞰势 KANSHI 以 Agent 经济为核心构建的 110 个数字资产全览：确定性工具、风控合规、条款清单、广谱微工具、虚拟资料。Agent 一读即懂，可通过 MCP/A2A/402 调用。">
<meta name="keywords" content="Agent经济,数字资产,MCP,A2A,x402,确定性工具,llms.txt,瞰势,KANSHI">
<link rel="canonical" href="https://api.liuwangcun.com/assets-guide">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"ItemList","name":"瞰势 KANSHI 全量数字资产矩阵","numberOfItems":110,"description":"以 Agent 经济为核心构建的数字资产矩阵：确定性工具、风控合规、条款清单、广谱微工具与虚拟资料，均可被 Agent 通过 MCP/A2A 调用。","itemListElement":[{"@type":"ListItem","position":1,"name":"广告法违禁词检测","description":"电商 / 直播 / 朋友圈文案过一遍《广告法》：绝对化用语、虚假承诺、医疗功效、金融收益承诺、诱导性用语先挑出来。","url":"https://api.liuwangcun.com/api/risk/ad-law","identifier":"ad-law"},{"@type":"ListItem","position":2,"name":"劳动合同风险点检测","description":"入职签合同前过一遍《劳动合同法》：试用期、竞业限制、违约金、社保、工时、单方调岗等高风险条款。","url":"https://api.liuwangcun.com/api/risk/labor-contract","identifier":"labor-contract"},{"@type":"ListItem","position":3,"name":"租房合同风险点检测","description":"签租约前过一遍《民法典》租赁合同章：押金、违约金、维修责任、提前收房、水电加价、二房东、自动续租等坑。","url":"https://api.liuwangcun.com/api/risk/rental-contract","identifier":"rental-contract"},{"@type":"ListItem","position":4,"name":"采购合同风险点检测","description":"采购/供货合同过一遍：预付款比例、验收标准、质保、逾期违约金、单方变更、知识产权、不可抗力、管辖。","url":"https://api.liuwangcun.com/api/risk/procurement-contract","identifier":"procurement-contract"},{"@type":"ListItem","position":5,"name":"隐私政策合规检测","description":"App / 小程序隐私政策过一遍《个人信息保护法》：告知同意、超范围收集、默认勾选、第三方共享、删除注销、未成年人、跨境。","url":"https://api.liuwangcun.com/api/risk/privacy-policy","identifier":"privacy-policy"},{"@type":"ListItem","position":6,"name":"装修合同风险点检测","description":"签装修合同前过一遍：增项无上限、付款节点、材料品牌、工期违约金、质保、验收标准、单方变更、口头承诺。","url":"https://api.liuwangcun.com/api/risk/decoration-contract","identifier":"decoration-contract"},{"@type":"ListItem","position":7,"name":"借款/民间借贷风险点检测","description":"出借前过一遍：砍头息、利率超限、复利、担保缺失、空白合同、暴力催收、提前还款罚息、管辖。","url":"https://api.liuwangcun.com/api/risk/loan-contract","identifier":"loan-contract"},{"@type":"ListItem","position":8,"name":"保密协议(NDA)风险点检测","description":"签 NDA 前过一遍：保密范围、期限、违约金、单向义务、竞业混入、例外条款、返还销毁、管辖。","url":"https://api.liuwangcun.com/api/risk/nda","identifier":"nda"},{"@type":"ListItem","position":9,"name":"服务外包合同风险点检测","description":"接/发外包前过一遍：范围无边界、验收主观、付款绑回款、知识产权全归、无限连带、人员混同、单方终止、保密过重。","url":"https://api.liuwangcun.com/api/risk/outsourcing-contract","identifier":"outsourcing-contract"},{"@type":"ListItem","position":10,"name":"离职协议/协商解除风险点检测","description":"签离职协议前过一遍：放弃全部权利、补偿低于法定、竞业无补偿、社保放弃、年终奖、永久保密、格式确认、单向违约。","url":"https://api.liuwangcun.com/api/risk/separation-agreement","identifier":"separation-agreement"},{"@type":"ListItem","position":11,"name":"统一社会信用代码校验","description":"输入 18 位统一社会信用代码，返回是否符合 GB 32100-2015（校验位是否通过）、登记管理部门、行政区划码、主体标识码。企业主体核验、发票抬头校验、供应商准入的第一步。","url":"https://api.liuwangcun.com/api/tool/cn-uscc","identifier":"cn-uscc"},{"@type":"ListItem","position":12,"name":"身份证号校验与解析","description":"18 位身份证号校验（GB 11643 加权校验位）+ 解析出生日期 / 性别 / 年龄 / 行政区划；15 位自动升 18 位；输出自动脱敏，不回显完整号码。","url":"https://api.liuwangcun.com/api/tool/cn-idcard","identifier":"cn-idcard"},{"@type":"ListItem","position":13,"name":"银行卡号校验与卡组织识别","description":"Luhn 算法校验银行卡号，识别 Visa / MasterCard / 银联 / Amex / JCB / Discover / Diners，输出自动掩码。支付前预检、防录入错位。不做任何扣款。","url":"https://api.liuwangcun.com/api/tool/luhn-bank","identifier":"luhn-bank"},{"@type":"ListItem","position":14,"name":"人民币金额大写转换","description":"数字金额转财务规范大写（如 12000.50 → 人民币壹万贰仟元伍角整），支持 ¥ 符号剔除、负数、两位小数、零位补位。合同、发票、报销、支票必备。","url":"https://api.liuwangcun.com/api/tool/rmb-uppercase","identifier":"rmb-uppercase"},{"@type":"ListItem","position":15,"name":"文本敏感信息脱敏","description":"把文本里的身份证号、银行卡号、手机号、邮箱自动打码，返回脱敏后文本 + 命中统计。Agent 把用户数据送进模型 / 日志 / 第三方之前，先过这一层。","url":"https://api.liuwangcun.com/api/tool/pii-mask","identifier":"pii-mask"},{"@type":"ListItem","position":16,"name":"时间戳时区换算","description":"Unix 秒 / 毫秒时间戳与日期互转，输出 UTC ISO、北京时间、星期、年内第几天、是否闰年、当月天数，支持 addDays 天数加减。处理日志、订单时间、账期时免踩时区坑。","url":"https://api.liuwangcun.com/api/tool/time-tool","identifier":"time-tool"},{"@type":"ListItem","position":17,"name":"加班费计算器","description":"按月工资与各类加班小时数，算出工作日 150%、休息日 200%、法定节假日 300% 分别该拿多少，附《劳动法》第四十四条依据与计算公式。","url":"https://api.liuwangcun.com/api/tool/overtime-pay","identifier":"overtime-pay"},{"@type":"ListItem","position":18,"name":"经济补偿金计算器","description":"按工作年限与月工资算 N / N+1 / 2N，自动处理","url":"https://api.liuwangcun.com/api/tool/severance-pay","identifier":"severance-pay"},{"@type":"ListItem","position":19,"name":"竞业限制补偿计算器","description":"按离职前月平均工资的 30% 算竞业限制月补偿，并校验是否低于当地最低工资；给出竞业期内补偿总额。","url":"https://api.liuwangcun.com/api/tool/noncompete-pay","identifier":"noncompete-pay"},{"@type":"ListItem","position":20,"name":"定金押金合规判断","description":"判断定金是否超过合同总额 20%（超部分不产生定金效力，可主张返还），或押金比例是否偏高；说清","url":"https://api.liuwangcun.com/api/tool/deposit-check","identifier":"deposit-check"},{"@type":"ListItem","position":21,"name":"试用期合规计算","description":"按合同期限判断试用期上限（不满 3 个月不得约定 / 1 个月 / 2 个月 / 6 个月），并校验试用期工资是否低于约定工资的 80%。","url":"https://api.liuwangcun.com/api/tool/probation-check","identifier":"probation-check"},{"@type":"ListItem","position":22,"name":"工伤伤残待遇测算","description":"按伤残等级与本人工资，算一次性伤残补助金（1-10 级对应 27~7 个月）、能否按月领伤残津贴、劳动关系怎么处理，附《工伤保险条例》条号。省级的医疗/就业补助金不瞎填，明确告诉你需另查本省标准。","url":"https://api.liuwangcun.com/api/tool/gongshang-benefit","identifier":"gongshang-benefit"},{"@type":"ListItem","position":23,"name":"劳动仲裁时效测算","description":"输入「知道权利被侵害之日」或「离职之日」，算出仲裁时效截止日与剩余天数。工资/加班费争议在劳动关系存续期间不受一年限制，这一条很多人不知道，工具会按你的情形自动判定。","url":"https://api.liuwangcun.com/api/tool/limitation-clock","identifier":"limitation-clock"},{"@type":"ListItem","position":24,"name":"装修预算测算与报价核价","description":"输入建筑面积、档次、城市等级，出总价区间 + 9 项分项金额 + 每平米单价，用来判断装修公司报价是否离谱、谈判时心里有锚。附三个最常见的增项黑洞提醒。","url":"https://api.liuwangcun.com/api/tool/zhuangxiu-budget","identifier":"zhuangxiu-budget"},{"@type":"ListItem","position":25,"name":"毛利率与加价率计算","description":"输入售价与成本，同时算毛利率、加价率、毛利额。电商定价最容易混乱的就是把毛利率当加价率，本工具把两个口径分开列，附公式。","url":"https://api.liuwangcun.com/api/tool/gross-margin","identifier":"gross-margin"},{"@type":"ListItem","position":26,"name":"盈亏平衡点（保本销量）计算","description":"输入固定成本、单价、单位变动成本，算出卖多少件才不亏、对应的保本营业额。开店前判断","url":"https://api.liuwangcun.com/api/tool/breakeven-point","identifier":"breakeven-point"},{"@type":"ListItem","position":27,"name":"餐饮翻台率与营业额测算","description":"输入桌数、翻台次数、每桌座位、客单价，估算满座口径下的接待人次与营业额上限。餐饮开店测算翻台模型。","url":"https://api.liuwangcun.com/api/tool/table-turnover","identifier":"table-turnover"},{"@type":"ListItem","position":28,"name":"房贷月供计算（等额本息）","description":"按贷款本金、年限、年利率算等额本息月供、总还款、总利息。公式固定，不碰 LPR 实时数据与各地政策。","url":"https://api.liuwangcun.com/api/tool/mortgage-monthly","identifier":"mortgage-monthly"},{"@type":"ListItem","position":29,"name":"BMI 体重指数计算","description":"按身高体重算 BMI 并对照中国成人标准分区间。纯数值计算 + WHO/中国标准参考，明确声明不是医学诊断。","url":"https://api.liuwangcun.com/api/tool/bmi-check","identifier":"bmi-check"},{"@type":"ListItem","position":30,"name":"快递体积重（抛重）计算","description":"输入长宽高与抛比，算体积重。发货前预判计费重、避免运费超预算。抛比按承运方实际填写，不内置某家公司规则。","url":"https://api.liuwangcun.com/api/tool/volume-weight","identifier":"volume-weight"},{"@type":"ListItem","position":31,"name":"瓷砖用量计算","description":"输入铺贴面积、瓷砖边长、损耗率，算每平米片数与需购总片数。装修买砖不被多卖/少买坑。","url":"https://api.liuwangcun.com/api/tool/tile-quantity","identifier":"tile-quantity"},{"@type":"ListItem","position":32,"name":"GPA 绩点换算（四点制）","description":"按课程分数与学分算四点制 GPA，附换算规则与","url":"https://api.liuwangcun.com/api/tool/gpa-convert","identifier":"gpa-convert"},{"@type":"ListItem","position":33,"name":"Agent 调用成本预算器","description":"跑 agent 之前先算清成本：输入单次调用单价、预计调用次数、重试率、安全缓冲，算出预计花费和封顶花费。解决","url":"https://api.liuwangcun.com/api/tool/agent-budget","identifier":"agent-budget"},{"@type":"ListItem","position":34,"name":"折扣与降价幅度计算","description":"输入原价现价，同时算","url":"https://api.liuwangcun.com/api/tool/discount-price","identifier":"discount-price"},{"@type":"ListItem","position":35,"name":"菜单定价与保本测算","description":"餐饮/奶茶店定菜单必备：输入单份食材成本和目标毛利率，算出建议售价；再填月固定成本，算出每月/每天要卖多少份才保本。","url":"https://api.liuwangcun.com/api/tool/menu-pricing","identifier":"menu-pricing"},{"@type":"ListItem","position":36,"name":"猫龄狗龄换算器","description":"把猫咪/狗狗的实际年龄换算成人类年龄，判断它处在幼年、成年还是老年。猫按通行分段对照，狗区分小型/中型/大型犬（体型越大衰老越快），并提示常见误区。","url":"https://api.liuwangcun.com/api/tool/pet-age","identifier":"pet-age"},{"@type":"ListItem","position":37,"name":"宠物养护周期速查表","description":"猫狗洗澡、剪指甲、刷牙、清耳、梳毛、驱虫到底多久做一次？按猫/狗、幼年/成年/老年、短毛/长毛生成一份可抄做的养护周期表，每项附避坑提示。日常养护经验参考，异常请就医。","url":"https://api.liuwangcun.com/api/tool/pet-care-schedule","identifier":"pet-care-schedule"},{"@type":"ListItem","position":38,"name":"宠物居家应急速查","description":"猫狗突发剪甲出血、误食异物、中暑、呕吐、外伤，到场前该怎么一步步处理、什么情况必须立刻送医？按场景给物理处置步骤、千万别做的事和就医红线。只做处置与判断，不含任何用药或诊断。","url":"https://api.liuwangcun.com/api/tool/pet-first-aid","identifier":"pet-first-aid"},{"@type":"ListItem","position":39,"name":"多标准绩点换算对照","description":"绩点到底怎么算？常见4.0制、线性4.0、5.0制、百分制加权一次算给你对照，避免各校规则不同算错。填每门课成绩和学分即可。","url":"https://api.liuwangcun.com/api/tool/gpa-multi","identifier":"gpa-multi"},{"@type":"ListItem","position":40,"name":"加权成绩/综合分计算器","description":"平时分+期中+期末按权重算总评，或算保研综合分、奖学金评定分。填各项分数和权重，自动校验权重之和。","url":"https://api.liuwangcun.com/api/tool/weighted-score","identifier":"weighted-score"},{"@type":"ListItem","position":41,"name":"税前应发→到手速算","description":"拿到offer想知道实际到手多少？按税前月薪、五险一金个人比例、专项附加扣除，速算大致到手工资，方便比较offer。","url":"https://api.liuwangcun.com/api/tool/salary-net","identifier":"salary-net"},{"@type":"ListItem","position":42,"name":"出勤安全线（还能缺几次课）","description":"这学期还能缺几次课？按总课时、已缺课、学校最低出勤率，算出你的出勤安全线和还能缺的课时数，临界提前预警。","url":"https://api.liuwangcun.com/api/tool/attendance","identifier":"attendance"},{"@type":"ListItem","position":43,"name":"劳动合同条款清单","description":"不给你一份","url":"https://api.liuwangcun.com/api/clause/labor-template","identifier":"labor-template"},{"@type":"ListItem","position":44,"name":"租房合同条款清单","description":"按你的立场逐条列出这份租约必须写清的事项：押金怎么退、维修谁负责、能不能提前收房、水电能不能加价、二房东怎么防。骨架依《民法典》第七百零四条。","url":"https://api.liuwangcun.com/api/clause/rental-template","identifier":"rental-template"},{"@type":"ListItem","position":45,"name":"借条/借款条款清单","description":"按你的立场列出借条必须写清的 9 项要素，以及","url":"https://api.liuwangcun.com/api/clause/loan-template","identifier":"loan-template"},{"@type":"ListItem","position":46,"name":"装修合同条款清单","description":"装修是家庭纠纷最密集的场景：增项、以次充好、工期拖延、甲醛超标。按你的立场列出这份合同必须锁死的 9 项要素与 7 个关键条款，含付款节点比例与隐蔽工程验收。","url":"https://api.liuwangcun.com/api/clause/decoration-template","identifier":"decoration-template"},{"@type":"ListItem","position":47,"name":"离职协议条款清单","description":"离职协议签错，等于白送一笔钱或白丢一笔钱。按你的立场列出必须写清的 9 项：补偿怎么算、年假怎么折、竞业到底启不启动、那句","url":"https://api.liuwangcun.com/api/clause/separation-template","identifier":"separation-template"},{"@type":"ListItem","position":48,"name":"设计合同条款清单","description":"设计接单最容易吃哑巴亏的不是报价，是合同没写清——改稿改成无底洞、源文件交了尾款收不到、图用了半年才发现版权没约定。按你的立场逐条列出：必须写哪几项、每一栏填错会怎样、哪句话是坑、谈判时怎么接。骨架依《民法典》承揽合同一章的通行要素。","url":"https://api.liuwangcun.com/api/clause/design-template","identifier":"design-template"},{"@type":"ListItem","position":49,"name":"合伙协议条款清单","description":"三四线开店，十个有三个是熟人合伙，最后翻脸几乎都栽在同一件事：钱、权、退出没写清。本清单按你的立场逐条列出——出资怎么定、利润怎么分、亏了谁担、谁说了算、想退怎么退。骨架依《民法典》第三编第二十七章合伙合同（第九百六十七条至第九百七十七条）。","url":"https://api.liuwangcun.com/api/clause/partner-template","identifier":"partner-template"},{"@type":"ListItem","position":50,"name":"抽卡概率计算器","description":"","url":"https://api.liuwangcun.com/u/gacha-probability","identifier":"gacha-probability"},{"@type":"ListItem","position":51,"name":"保底期望计算器","description":"","url":"https://api.liuwangcun.com/u/pity-expected","identifier":"pity-expected"},{"@type":"ListItem","position":52,"name":"提升率对比计算器","description":"","url":"https://api.liuwangcun.com/u/damage-boost","identifier":"damage-boost"},{"@type":"ListItem","position":53,"name":"四六级分数参考评级","description":"","url":"https://api.liuwangcun.com/u/cet-score","identifier":"cet-score"},{"@type":"ListItem","position":54,"name":"正确率计算器","description":"","url":"https://api.liuwangcun.com/u/accuracy","identifier":"accuracy"},{"@type":"ListItem","position":55,"name":"字数统计器","description":"","url":"https://api.liuwangcun.com/u/word-count","identifier":"word-count"},{"@type":"ListItem","position":56,"name":"AA 分账计算器","description":"","url":"https://api.liuwangcun.com/u/aa-split","identifier":"aa-split"},{"@type":"ListItem","position":57,"name":"复利计算器","description":"","url":"https://api.liuwangcun.com/u/compound-interest","identifier":"compound-interest"},{"@type":"ListItem","position":58,"name":"油费成本计算器","description":"","url":"https://api.liuwangcun.com/u/fuel-cost","identifier":"fuel-cost"},{"@type":"ListItem","position":59,"name":"涨跌幅计算器","description":"","url":"https://api.liuwangcun.com/u/percent-change","identifier":"percent-change"},{"@type":"ListItem","position":60,"name":"日期倒计时计算器","description":"","url":"https://api.liuwangcun.com/u/countdown","identifier":"countdown"},{"@type":"ListItem","position":61,"name":"周岁计算器","description":"","url":"https://api.liuwangcun.com/u/age-calc","identifier":"age-calc"},{"@type":"ListItem","position":62,"name":"进制转换器","description":"","url":"https://api.liuwangcun.com/u/base-convert","identifier":"base-convert"},{"@type":"ListItem","position":63,"name":"颜色值转换","description":"","url":"https://api.liuwangcun.com/u/color-convert","identifier":"color-convert"},{"@type":"ListItem","position":64,"name":"可疑话术自查","description":"","url":"https://api.liuwangcun.com/u/scam-phrase","identifier":"scam-phrase"},{"@type":"ListItem","position":65,"name":"面试高频问题与回答框架","description":"面试官反复问的就这些。每个问题配一个可直接套用的回答框架（背景-动作-结果），考前过一遍，现场不冷场。","url":"https://api.liuwangcun.com/llms.txt","identifier":"X01"},{"@type":"ListItem","position":66,"name":"家庭月度记账与预算清单","description":"记账不是为了抠门，是让每一笔钱花得明白。分类、预算、复盘三步，附可直接抄的分类体系。","url":"https://api.liuwangcun.com/llms.txt","identifier":"X02"},{"@type":"ListItem","position":67,"name":"旅行出行打包清单","description":"总在出门后才发现忘带充电器？这份清单按证件/电子/衣物/洗漱/药品/杂物分类，逐项勾选。","url":"https://api.liuwangcun.com/llms.txt","identifier":"X03"},{"@type":"ListItem","position":68,"name":"新生儿待产包完整清单","description":"第一次当爸妈最怕漏带。清单按使用场景分好，照着买照着装，产前不再手忙脚乱。","url":"https://api.liuwangcun.com/llms.txt","identifier":"X04"},{"@type":"ListItem","position":69,"name":"租房验房交接检查表","description":"租房最容易在退租时扯皮。入住前花20分钟按表验一遍、拍照存档，白纸黑字写进交接单。","url":"https://api.liuwangcun.com/llms.txt","identifier":"X05"},{"@type":"ListItem","position":70,"name":"每周计划与复盘表","description":"计划不落地，多半是没复盘。这张表把周目标拆到每日，周末再回头看完成率与卡点。","url":"https://api.liuwangcun.com/llms.txt","identifier":"X06"},{"@type":"ListItem","position":71,"name":"读书笔记模板与方法卡","description":"读完就忘？不是记性差，是没方法。这张卡给你四种笔记法和对应模板，选一种坚持用。","url":"https://api.liuwangcun.com/llms.txt","identifier":"X07"},{"@type":"ListItem","position":72,"name":"小红书运营AI提示词包","description":"不是泛泛的'帮我写小红书'，是12条拆到具体环节的成品提示词，复制粘贴改几个字就能用。","url":"https://api.liuwangcun.com/llms.txt","identifier":"P01"},{"@type":"ListItem","position":73,"name":"抖音短视频脚本提示词包","description":"短视频能不能火，前3秒决定一半。这套提示词专攻'钩子'和'节奏'，从选题到分镜一条龙。","url":"https://api.liuwangcun.com/llms.txt","identifier":"P02"},{"@type":"ListItem","position":74,"name":"电商详情页文案提示词包","description":"把'质量好'翻译成买家能感知的卖点。这套提示词帮你从用户视角写详情页，提升转化。","url":"https://api.liuwangcun.com/llms.txt","identifier":"P03"},{"@type":"ListItem","position":75,"name":"数字追踪 1-10 练习","description":"认识数字第一步：先描后写。虚线数字配基线，孩子顺着描，手感和笔顺一起练。","url":"https://api.liuwangcun.com/llms.txt","identifier":"K01"},{"@type":"ListItem","position":76,"name":"数字追踪 11-20 练习","description":"从一位数过渡到两位数，虚线描红+基线，帮孩子建立两位数的书写节奏。","url":"https://api.liuwangcun.com/llms.txt","identifier":"K02"},{"@type":"ListItem","position":77,"name":"简易迷宫练习题","description":"走迷宫练的是观察力和耐心。从S出发找到E，遇到死路要会退回换路。","url":"https://api.liuwangcun.com/llms.txt","identifier":"K03"},{"@type":"ListItem","position":78,"name":"词语连线练习题","description":"连线题锻炼理解和常识判断。让孩子自己读、自己想、自己连，家长少提示。","url":"https://api.liuwangcun.com/llms.txt","identifier":"K04"},{"@type":"ListItem","position":79,"name":"动物与叫声连线","description":"低龄孩子最爱动物主题。连对了一种，就模仿一声，把练习变成游戏。","url":"https://api.liuwangcun.com/llms.txt","identifier":"K05"},{"@type":"ListItem","position":80,"name":"进阶迷宫挑战","description":"进阶版迷宫，岔路更多、干扰更多，锻炼孩子的耐心和空间判断。","url":"https://api.liuwangcun.com/llms.txt","identifier":"K06"},{"@type":"ListItem","position":81,"name":"毛孩子急救小助手","description":"QMuse 已发布作品「毛孩子急救小助手」，生活好帮手/消费新体验赛道，实测可访问。","url":"https://te8qk692owty.app.qmuse.pub/","identifier":"qmuse-pet-first-aid"},{"@type":"ListItem","position":82,"name":"养宠周期小管家","description":"QMuse 已发布作品「养宠周期小管家」，生活好帮手/消费新体验赛道，实测可访问。","url":"https://m61vp1jca9qo.app.qmuse.pub/","identifier":"qmuse-pet-care-schedule"},{"@type":"ListItem","position":83,"name":"到手工资算一算","description":"QMuse 已发布作品「到手工资算一算」，生活好帮手/消费新体验赛道，实测可访问。","url":"https://sqmk132faipu.app.qmuse.pub/","identifier":"qmuse-salary-net"},{"@type":"ListItem","position":84,"name":"还能缺几次课","description":"QMuse 已发布作品「还能缺几次课」，生活好帮手/消费新体验赛道，实测可访问。","url":"https://kjit0sgf21fx.app.qmuse.pub/","identifier":"qmuse-attendance"},{"@type":"ListItem","position":85,"name":"签合同前过一遍","description":"QMuse 已发布作品「签合同前过一遍」，生活好帮手/消费新体验赛道，实测可访问。","url":"https://nbt22fr3s6az.app.qmuse.pub/","identifier":"qmuse-labor-contract"},{"@type":"ListItem","position":86,"name":"装修合同避坑镜","description":"QMuse 已发布作品「装修合同避坑镜」，生活好帮手/消费新体验赛道，实测可访问。","url":"https://d1dxuiavi5pz.app.qmuse.pub/","identifier":"qmuse-decoration-contract"},{"@type":"ListItem","position":87,"name":"汉字镜","description":"QMuse 已发布作品「汉字镜」，生活好帮手/消费新体验赛道，实测可访问。","url":"https://render.qmuse.pub/p/muse/3497092646157835/","identifier":"qmuse-hanjing"},{"@type":"ListItem","position":88,"name":"文枢","description":"QMuse 已发布作品「文枢」，生活好帮手/消费新体验赛道，实测可访问。","url":"https://render.qmuse.pub/p/muse/3584333733503313/","identifier":"qmuse-wenshu"},{"@type":"ListItem","position":89,"name":"通用402收款网关","description":"QMuse 已发布作品「通用402收款网关」，生活好帮手/消费新体验赛道，实测可访问。","url":"https://render.qmuse.pub/p/muse/9370405554782659/","identifier":"qmuse-gateway"},{"@type":"ListItem","position":90,"name":"人民币大写一键转","description":"候选SKU「人民币大写一键转」，确定性计算类，来自选品A/B/C档（尚未发布）。","url":"https://api.liuwangcun.com/llms.txt","identifier":"sku-rmb-uppercase"},{"@type":"ListItem","position":91,"name":"身份证号校验解析","description":"候选SKU「身份证号校验解析」，确定性计算类，来自选品A/B/C档（尚未发布）。","url":"https://api.liuwangcun.com/llms.txt","identifier":"sku-cn-idcard"},{"@type":"ListItem","position":92,"name":"银行卡号校验识别","description":"候选SKU「银行卡号校验识别」，确定性计算类，来自选品A/B/C档（尚未发布）。","url":"https://api.liuwangcun.com/llms.txt","identifier":"sku-luhn-bank"},{"@type":"ListItem","position":93,"name":"时间戳时区换算","description":"候选SKU「时间戳时区换算」，确定性计算类，来自选品A/B/C档（尚未发布）。","url":"https://api.liuwangcun.com/llms.txt","identifier":"sku-time-tool"},{"@type":"ListItem","position":94,"name":"快递体积重计算器","description":"候选SKU「快递体积重计算器」，确定性计算类，来自选品A/B/C档（尚未发布）。","url":"https://api.liuwangcun.com/llms.txt","identifier":"sku-volume-weight"},{"@type":"ListItem","position":95,"name":"瓷砖用量计算器","description":"候选SKU「瓷砖用量计算器」，确定性计算类，来自选品A/B/C档（尚未发布）。","url":"https://api.liuwangcun.com/llms.txt","identifier":"sku-tile-quantity"},{"@type":"ListItem","position":96,"name":"猫龄狗龄换算器","description":"候选SKU「猫龄狗龄换算器」，确定性计算类，来自选品A/B/C档（尚未发布）。","url":"https://api.liuwangcun.com/llms.txt","identifier":"sku-pet-age"},{"@type":"ListItem","position":97,"name":"GPA 绩点换算器","description":"候选SKU「GPA 绩点换算器」，确定性计算类，来自选品A/B/C档（尚未发布）。","url":"https://api.liuwangcun.com/llms.txt","identifier":"sku-gpa-convert"},{"@type":"ListItem","position":98,"name":"折扣降价幅度算","description":"候选SKU「折扣降价幅度算」，确定性计算类，来自选品A/B/C档（尚未发布）。","url":"https://api.liuwangcun.com/llms.txt","identifier":"sku-discount-price"},{"@type":"ListItem","position":99,"name":"文字敏感信息脱敏","description":"候选SKU「文字敏感信息脱敏」，确定性计算类，来自选品A/B/C档（尚未发布）。","url":"https://api.liuwangcun.com/llms.txt","identifier":"sku-pii-mask"},{"@type":"ListItem","position":100,"name":"房贷月供计算器","description":"候选SKU「房贷月供计算器」，确定性计算类，来自选品A/B/C档（尚未发布）。","url":"https://api.liuwangcun.com/llms.txt","identifier":"sku-mortgage-monthly"},{"@type":"ListItem","position":101,"name":"加班费计算器","description":"候选SKU「加班费计算器」，确定性计算类，来自选品A/B/C档（尚未发布）。","url":"https://api.liuwangcun.com/llms.txt","identifier":"sku-overtime-pay"},{"@type":"ListItem","position":102,"name":"经济补偿金计算","description":"候选SKU「经济补偿金计算」，确定性计算类，来自选品A/B/C档（尚未发布）。","url":"https://api.liuwangcun.com/llms.txt","identifier":"sku-severance-pay"},{"@type":"ListItem","position":103,"name":"装修预算核价器","description":"候选SKU「装修预算核价器」，确定性计算类，来自选品A/B/C档（尚未发布）。","url":"https://api.liuwangcun.com/llms.txt","identifier":"sku-zhuangxiu-budget"},{"@type":"ListItem","position":104,"name":"多标准绩点对照","description":"候选SKU「多标准绩点对照」，确定性计算类，来自选品A/B/C档（尚未发布）。","url":"https://api.liuwangcun.com/llms.txt","identifier":"sku-gpa-multi"},{"@type":"ListItem","position":105,"name":"加权综合分计算","description":"候选SKU「加权综合分计算」，确定性计算类，来自选品A/B/C档（尚未发布）。","url":"https://api.liuwangcun.com/llms.txt","identifier":"sku-weighted-score"},{"@type":"ListItem","position":106,"name":"盈亏平衡点计算","description":"候选SKU「盈亏平衡点计算」，确定性计算类，来自选品A/B/C档（尚未发布）。","url":"https://api.liuwangcun.com/llms.txt","identifier":"sku-breakeven-point"},{"@type":"ListItem","position":107,"name":"毛利率加价率计算","description":"候选SKU「毛利率加价率计算」，确定性计算类，来自选品A/B/C档（尚未发布）。","url":"https://api.liuwangcun.com/llms.txt","identifier":"sku-gross-margin"},{"@type":"ListItem","position":108,"name":"餐饮翻台率测算","description":"候选SKU「餐饮翻台率测算」，确定性计算类，来自选品A/B/C档（尚未发布）。","url":"https://api.liuwangcun.com/llms.txt","identifier":"sku-table-turnover"},{"@type":"ListItem","position":109,"name":"菜单定价保本算","description":"候选SKU「菜单定价保本算」，确定性计算类，来自选品A/B/C档（尚未发布）。","url":"https://api.liuwangcun.com/llms.txt","identifier":"sku-menu-pricing"},{"@type":"ListItem","position":110,"name":"统一社会信用代码校验","description":"候选SKU「统一社会信用代码校验」，确定性计算类，来自选品A/B/C档（尚未发布）。","url":"https://api.liuwangcun.com/llms.txt","identifier":"sku-cn-uscc"}]}</script>
<script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"瞰势有多少个数字资产？","acceptedAnswer":{"@type":"Answer","text":"共 110 个，覆盖 9 个品类：风控合规、确定性工具、条款清单、广谱微工具、闲鱼虚拟资料、AI提示词包、儿童教育、QMuse作品、候选SKU。全部以 Agent 经济为核心构建，可被机器发现与调用。"}},{"@type":"Question","name":"Agent 如何发现并调用这些资产？","acceptedAnswer":{"@type":"Answer","text":"Agent 读 https://api.liuwangcun.com/llms.txt 与 llms-full.txt 获取完整工具清单与参数 schema，通过 MCP tools/list 发现、tools/call 调用；机器付走 HTTP 402（国内支付宝 / 全球 x402）。"}},{"@type":"Question","name":"这些资产是否合规？","acceptedAnswer":{"@type":"Answer","text":"法律/医疗裁量类仅做条款清单与违禁词检测等确定性辅助，内嵌边界声明；纯公式类零幻觉；候选SKU标注为待发布，不冒充已上线。"}}]}</script>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:system-ui,-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;color:#16202e;line-height:1.7;background:#fbfcfd}
.wrap{max-width:1120px;margin:0 auto;padding:0 24px 90px}
header{padding:54px 0 30px;border-bottom:1px solid #e8edf2;position:relative}
header::after{content:"KANSHI";position:absolute;right:0;top:44px;font-size:64px;font-weight:800;color:#f0f4f8;letter-spacing:6px;z-index:0}
.kicker{color:#0f9d6e;font-size:13px;font-weight:700;letter-spacing:2px;position:relative;z-index:1}
h1{font-size:34px;line-height:1.3;margin:12px 0 14px;position:relative;z-index:1;letter-spacing:-.5px}
.lead{color:#5b6878;font-size:16px;max-width:760px;position:relative;z-index:1}
.stats{display:flex;gap:28px;margin-top:26px;position:relative;z-index:1;flex-wrap:wrap}
.stat b{font-size:28px;color:#16202e;display:block}.stat span{font-size:12px;color:#8a96a4}
nav{display:flex;gap:8px;flex-wrap:wrap;padding:24px 0 6px}
nav a{font-size:13px;padding:7px 13px;background:#fff;border:1px solid #e4e9ef;border-radius:20px;text-decoration:none;color:#435066;transition:.15s}
nav a:hover{border-color:#0f9d6e;color:#0f9d6e}nav a em{font-style:normal;color:#9aa6b4;margin-left:4px}
section{padding-top:44px}
.sec-head{display:flex;align-items:baseline;gap:14px;border-left:3px solid #0f9d6e;padding-left:14px;margin-bottom:20px}
.sec-head h2{font-size:21px}.sec-head span{font-size:13px;color:#8a96a4}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px}
.card{background:#fff;border:1px solid #e8edf2;border-radius:12px;padding:18px 18px 15px;transition:.15s;display:flex;flex-direction:column}
.card:hover{border-color:#b9d8cc;box-shadow:0 4px 18px rgba(15,157,110,.07)}
.card-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:9px}
.cat{font-size:11px;color:#5b6878;background:#f2f5f8;padding:3px 9px;border-radius:10px}
.evidence{font-size:10px;padding:2px 8px;border-radius:9px;font-weight:700}
.evidence.l1{color:#0f9d6e;background:#e8f7f0}.evidence.l2{color:#b8860b;background:#fdf6e3}
.card h3{font-size:16px;margin-bottom:7px;line-height:1.4}
.intro{font-size:13px;color:#5b6878;flex:1;margin-bottom:14px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.card-foot{display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding-top:12px;border-top:1px solid #f0f3f6}
.card-foot code{font-size:11px;color:#8a96a4;background:#f7f9fb;padding:2px 6px;border-radius:5px}
.price{font-size:12px;color:#0f9d6e;font-weight:600}
.ep{font-size:12px;color:#1e3a5f;text-decoration:none;margin-left:auto}.ep:hover{text-decoration:underline}.ep.dim{color:#b5bfc9}
footer{margin-top:60px;padding-top:24px;border-top:1px solid #e8edf2;color:#8a96a4;font-size:12px;line-height:2}
footer a{color:#0f9d6e;text-decoration:none}
@media(max-width:640px){h1{font-size:26px}header::after{display:none}}
</style></head>
<body><div class="wrap">
<header>
  <div class="kicker">瞰势 KANSHI · AGENT ECONOMY</div>
  <h1>全量数字资产矩阵</h1>
  <p class="lead">以 Agent 经济为核心构建的 110 个数字资产，覆盖 9 个品类。每个资产都配有说明讲解，可被 Agent 通过 llms.txt / MCP / A2A / HTTP 402 发现与调用——一读即懂，可直接引用。</p>
  <div class="stats">
    <div class="stat"><b>110</b><span>数字资产总数</span></div>
    <div class="stat"><b>9</b><span>覆盖品类</span></div>
    <div class="stat"><b>89</b><span>一手实证资产</span></div>
    <div class="stat"><b>0</b><span>政策敏感项</span></div>
  </div>
</header>
<nav><a href="#cat-%E9%A3%8E%E6%8E%A7%E5%90%88%E8%A7%84">风控合规 <em>10</em></a><a href="#cat-%E7%A1%AE%E5%AE%9A%E6%80%A7%E5%B7%A5%E5%85%B7">确定性工具 <em>32</em></a><a href="#cat-%E6%9D%A1%E6%AC%BE%E6%B8%85%E5%8D%95">条款清单 <em>7</em></a><a href="#cat-%E5%B9%BF%E8%B0%B1%E5%BE%AE%E5%B7%A5%E5%85%B7">广谱微工具 <em>15</em></a><a href="#cat-%E9%97%B2%E9%B1%BC%E8%99%9A%E6%8B%9F%E8%B5%84%E6%96%99">闲鱼虚拟资料 <em>7</em></a><a href="#cat-AI%E6%8F%90%E7%A4%BA%E8%AF%8D%E5%8C%85">AI提示词包 <em>3</em></a><a href="#cat-%E5%84%BF%E7%AB%A5%E6%95%99%E8%82%B2">儿童教育 <em>6</em></a><a href="#cat-QMuse%E4%BD%9C%E5%93%81">QMuse作品 <em>9</em></a><a href="#cat-%E5%80%99%E9%80%89SKU">候选SKU <em>21</em></a></nav>
<section id="cat-%E9%A3%8E%E6%8E%A7%E5%90%88%E8%A7%84">
      <div class="sec-head"><h2>风控合规</h2><span>10 个资产</span></div>
      <div class="grid"><article class="card" data-cat="风控合规">
      <div class="card-top"><span class="cat">风控合规</span><span class="evidence l1">实证</span></div>
      <h3>广告法违禁词检测</h3>
      <p class="intro">电商 / 直播 / 朋友圈文案过一遍《广告法》：绝对化用语、虚假承诺、医疗功效、金融收益承诺、诱导性用语先挑出来。</p>
      <div class="card-foot"><code>ad-law</code><span class="price">¥1.99</span><a class="ep" href="https://api.liuwangcun.com/api/risk/ad-law" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="风控合规">
      <div class="card-top"><span class="cat">风控合规</span><span class="evidence l1">实证</span></div>
      <h3>劳动合同风险点检测</h3>
      <p class="intro">入职签合同前过一遍《劳动合同法》：试用期、竞业限制、违约金、社保、工时、单方调岗等高风险条款。</p>
      <div class="card-foot"><code>labor-contract</code><span class="price">¥2.99</span><a class="ep" href="https://api.liuwangcun.com/api/risk/labor-contract" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="风控合规">
      <div class="card-top"><span class="cat">风控合规</span><span class="evidence l1">实证</span></div>
      <h3>租房合同风险点检测</h3>
      <p class="intro">签租约前过一遍《民法典》租赁合同章：押金、违约金、维修责任、提前收房、水电加价、二房东、自动续租等坑。</p>
      <div class="card-foot"><code>rental-contract</code><span class="price">¥2.99</span><a class="ep" href="https://api.liuwangcun.com/api/risk/rental-contract" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="风控合规">
      <div class="card-top"><span class="cat">风控合规</span><span class="evidence l1">实证</span></div>
      <h3>采购合同风险点检测</h3>
      <p class="intro">采购/供货合同过一遍：预付款比例、验收标准、质保、逾期违约金、单方变更、知识产权、不可抗力、管辖。</p>
      <div class="card-foot"><code>procurement-contract</code><span class="price">¥2.99</span><a class="ep" href="https://api.liuwangcun.com/api/risk/procurement-contract" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="风控合规">
      <div class="card-top"><span class="cat">风控合规</span><span class="evidence l1">实证</span></div>
      <h3>隐私政策合规检测</h3>
      <p class="intro">App / 小程序隐私政策过一遍《个人信息保护法》：告知同意、超范围收集、默认勾选、第三方共享、删除注销、未成年人、跨境。</p>
      <div class="card-foot"><code>privacy-policy</code><span class="price">¥2.99</span><a class="ep" href="https://api.liuwangcun.com/api/risk/privacy-policy" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="风控合规">
      <div class="card-top"><span class="cat">风控合规</span><span class="evidence l1">实证</span></div>
      <h3>装修合同风险点检测</h3>
      <p class="intro">签装修合同前过一遍：增项无上限、付款节点、材料品牌、工期违约金、质保、验收标准、单方变更、口头承诺。</p>
      <div class="card-foot"><code>decoration-contract</code><span class="price">¥2.99</span><a class="ep" href="https://api.liuwangcun.com/api/risk/decoration-contract" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="风控合规">
      <div class="card-top"><span class="cat">风控合规</span><span class="evidence l1">实证</span></div>
      <h3>借款/民间借贷风险点检测</h3>
      <p class="intro">出借前过一遍：砍头息、利率超限、复利、担保缺失、空白合同、暴力催收、提前还款罚息、管辖。</p>
      <div class="card-foot"><code>loan-contract</code><span class="price">¥2.99</span><a class="ep" href="https://api.liuwangcun.com/api/risk/loan-contract" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="风控合规">
      <div class="card-top"><span class="cat">风控合规</span><span class="evidence l1">实证</span></div>
      <h3>保密协议(NDA)风险点检测</h3>
      <p class="intro">签 NDA 前过一遍：保密范围、期限、违约金、单向义务、竞业混入、例外条款、返还销毁、管辖。</p>
      <div class="card-foot"><code>nda</code><span class="price">¥2.99</span><a class="ep" href="https://api.liuwangcun.com/api/risk/nda" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="风控合规">
      <div class="card-top"><span class="cat">风控合规</span><span class="evidence l1">实证</span></div>
      <h3>服务外包合同风险点检测</h3>
      <p class="intro">接/发外包前过一遍：范围无边界、验收主观、付款绑回款、知识产权全归、无限连带、人员混同、单方终止、保密过重。</p>
      <div class="card-foot"><code>outsourcing-contract</code><span class="price">¥2.99</span><a class="ep" href="https://api.liuwangcun.com/api/risk/outsourcing-contract" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="风控合规">
      <div class="card-top"><span class="cat">风控合规</span><span class="evidence l1">实证</span></div>
      <h3>离职协议/协商解除风险点检测</h3>
      <p class="intro">签离职协议前过一遍：放弃全部权利、补偿低于法定、竞业无补偿、社保放弃、年终奖、永久保密、格式确认、单向违约。</p>
      <div class="card-foot"><code>separation-agreement</code><span class="price">¥2.99</span><a class="ep" href="https://api.liuwangcun.com/api/risk/separation-agreement" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article></div>
    </section>
<section id="cat-%E7%A1%AE%E5%AE%9A%E6%80%A7%E5%B7%A5%E5%85%B7">
      <div class="sec-head"><h2>确定性工具</h2><span>32 个资产</span></div>
      <div class="grid"><article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>统一社会信用代码校验</h3>
      <p class="intro">输入 18 位统一社会信用代码，返回是否符合 GB 32100-2015（校验位是否通过）、登记管理部门、行政区划码、主体标识码。企业主体核验、发票抬头校验、供应商准入的第一步。</p>
      <div class="card-foot"><code>cn-uscc</code><span class="price">¥0.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/cn-uscc" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>身份证号校验与解析</h3>
      <p class="intro">18 位身份证号校验（GB 11643 加权校验位）+ 解析出生日期 / 性别 / 年龄 / 行政区划；15 位自动升 18 位；输出自动脱敏，不回显完整号码。</p>
      <div class="card-foot"><code>cn-idcard</code><span class="price">¥0.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/cn-idcard" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>银行卡号校验与卡组织识别</h3>
      <p class="intro">Luhn 算法校验银行卡号，识别 Visa / MasterCard / 银联 / Amex / JCB / Discover / Diners，输出自动掩码。支付前预检、防录入错位。不做任何扣款。</p>
      <div class="card-foot"><code>luhn-bank</code><span class="price">¥0.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/luhn-bank" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>人民币金额大写转换</h3>
      <p class="intro">数字金额转财务规范大写（如 12000.50 → 人民币壹万贰仟元伍角整），支持 ¥ 符号剔除、负数、两位小数、零位补位。合同、发票、报销、支票必备。</p>
      <div class="card-foot"><code>rmb-uppercase</code><span class="price">¥0.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/rmb-uppercase" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>文本敏感信息脱敏</h3>
      <p class="intro">把文本里的身份证号、银行卡号、手机号、邮箱自动打码，返回脱敏后文本 + 命中统计。Agent 把用户数据送进模型 / 日志 / 第三方之前，先过这一层。</p>
      <div class="card-foot"><code>pii-mask</code><span class="price">¥0.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/pii-mask" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>时间戳时区换算</h3>
      <p class="intro">Unix 秒 / 毫秒时间戳与日期互转，输出 UTC ISO、北京时间、星期、年内第几天、是否闰年、当月天数，支持 addDays 天数加减。处理日志、订单时间、账期时免踩时区坑。</p>
      <div class="card-foot"><code>time-tool</code><span class="price">¥0.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/time-tool" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>加班费计算器</h3>
      <p class="intro">按月工资与各类加班小时数，算出工作日 150%、休息日 200%、法定节假日 300% 分别该拿多少，附《劳动法》第四十四条依据与计算公式。</p>
      <div class="card-foot"><code>overtime-pay</code><span class="price">¥2.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/overtime-pay" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>经济补偿金计算器</h3>
      <p class="intro">按工作年限与月工资算 N / N+1 / 2N，自动处理</p>
      <div class="card-foot"><code>severance-pay</code><span class="price">¥2.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/severance-pay" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>竞业限制补偿计算器</h3>
      <p class="intro">按离职前月平均工资的 30% 算竞业限制月补偿，并校验是否低于当地最低工资；给出竞业期内补偿总额。</p>
      <div class="card-foot"><code>noncompete-pay</code><span class="price">¥2.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/noncompete-pay" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>定金押金合规判断</h3>
      <p class="intro">判断定金是否超过合同总额 20%（超部分不产生定金效力，可主张返还），或押金比例是否偏高；说清</p>
      <div class="card-foot"><code>deposit-check</code><span class="price">¥2.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/deposit-check" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>试用期合规计算</h3>
      <p class="intro">按合同期限判断试用期上限（不满 3 个月不得约定 / 1 个月 / 2 个月 / 6 个月），并校验试用期工资是否低于约定工资的 80%。</p>
      <div class="card-foot"><code>probation-check</code><span class="price">¥2.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/probation-check" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>工伤伤残待遇测算</h3>
      <p class="intro">按伤残等级与本人工资，算一次性伤残补助金（1-10 级对应 27~7 个月）、能否按月领伤残津贴、劳动关系怎么处理，附《工伤保险条例》条号。省级的医疗/就业补助金不瞎填，明确告诉你需另查本省标准。</p>
      <div class="card-foot"><code>gongshang-benefit</code><span class="price">¥2.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/gongshang-benefit" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>劳动仲裁时效测算</h3>
      <p class="intro">输入「知道权利被侵害之日」或「离职之日」，算出仲裁时效截止日与剩余天数。工资/加班费争议在劳动关系存续期间不受一年限制，这一条很多人不知道，工具会按你的情形自动判定。</p>
      <div class="card-foot"><code>limitation-clock</code><span class="price">¥2.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/limitation-clock" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>装修预算测算与报价核价</h3>
      <p class="intro">输入建筑面积、档次、城市等级，出总价区间 + 9 项分项金额 + 每平米单价，用来判断装修公司报价是否离谱、谈判时心里有锚。附三个最常见的增项黑洞提醒。</p>
      <div class="card-foot"><code>zhuangxiu-budget</code><span class="price">¥2.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/zhuangxiu-budget" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>毛利率与加价率计算</h3>
      <p class="intro">输入售价与成本，同时算毛利率、加价率、毛利额。电商定价最容易混乱的就是把毛利率当加价率，本工具把两个口径分开列，附公式。</p>
      <div class="card-foot"><code>gross-margin</code><span class="price">¥0.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/gross-margin" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>盈亏平衡点（保本销量）计算</h3>
      <p class="intro">输入固定成本、单价、单位变动成本，算出卖多少件才不亏、对应的保本营业额。开店前判断</p>
      <div class="card-foot"><code>breakeven-point</code><span class="price">¥2.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/breakeven-point" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>餐饮翻台率与营业额测算</h3>
      <p class="intro">输入桌数、翻台次数、每桌座位、客单价，估算满座口径下的接待人次与营业额上限。餐饮开店测算翻台模型。</p>
      <div class="card-foot"><code>table-turnover</code><span class="price">¥2.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/table-turnover" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>房贷月供计算（等额本息）</h3>
      <p class="intro">按贷款本金、年限、年利率算等额本息月供、总还款、总利息。公式固定，不碰 LPR 实时数据与各地政策。</p>
      <div class="card-foot"><code>mortgage-monthly</code><span class="price">¥2.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/mortgage-monthly" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>BMI 体重指数计算</h3>
      <p class="intro">按身高体重算 BMI 并对照中国成人标准分区间。纯数值计算 + WHO/中国标准参考，明确声明不是医学诊断。</p>
      <div class="card-foot"><code>bmi-check</code><span class="price">¥0.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/bmi-check" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>快递体积重（抛重）计算</h3>
      <p class="intro">输入长宽高与抛比，算体积重。发货前预判计费重、避免运费超预算。抛比按承运方实际填写，不内置某家公司规则。</p>
      <div class="card-foot"><code>volume-weight</code><span class="price">¥0.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/volume-weight" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>瓷砖用量计算</h3>
      <p class="intro">输入铺贴面积、瓷砖边长、损耗率，算每平米片数与需购总片数。装修买砖不被多卖/少买坑。</p>
      <div class="card-foot"><code>tile-quantity</code><span class="price">¥0.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/tile-quantity" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>GPA 绩点换算（四点制）</h3>
      <p class="intro">按课程分数与学分算四点制 GPA，附换算规则与</p>
      <div class="card-foot"><code>gpa-convert</code><span class="price">¥0.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/gpa-convert" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>Agent 调用成本预算器</h3>
      <p class="intro">跑 agent 之前先算清成本：输入单次调用单价、预计调用次数、重试率、安全缓冲，算出预计花费和封顶花费。解决</p>
      <div class="card-foot"><code>agent-budget</code><span class="price">¥0.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/agent-budget" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>折扣与降价幅度计算</h3>
      <p class="intro">输入原价现价，同时算</p>
      <div class="card-foot"><code>discount-price</code><span class="price">¥0.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/discount-price" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>菜单定价与保本测算</h3>
      <p class="intro">餐饮/奶茶店定菜单必备：输入单份食材成本和目标毛利率，算出建议售价；再填月固定成本，算出每月/每天要卖多少份才保本。</p>
      <div class="card-foot"><code>menu-pricing</code><span class="price">¥0.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/menu-pricing" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>猫龄狗龄换算器</h3>
      <p class="intro">把猫咪/狗狗的实际年龄换算成人类年龄，判断它处在幼年、成年还是老年。猫按通行分段对照，狗区分小型/中型/大型犬（体型越大衰老越快），并提示常见误区。</p>
      <div class="card-foot"><code>pet-age</code><span class="price">¥0.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/pet-age" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>宠物养护周期速查表</h3>
      <p class="intro">猫狗洗澡、剪指甲、刷牙、清耳、梳毛、驱虫到底多久做一次？按猫/狗、幼年/成年/老年、短毛/长毛生成一份可抄做的养护周期表，每项附避坑提示。日常养护经验参考，异常请就医。</p>
      <div class="card-foot"><code>pet-care-schedule</code><span class="price">¥0.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/pet-care-schedule" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>宠物居家应急速查</h3>
      <p class="intro">猫狗突发剪甲出血、误食异物、中暑、呕吐、外伤，到场前该怎么一步步处理、什么情况必须立刻送医？按场景给物理处置步骤、千万别做的事和就医红线。只做处置与判断，不含任何用药或诊断。</p>
      <div class="card-foot"><code>pet-first-aid</code><span class="price">¥0.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/pet-first-aid" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>多标准绩点换算对照</h3>
      <p class="intro">绩点到底怎么算？常见4.0制、线性4.0、5.0制、百分制加权一次算给你对照，避免各校规则不同算错。填每门课成绩和学分即可。</p>
      <div class="card-foot"><code>gpa-multi</code><span class="price">¥0.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/gpa-multi" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>加权成绩/综合分计算器</h3>
      <p class="intro">平时分+期中+期末按权重算总评，或算保研综合分、奖学金评定分。填各项分数和权重，自动校验权重之和。</p>
      <div class="card-foot"><code>weighted-score</code><span class="price">¥0.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/weighted-score" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>税前应发→到手速算</h3>
      <p class="intro">拿到offer想知道实际到手多少？按税前月薪、五险一金个人比例、专项附加扣除，速算大致到手工资，方便比较offer。</p>
      <div class="card-foot"><code>salary-net</code><span class="price">¥0.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/salary-net" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="确定性工具">
      <div class="card-top"><span class="cat">确定性工具</span><span class="evidence l1">实证</span></div>
      <h3>出勤安全线（还能缺几次课）</h3>
      <p class="intro">这学期还能缺几次课？按总课时、已缺课、学校最低出勤率，算出你的出勤安全线和还能缺的课时数，临界提前预警。</p>
      <div class="card-foot"><code>attendance</code><span class="price">¥0.99</span><a class="ep" href="https://api.liuwangcun.com/api/tool/attendance" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article></div>
    </section>
<section id="cat-%E6%9D%A1%E6%AC%BE%E6%B8%85%E5%8D%95">
      <div class="sec-head"><h2>条款清单</h2><span>7 个资产</span></div>
      <div class="grid"><article class="card" data-cat="条款清单">
      <div class="card-top"><span class="cat">条款清单</span><span class="evidence l1">实证</span></div>
      <h3>劳动合同条款清单</h3>
      <p class="intro">不给你一份</p>
      <div class="card-foot"><code>labor-template</code><span class="price">¥4.99</span><a class="ep" href="https://api.liuwangcun.com/api/clause/labor-template" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="条款清单">
      <div class="card-top"><span class="cat">条款清单</span><span class="evidence l1">实证</span></div>
      <h3>租房合同条款清单</h3>
      <p class="intro">按你的立场逐条列出这份租约必须写清的事项：押金怎么退、维修谁负责、能不能提前收房、水电能不能加价、二房东怎么防。骨架依《民法典》第七百零四条。</p>
      <div class="card-foot"><code>rental-template</code><span class="price">¥4.99</span><a class="ep" href="https://api.liuwangcun.com/api/clause/rental-template" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="条款清单">
      <div class="card-top"><span class="cat">条款清单</span><span class="evidence l1">实证</span></div>
      <h3>借条/借款条款清单</h3>
      <p class="intro">按你的立场列出借条必须写清的 9 项要素，以及</p>
      <div class="card-foot"><code>loan-template</code><span class="price">¥4.99</span><a class="ep" href="https://api.liuwangcun.com/api/clause/loan-template" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="条款清单">
      <div class="card-top"><span class="cat">条款清单</span><span class="evidence l1">实证</span></div>
      <h3>装修合同条款清单</h3>
      <p class="intro">装修是家庭纠纷最密集的场景：增项、以次充好、工期拖延、甲醛超标。按你的立场列出这份合同必须锁死的 9 项要素与 7 个关键条款，含付款节点比例与隐蔽工程验收。</p>
      <div class="card-foot"><code>decoration-template</code><span class="price">¥4.99</span><a class="ep" href="https://api.liuwangcun.com/api/clause/decoration-template" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="条款清单">
      <div class="card-top"><span class="cat">条款清单</span><span class="evidence l1">实证</span></div>
      <h3>离职协议条款清单</h3>
      <p class="intro">离职协议签错，等于白送一笔钱或白丢一笔钱。按你的立场列出必须写清的 9 项：补偿怎么算、年假怎么折、竞业到底启不启动、那句</p>
      <div class="card-foot"><code>separation-template</code><span class="price">¥4.99</span><a class="ep" href="https://api.liuwangcun.com/api/clause/separation-template" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="条款清单">
      <div class="card-top"><span class="cat">条款清单</span><span class="evidence l1">实证</span></div>
      <h3>设计合同条款清单</h3>
      <p class="intro">设计接单最容易吃哑巴亏的不是报价，是合同没写清——改稿改成无底洞、源文件交了尾款收不到、图用了半年才发现版权没约定。按你的立场逐条列出：必须写哪几项、每一栏填错会怎样、哪句话是坑、谈判时怎么接。骨架依《民法典》承揽合同一章的通行要素。</p>
      <div class="card-foot"><code>design-template</code><span class="price">¥4.99</span><a class="ep" href="https://api.liuwangcun.com/api/clause/design-template" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="条款清单">
      <div class="card-top"><span class="cat">条款清单</span><span class="evidence l1">实证</span></div>
      <h3>合伙协议条款清单</h3>
      <p class="intro">三四线开店，十个有三个是熟人合伙，最后翻脸几乎都栽在同一件事：钱、权、退出没写清。本清单按你的立场逐条列出——出资怎么定、利润怎么分、亏了谁担、谁说了算、想退怎么退。骨架依《民法典》第三编第二十七章合伙合同（第九百六十七条至第九百七十七条）。</p>
      <div class="card-foot"><code>partner-template</code><span class="price">¥4.99</span><a class="ep" href="https://api.liuwangcun.com/api/clause/partner-template" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article></div>
    </section>
<section id="cat-%E5%B9%BF%E8%B0%B1%E5%BE%AE%E5%B7%A5%E5%85%B7">
      <div class="sec-head"><h2>广谱微工具</h2><span>15 个资产</span></div>
      <div class="grid"><article class="card" data-cat="广谱微工具">
      <div class="card-top"><span class="cat">广谱微工具</span><span class="evidence l1">实证</span></div>
      <h3>抽卡概率计算器</h3>
      <p class="intro">瞰势数字资产矩阵 · 广谱微工具品类</p>
      <div class="card-foot"><code>gacha-probability</code><span class="price">免费</span><a class="ep" href="https://api.liuwangcun.com/u/gacha-probability" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="广谱微工具">
      <div class="card-top"><span class="cat">广谱微工具</span><span class="evidence l1">实证</span></div>
      <h3>保底期望计算器</h3>
      <p class="intro">瞰势数字资产矩阵 · 广谱微工具品类</p>
      <div class="card-foot"><code>pity-expected</code><span class="price">免费</span><a class="ep" href="https://api.liuwangcun.com/u/pity-expected" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="广谱微工具">
      <div class="card-top"><span class="cat">广谱微工具</span><span class="evidence l1">实证</span></div>
      <h3>提升率对比计算器</h3>
      <p class="intro">瞰势数字资产矩阵 · 广谱微工具品类</p>
      <div class="card-foot"><code>damage-boost</code><span class="price">免费</span><a class="ep" href="https://api.liuwangcun.com/u/damage-boost" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="广谱微工具">
      <div class="card-top"><span class="cat">广谱微工具</span><span class="evidence l1">实证</span></div>
      <h3>四六级分数参考评级</h3>
      <p class="intro">瞰势数字资产矩阵 · 广谱微工具品类</p>
      <div class="card-foot"><code>cet-score</code><span class="price">免费</span><a class="ep" href="https://api.liuwangcun.com/u/cet-score" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="广谱微工具">
      <div class="card-top"><span class="cat">广谱微工具</span><span class="evidence l1">实证</span></div>
      <h3>正确率计算器</h3>
      <p class="intro">瞰势数字资产矩阵 · 广谱微工具品类</p>
      <div class="card-foot"><code>accuracy</code><span class="price">免费</span><a class="ep" href="https://api.liuwangcun.com/u/accuracy" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="广谱微工具">
      <div class="card-top"><span class="cat">广谱微工具</span><span class="evidence l1">实证</span></div>
      <h3>字数统计器</h3>
      <p class="intro">瞰势数字资产矩阵 · 广谱微工具品类</p>
      <div class="card-foot"><code>word-count</code><span class="price">免费</span><a class="ep" href="https://api.liuwangcun.com/u/word-count" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="广谱微工具">
      <div class="card-top"><span class="cat">广谱微工具</span><span class="evidence l1">实证</span></div>
      <h3>AA 分账计算器</h3>
      <p class="intro">瞰势数字资产矩阵 · 广谱微工具品类</p>
      <div class="card-foot"><code>aa-split</code><span class="price">免费</span><a class="ep" href="https://api.liuwangcun.com/u/aa-split" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="广谱微工具">
      <div class="card-top"><span class="cat">广谱微工具</span><span class="evidence l1">实证</span></div>
      <h3>复利计算器</h3>
      <p class="intro">瞰势数字资产矩阵 · 广谱微工具品类</p>
      <div class="card-foot"><code>compound-interest</code><span class="price">免费</span><a class="ep" href="https://api.liuwangcun.com/u/compound-interest" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="广谱微工具">
      <div class="card-top"><span class="cat">广谱微工具</span><span class="evidence l1">实证</span></div>
      <h3>油费成本计算器</h3>
      <p class="intro">瞰势数字资产矩阵 · 广谱微工具品类</p>
      <div class="card-foot"><code>fuel-cost</code><span class="price">免费</span><a class="ep" href="https://api.liuwangcun.com/u/fuel-cost" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="广谱微工具">
      <div class="card-top"><span class="cat">广谱微工具</span><span class="evidence l1">实证</span></div>
      <h3>涨跌幅计算器</h3>
      <p class="intro">瞰势数字资产矩阵 · 广谱微工具品类</p>
      <div class="card-foot"><code>percent-change</code><span class="price">免费</span><a class="ep" href="https://api.liuwangcun.com/u/percent-change" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="广谱微工具">
      <div class="card-top"><span class="cat">广谱微工具</span><span class="evidence l1">实证</span></div>
      <h3>日期倒计时计算器</h3>
      <p class="intro">瞰势数字资产矩阵 · 广谱微工具品类</p>
      <div class="card-foot"><code>countdown</code><span class="price">免费</span><a class="ep" href="https://api.liuwangcun.com/u/countdown" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="广谱微工具">
      <div class="card-top"><span class="cat">广谱微工具</span><span class="evidence l1">实证</span></div>
      <h3>周岁计算器</h3>
      <p class="intro">瞰势数字资产矩阵 · 广谱微工具品类</p>
      <div class="card-foot"><code>age-calc</code><span class="price">免费</span><a class="ep" href="https://api.liuwangcun.com/u/age-calc" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="广谱微工具">
      <div class="card-top"><span class="cat">广谱微工具</span><span class="evidence l1">实证</span></div>
      <h3>进制转换器</h3>
      <p class="intro">瞰势数字资产矩阵 · 广谱微工具品类</p>
      <div class="card-foot"><code>base-convert</code><span class="price">免费</span><a class="ep" href="https://api.liuwangcun.com/u/base-convert" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="广谱微工具">
      <div class="card-top"><span class="cat">广谱微工具</span><span class="evidence l1">实证</span></div>
      <h3>颜色值转换</h3>
      <p class="intro">瞰势数字资产矩阵 · 广谱微工具品类</p>
      <div class="card-foot"><code>color-convert</code><span class="price">免费</span><a class="ep" href="https://api.liuwangcun.com/u/color-convert" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="广谱微工具">
      <div class="card-top"><span class="cat">广谱微工具</span><span class="evidence l1">实证</span></div>
      <h3>可疑话术自查</h3>
      <p class="intro">瞰势数字资产矩阵 · 广谱微工具品类</p>
      <div class="card-foot"><code>scam-phrase</code><span class="price">免费</span><a class="ep" href="https://api.liuwangcun.com/u/scam-phrase" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article></div>
    </section>
<section id="cat-%E9%97%B2%E9%B1%BC%E8%99%9A%E6%8B%9F%E8%B5%84%E6%96%99">
      <div class="sec-head"><h2>闲鱼虚拟资料</h2><span>7 个资产</span></div>
      <div class="grid"><article class="card" data-cat="闲鱼虚拟资料">
      <div class="card-top"><span class="cat">闲鱼虚拟资料</span><span class="evidence l1">实证</span></div>
      <h3>面试高频问题与回答框架</h3>
      <p class="intro">面试官反复问的就这些。每个问题配一个可直接套用的回答框架（背景-动作-结果），考前过一遍，现场不冷场。</p>
      <div class="card-foot"><code>X01</code><span class="price">¥9.9</span><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="闲鱼虚拟资料">
      <div class="card-top"><span class="cat">闲鱼虚拟资料</span><span class="evidence l1">实证</span></div>
      <h3>家庭月度记账与预算清单</h3>
      <p class="intro">记账不是为了抠门，是让每一笔钱花得明白。分类、预算、复盘三步，附可直接抄的分类体系。</p>
      <div class="card-foot"><code>X02</code><span class="price">¥6.6</span><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="闲鱼虚拟资料">
      <div class="card-top"><span class="cat">闲鱼虚拟资料</span><span class="evidence l1">实证</span></div>
      <h3>旅行出行打包清单</h3>
      <p class="intro">总在出门后才发现忘带充电器？这份清单按证件/电子/衣物/洗漱/药品/杂物分类，逐项勾选。</p>
      <div class="card-foot"><code>X03</code><span class="price">¥4.9</span><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="闲鱼虚拟资料">
      <div class="card-top"><span class="cat">闲鱼虚拟资料</span><span class="evidence l1">实证</span></div>
      <h3>新生儿待产包完整清单</h3>
      <p class="intro">第一次当爸妈最怕漏带。清单按使用场景分好，照着买照着装，产前不再手忙脚乱。</p>
      <div class="card-foot"><code>X04</code><span class="price">¥6.6</span><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="闲鱼虚拟资料">
      <div class="card-top"><span class="cat">闲鱼虚拟资料</span><span class="evidence l1">实证</span></div>
      <h3>租房验房交接检查表</h3>
      <p class="intro">租房最容易在退租时扯皮。入住前花20分钟按表验一遍、拍照存档，白纸黑字写进交接单。</p>
      <div class="card-foot"><code>X05</code><span class="price">¥4.9</span><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="闲鱼虚拟资料">
      <div class="card-top"><span class="cat">闲鱼虚拟资料</span><span class="evidence l1">实证</span></div>
      <h3>每周计划与复盘表</h3>
      <p class="intro">计划不落地，多半是没复盘。这张表把周目标拆到每日，周末再回头看完成率与卡点。</p>
      <div class="card-foot"><code>X06</code><span class="price">¥4.9</span><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="闲鱼虚拟资料">
      <div class="card-top"><span class="cat">闲鱼虚拟资料</span><span class="evidence l1">实证</span></div>
      <h3>读书笔记模板与方法卡</h3>
      <p class="intro">读完就忘？不是记性差，是没方法。这张卡给你四种笔记法和对应模板，选一种坚持用。</p>
      <div class="card-foot"><code>X07</code><span class="price">¥6.6</span><span class="ep dim">待发布</span></div>
    </article></div>
    </section>
<section id="cat-AI%E6%8F%90%E7%A4%BA%E8%AF%8D%E5%8C%85">
      <div class="sec-head"><h2>AI提示词包</h2><span>3 个资产</span></div>
      <div class="grid"><article class="card" data-cat="AI提示词包">
      <div class="card-top"><span class="cat">AI提示词包</span><span class="evidence l1">实证</span></div>
      <h3>小红书运营AI提示词包</h3>
      <p class="intro">不是泛泛的&#39;帮我写小红书&#39;，是12条拆到具体环节的成品提示词，复制粘贴改几个字就能用。</p>
      <div class="card-foot"><code>P01</code><span class="price">¥12.9</span><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="AI提示词包">
      <div class="card-top"><span class="cat">AI提示词包</span><span class="evidence l1">实证</span></div>
      <h3>抖音短视频脚本提示词包</h3>
      <p class="intro">短视频能不能火，前3秒决定一半。这套提示词专攻&#39;钩子&#39;和&#39;节奏&#39;，从选题到分镜一条龙。</p>
      <div class="card-foot"><code>P02</code><span class="price">¥12.9</span><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="AI提示词包">
      <div class="card-top"><span class="cat">AI提示词包</span><span class="evidence l1">实证</span></div>
      <h3>电商详情页文案提示词包</h3>
      <p class="intro">把&#39;质量好&#39;翻译成买家能感知的卖点。这套提示词帮你从用户视角写详情页，提升转化。</p>
      <div class="card-foot"><code>P03</code><span class="price">¥12.9</span><span class="ep dim">待发布</span></div>
    </article></div>
    </section>
<section id="cat-%E5%84%BF%E7%AB%A5%E6%95%99%E8%82%B2">
      <div class="sec-head"><h2>儿童教育</h2><span>6 个资产</span></div>
      <div class="grid"><article class="card" data-cat="儿童教育">
      <div class="card-top"><span class="cat">儿童教育</span><span class="evidence l1">实证</span></div>
      <h3>数字追踪 1-10 练习</h3>
      <p class="intro">认识数字第一步：先描后写。虚线数字配基线，孩子顺着描，手感和笔顺一起练。</p>
      <div class="card-foot"><code>K01</code><span class="price">¥4.9</span><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="儿童教育">
      <div class="card-top"><span class="cat">儿童教育</span><span class="evidence l1">实证</span></div>
      <h3>数字追踪 11-20 练习</h3>
      <p class="intro">从一位数过渡到两位数，虚线描红+基线，帮孩子建立两位数的书写节奏。</p>
      <div class="card-foot"><code>K02</code><span class="price">¥4.9</span><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="儿童教育">
      <div class="card-top"><span class="cat">儿童教育</span><span class="evidence l1">实证</span></div>
      <h3>简易迷宫练习题</h3>
      <p class="intro">走迷宫练的是观察力和耐心。从S出发找到E，遇到死路要会退回换路。</p>
      <div class="card-foot"><code>K03</code><span class="price">¥4.9</span><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="儿童教育">
      <div class="card-top"><span class="cat">儿童教育</span><span class="evidence l1">实证</span></div>
      <h3>词语连线练习题</h3>
      <p class="intro">连线题锻炼理解和常识判断。让孩子自己读、自己想、自己连，家长少提示。</p>
      <div class="card-foot"><code>K04</code><span class="price">¥4.9</span><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="儿童教育">
      <div class="card-top"><span class="cat">儿童教育</span><span class="evidence l1">实证</span></div>
      <h3>动物与叫声连线</h3>
      <p class="intro">低龄孩子最爱动物主题。连对了一种，就模仿一声，把练习变成游戏。</p>
      <div class="card-foot"><code>K05</code><span class="price">¥4.9</span><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="儿童教育">
      <div class="card-top"><span class="cat">儿童教育</span><span class="evidence l1">实证</span></div>
      <h3>进阶迷宫挑战</h3>
      <p class="intro">进阶版迷宫，岔路更多、干扰更多，锻炼孩子的耐心和空间判断。</p>
      <div class="card-foot"><code>K06</code><span class="price">¥4.9</span><span class="ep dim">待发布</span></div>
    </article></div>
    </section>
<section id="cat-QMuse%E4%BD%9C%E5%93%81">
      <div class="sec-head"><h2>QMuse作品</h2><span>9 个资产</span></div>
      <div class="grid"><article class="card" data-cat="QMuse作品">
      <div class="card-top"><span class="cat">QMuse作品</span><span class="evidence l1">实证</span></div>
      <h3>毛孩子急救小助手</h3>
      <p class="intro">QMuse 已发布作品「毛孩子急救小助手」，生活好帮手/消费新体验赛道，实测可访问。</p>
      <div class="card-foot"><code>qmuse-pet-first-aid</code><a class="ep" href="https://te8qk692owty.app.qmuse.pub/" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="QMuse作品">
      <div class="card-top"><span class="cat">QMuse作品</span><span class="evidence l1">实证</span></div>
      <h3>养宠周期小管家</h3>
      <p class="intro">QMuse 已发布作品「养宠周期小管家」，生活好帮手/消费新体验赛道，实测可访问。</p>
      <div class="card-foot"><code>qmuse-pet-care-schedule</code><a class="ep" href="https://m61vp1jca9qo.app.qmuse.pub/" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="QMuse作品">
      <div class="card-top"><span class="cat">QMuse作品</span><span class="evidence l1">实证</span></div>
      <h3>到手工资算一算</h3>
      <p class="intro">QMuse 已发布作品「到手工资算一算」，生活好帮手/消费新体验赛道，实测可访问。</p>
      <div class="card-foot"><code>qmuse-salary-net</code><a class="ep" href="https://sqmk132faipu.app.qmuse.pub/" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="QMuse作品">
      <div class="card-top"><span class="cat">QMuse作品</span><span class="evidence l1">实证</span></div>
      <h3>还能缺几次课</h3>
      <p class="intro">QMuse 已发布作品「还能缺几次课」，生活好帮手/消费新体验赛道，实测可访问。</p>
      <div class="card-foot"><code>qmuse-attendance</code><a class="ep" href="https://kjit0sgf21fx.app.qmuse.pub/" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="QMuse作品">
      <div class="card-top"><span class="cat">QMuse作品</span><span class="evidence l1">实证</span></div>
      <h3>签合同前过一遍</h3>
      <p class="intro">QMuse 已发布作品「签合同前过一遍」，生活好帮手/消费新体验赛道，实测可访问。</p>
      <div class="card-foot"><code>qmuse-labor-contract</code><a class="ep" href="https://nbt22fr3s6az.app.qmuse.pub/" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="QMuse作品">
      <div class="card-top"><span class="cat">QMuse作品</span><span class="evidence l1">实证</span></div>
      <h3>装修合同避坑镜</h3>
      <p class="intro">QMuse 已发布作品「装修合同避坑镜」，生活好帮手/消费新体验赛道，实测可访问。</p>
      <div class="card-foot"><code>qmuse-decoration-contract</code><a class="ep" href="https://d1dxuiavi5pz.app.qmuse.pub/" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="QMuse作品">
      <div class="card-top"><span class="cat">QMuse作品</span><span class="evidence l1">实证</span></div>
      <h3>汉字镜</h3>
      <p class="intro">QMuse 已发布作品「汉字镜」，生活好帮手/消费新体验赛道，实测可访问。</p>
      <div class="card-foot"><code>qmuse-hanjing</code><a class="ep" href="https://render.qmuse.pub/p/muse/3497092646157835/" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="QMuse作品">
      <div class="card-top"><span class="cat">QMuse作品</span><span class="evidence l1">实证</span></div>
      <h3>文枢</h3>
      <p class="intro">QMuse 已发布作品「文枢」，生活好帮手/消费新体验赛道，实测可访问。</p>
      <div class="card-foot"><code>qmuse-wenshu</code><a class="ep" href="https://render.qmuse.pub/p/muse/3584333733503313/" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article>
<article class="card" data-cat="QMuse作品">
      <div class="card-top"><span class="cat">QMuse作品</span><span class="evidence l1">实证</span></div>
      <h3>通用402收款网关</h3>
      <p class="intro">QMuse 已发布作品「通用402收款网关」，生活好帮手/消费新体验赛道，实测可访问。</p>
      <div class="card-foot"><code>qmuse-gateway</code><a class="ep" href="https://render.qmuse.pub/p/muse/9370405554782659/" target="_blank" rel="noopener">在线端点 ↗</a></div>
    </article></div>
    </section>
<section id="cat-%E5%80%99%E9%80%89SKU">
      <div class="sec-head"><h2>候选SKU</h2><span>21 个资产</span></div>
      <div class="grid"><article class="card" data-cat="候选SKU">
      <div class="card-top"><span class="cat">候选SKU</span><span class="evidence l2">候选</span></div>
      <h3>人民币大写一键转</h3>
      <p class="intro">候选SKU「人民币大写一键转」，确定性计算类，来自选品A/B/C档（尚未发布）。</p>
      <div class="card-foot"><code>sku-rmb-uppercase</code><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="候选SKU">
      <div class="card-top"><span class="cat">候选SKU</span><span class="evidence l2">候选</span></div>
      <h3>身份证号校验解析</h3>
      <p class="intro">候选SKU「身份证号校验解析」，确定性计算类，来自选品A/B/C档（尚未发布）。</p>
      <div class="card-foot"><code>sku-cn-idcard</code><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="候选SKU">
      <div class="card-top"><span class="cat">候选SKU</span><span class="evidence l2">候选</span></div>
      <h3>银行卡号校验识别</h3>
      <p class="intro">候选SKU「银行卡号校验识别」，确定性计算类，来自选品A/B/C档（尚未发布）。</p>
      <div class="card-foot"><code>sku-luhn-bank</code><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="候选SKU">
      <div class="card-top"><span class="cat">候选SKU</span><span class="evidence l2">候选</span></div>
      <h3>时间戳时区换算</h3>
      <p class="intro">候选SKU「时间戳时区换算」，确定性计算类，来自选品A/B/C档（尚未发布）。</p>
      <div class="card-foot"><code>sku-time-tool</code><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="候选SKU">
      <div class="card-top"><span class="cat">候选SKU</span><span class="evidence l2">候选</span></div>
      <h3>快递体积重计算器</h3>
      <p class="intro">候选SKU「快递体积重计算器」，确定性计算类，来自选品A/B/C档（尚未发布）。</p>
      <div class="card-foot"><code>sku-volume-weight</code><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="候选SKU">
      <div class="card-top"><span class="cat">候选SKU</span><span class="evidence l2">候选</span></div>
      <h3>瓷砖用量计算器</h3>
      <p class="intro">候选SKU「瓷砖用量计算器」，确定性计算类，来自选品A/B/C档（尚未发布）。</p>
      <div class="card-foot"><code>sku-tile-quantity</code><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="候选SKU">
      <div class="card-top"><span class="cat">候选SKU</span><span class="evidence l2">候选</span></div>
      <h3>猫龄狗龄换算器</h3>
      <p class="intro">候选SKU「猫龄狗龄换算器」，确定性计算类，来自选品A/B/C档（尚未发布）。</p>
      <div class="card-foot"><code>sku-pet-age</code><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="候选SKU">
      <div class="card-top"><span class="cat">候选SKU</span><span class="evidence l2">候选</span></div>
      <h3>GPA 绩点换算器</h3>
      <p class="intro">候选SKU「GPA 绩点换算器」，确定性计算类，来自选品A/B/C档（尚未发布）。</p>
      <div class="card-foot"><code>sku-gpa-convert</code><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="候选SKU">
      <div class="card-top"><span class="cat">候选SKU</span><span class="evidence l2">候选</span></div>
      <h3>折扣降价幅度算</h3>
      <p class="intro">候选SKU「折扣降价幅度算」，确定性计算类，来自选品A/B/C档（尚未发布）。</p>
      <div class="card-foot"><code>sku-discount-price</code><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="候选SKU">
      <div class="card-top"><span class="cat">候选SKU</span><span class="evidence l2">候选</span></div>
      <h3>文字敏感信息脱敏</h3>
      <p class="intro">候选SKU「文字敏感信息脱敏」，确定性计算类，来自选品A/B/C档（尚未发布）。</p>
      <div class="card-foot"><code>sku-pii-mask</code><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="候选SKU">
      <div class="card-top"><span class="cat">候选SKU</span><span class="evidence l2">候选</span></div>
      <h3>房贷月供计算器</h3>
      <p class="intro">候选SKU「房贷月供计算器」，确定性计算类，来自选品A/B/C档（尚未发布）。</p>
      <div class="card-foot"><code>sku-mortgage-monthly</code><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="候选SKU">
      <div class="card-top"><span class="cat">候选SKU</span><span class="evidence l2">候选</span></div>
      <h3>加班费计算器</h3>
      <p class="intro">候选SKU「加班费计算器」，确定性计算类，来自选品A/B/C档（尚未发布）。</p>
      <div class="card-foot"><code>sku-overtime-pay</code><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="候选SKU">
      <div class="card-top"><span class="cat">候选SKU</span><span class="evidence l2">候选</span></div>
      <h3>经济补偿金计算</h3>
      <p class="intro">候选SKU「经济补偿金计算」，确定性计算类，来自选品A/B/C档（尚未发布）。</p>
      <div class="card-foot"><code>sku-severance-pay</code><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="候选SKU">
      <div class="card-top"><span class="cat">候选SKU</span><span class="evidence l2">候选</span></div>
      <h3>装修预算核价器</h3>
      <p class="intro">候选SKU「装修预算核价器」，确定性计算类，来自选品A/B/C档（尚未发布）。</p>
      <div class="card-foot"><code>sku-zhuangxiu-budget</code><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="候选SKU">
      <div class="card-top"><span class="cat">候选SKU</span><span class="evidence l2">候选</span></div>
      <h3>多标准绩点对照</h3>
      <p class="intro">候选SKU「多标准绩点对照」，确定性计算类，来自选品A/B/C档（尚未发布）。</p>
      <div class="card-foot"><code>sku-gpa-multi</code><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="候选SKU">
      <div class="card-top"><span class="cat">候选SKU</span><span class="evidence l2">候选</span></div>
      <h3>加权综合分计算</h3>
      <p class="intro">候选SKU「加权综合分计算」，确定性计算类，来自选品A/B/C档（尚未发布）。</p>
      <div class="card-foot"><code>sku-weighted-score</code><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="候选SKU">
      <div class="card-top"><span class="cat">候选SKU</span><span class="evidence l2">候选</span></div>
      <h3>盈亏平衡点计算</h3>
      <p class="intro">候选SKU「盈亏平衡点计算」，确定性计算类，来自选品A/B/C档（尚未发布）。</p>
      <div class="card-foot"><code>sku-breakeven-point</code><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="候选SKU">
      <div class="card-top"><span class="cat">候选SKU</span><span class="evidence l2">候选</span></div>
      <h3>毛利率加价率计算</h3>
      <p class="intro">候选SKU「毛利率加价率计算」，确定性计算类，来自选品A/B/C档（尚未发布）。</p>
      <div class="card-foot"><code>sku-gross-margin</code><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="候选SKU">
      <div class="card-top"><span class="cat">候选SKU</span><span class="evidence l2">候选</span></div>
      <h3>餐饮翻台率测算</h3>
      <p class="intro">候选SKU「餐饮翻台率测算」，确定性计算类，来自选品A/B/C档（尚未发布）。</p>
      <div class="card-foot"><code>sku-table-turnover</code><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="候选SKU">
      <div class="card-top"><span class="cat">候选SKU</span><span class="evidence l2">候选</span></div>
      <h3>菜单定价保本算</h3>
      <p class="intro">候选SKU「菜单定价保本算」，确定性计算类，来自选品A/B/C档（尚未发布）。</p>
      <div class="card-foot"><code>sku-menu-pricing</code><span class="ep dim">待发布</span></div>
    </article>
<article class="card" data-cat="候选SKU">
      <div class="card-top"><span class="cat">候选SKU</span><span class="evidence l2">候选</span></div>
      <h3>统一社会信用代码校验</h3>
      <p class="intro">候选SKU「统一社会信用代码校验」，确定性计算类，来自选品A/B/C档（尚未发布）。</p>
      <div class="card-foot"><code>sku-cn-uscc</code><span class="ep dim">待发布</span></div>
    </article></div>
    </section>
<footer>
  <p><strong>Agent 发现入口</strong>： <a href="https://api.liuwangcun.com/llms.txt">llms.txt</a> · <a href="https://api.liuwangcun.com/llms-full.txt">llms-full.txt</a> · <a href="https://api.liuwangcun.com/agent-card.json">agent-card.json</a> · <a href="https://api.liuwangcun.com/mcp">MCP endpoint</a></p>
  <p>机器可读完整清单： ItemList JSON-LD 已内嵌本页 · 结构化 FAQ 3 条 · canonical 已声明 · 证据等级 L1/L2 逐条标注。</p>
  <p>合规边界： 法律/医疗裁量类仅做确定性辅助与条款清单，内嵌边界声明；不碰政策话题；候选 SKU 明确标注待发布，不冒充已上线。</p>
  <p>瞰势 KANSHI · 数字资产矩阵 · 生成于 2026-11-23 · 单一事实源 assets-registry.json</p>
</footer>
</div></body></html>