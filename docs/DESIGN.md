# 设计规格与来源

> 本文件是 `src/tokens.mjs` 的「为什么」。

## 0. 最重要的一条：全部色值是推导，不是实测

| 项 | 状态 |
| --- | --- |
| 奶龙官方 CSS 设计令牌 | ❌ **不存在**（它是影视/短视频 IP，不是软件产品） |
| 本插件色值 | ⚠️ **视觉归纳（推导）** |
| DSH 侧 `--dsw-*` 令牌名 | ✅ 实测（本机 `app.asar` 扫描 + 官方包源码） |
| DSH 侧 `data-*` 锚点 | ✅ 实测（同上） |

**为什么**：奶龙没有软件界面，自然没有设计令牌。网络检索（百度百科 403、
维基超时、Bing 搜索无有效结果）也未找到权威色值规范。

**这意味着什么**：本皮肤可以作为「明黄卡通主题」使用，但**不应被当作奶龙
官方色值引用**。同系列的 `dsh-doubao-ui` 用的是从豆包官方 CSS bundle 读到的
实测令牌，两者在可信度上不同 —— 这一点在 README、CHANGELOG、令牌文件头注释
与插件内「关于」页四处都如实标注了。

## 1. 视觉语言（推导）

| 维度 | 取值 | 理由 |
| --- | --- | --- |
| 明黄身体 | `#FFC629` / `#FFB300` | 蛋黄黄的观感归纳 |
| 暖橙细节 | `#FF9F1C` / `#F08000` | 渐变终点与强调 |
| 奶白肚皮 | `#FFF8E7` | 奶白基调，不是纯白 |
| 深棕文字 | `#4A3510` | **关键决策**：纯黑在暖黄底上对比过硬、显脏；深棕同属暖色系，读起来舒服 |
| 暗色底 | `#1A1610` | **关键决策**：明黄在纯黑上刺眼，在深暖棕上像小夜灯 |
| 圆角 | 8/12/16/20/24/26/28px | **无 4px 锐角** —— 卡通感来自「没有尖角」 |
| 回弹缓动 | `cubic-bezier(.34, 1.4, .64, 1)` | 第二参数 >1 产生过冲，hover 会「弹一下」 |
| 阴影 | `rgba(120, 82, 10, …)` | 暖棕阴影，与黄色调统一；中性黑会显脏 |

## 2. DSH 令牌映射（实测键名 + 推导值）

| DSH alias | 本插件值（light） | 说明 |
| --- | --- | --- |
| `--dsw-alias-brand-primary` | `#FFB300` | 明黄主色 |
| `--dsw-alias-button-primary-fill` / `-hover` | `#FFB300` / `#FF9F1C` | 主按钮 |
| `--dsw-alias-bg-base` | `#FFFDF7` | 主区奶白 |
| `--dsw-alias-bg-layer-2` / `-3` / `-4` | `#FFF8E7` / `#FBF1DA` / `#F3E6C9` | 层级递进 |
| `--dsw-alias-border-l1..l4` | `rgba(120,82,10, .08/.14/.20/.28)` | 暖棕边框 |
| `--dsw-alias-label-primary` | `#4A3510` | 深棕主文字 |
| `--dsw-alias-label-secondary` / `-tertiary` | `.70` / `.54` | 文字层级 |
| `--dsw-specific-sidebar-fill` | `#FBF1DA` / 暗 `#15110C` | 侧栏奶黄 |
| `--dsw-specific-bubble` | `rgba(255,179,0,.18)` | 用户气泡明黄 |
| `--dsw-alias-link` | `#C4730A` | 暖橙链接（奶龙没有蓝） |
| `--dsw-focus-ring-color` | `#F5A200` / 暗 `#FFCB3D` | 焦点环 |
| `--dsw-radius-full` | `9999px` | 胶囊 |

**特别说明**：`--dsw-static-deepseek-*` / `--dsw-static-blue-*` 这些「蓝」色
令牌全部被改成暖橙 —— 奶龙的色彩世界里没有蓝色，留着会在链接、图标、
「深度思考」等位置露出蓝色，破坏整体色调。

## 3. 组件层插槽依据（实测）

| 插槽 | 证据 |
| --- | --- |
| `sidebar.brand.mark` / `sidebar.brand.name` | `@deepseek-ai/dsh-client-ui-sidebar/lib/client.js:737-744` 的 `children` 声明；渲染处 `:394/:438/:446` 调 `renderSlot("sidebar.brand.mark", {size:24}, {fallback: FishLogo})` |
| 覆盖方式 | `@deepseek-ai/dsh-client-ui-brand-official/lib/client.js:35-40`：`slots.inject(...)` + generator + `priority:-1` |
| `conversation.hero.brand.mark` | `@deepseek-ai/dsh-client-ui-conversation/lib/client.js:20450` |
| `conversation.hero.options` | 同上 `:20552` / `:22820-22832` |
| `settings.section` | `@deepseek-ai/dsh-client-ui-theme/lib/client.js:2336` 同族 |

## 4. 图标合规（重点）

`src/artwork.mjs` 的 `MARK_SVG` 是一个**极度抽象的「圆润小恐龙轮廓」**：
- 一个圆形头（`<circle>`）
- 两枚三角背刺（`<path>`）
- 两点眼睛 + 一条弧线嘴

这是**通用的恐龙剪影语法**，不含任何具体角色的识别特征（没有特定配色方案、
没有角色比例、没有表情特征）。**换掉颜色你无法判断它像谁。**

本插件**不包含**：角色立绘、表情包、官方 logo、官方配色文件、任何从奶龙
相关作品截取的图片或素材。

## 5. React 惰性绑定与导出契约（防止白屏）

- 组件模块顶层**不**调用 `require('react')`：工厂一进入就求值所有内联模块体，
  此时 React 缺失会抛在调用方 try 之外，直接带崩 Web 壳。改用
  `bindReact(requireFn)` 在激活时绑定，失败则组件层整体降级为空操作。
- `client.mjs` **不使用** `module.exports = {...}`：它会让工厂开头的
  `var exports = module.exports` 别名失效，后续 `exports.*` 赋值静默丢失。
  构建器对这两条都有硬性检查。

## 6. 合规与声明

- 本插件是 **inspired-by 配色风格**，不是奶龙形象的复刻，也不含其素材。
- 本仓库**不含**任何来自奶龙相关作品的图片、图标、字体或受版权保护的素材。
- 「奶龙」名称归其权利人所有，此处仅用于说明配色灵感来源。
- 本插件与奶龙形象的权利人、深度求索 / DeepSeek 无任何隶属、授权或背书关系。
