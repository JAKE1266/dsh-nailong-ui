# Assets

本目录存放**可选的预览图**。插件本身**不含任何图片素材** —— 所有视觉都由
[`src/tokens.mjs`](../src/tokens.mjs) 的 CSS 自定义属性表达，品牌标记是
[`src/artwork.mjs`](../src/artwork.mjs) 里的**自创抽象 SVG**。

## ⚠️ 不要往这里放奶龙素材

**严禁**放入：
- 奶龙角色立绘、表情包、截图
- 官方 logo 或配色文件
- 任何从奶龙相关作品截取的图片

本插件只使用「明黄色系 + 圆润几何」这层抽象视觉语言。一旦加入形象素材，
就构成侵权。详见 [`docs/DESIGN.md`](../docs/DESIGN.md) §4。

## 生成预览图

```bash
node scripts/preview.mjs          # -> assets/preview-light.png
node scripts/preview.mjs --dark   # -> assets/preview-dark.png
```

用本机 Edge headless 把真实皮肤 CSS 渲染到模拟布局上。**是示意图，不是 DSH
真实截图** —— 布局是手写的近似，反映不了宿主的真实 DOM 密度。

## 真实截图（可选）

若想补真实截图：

1. 启用皮肤并重启 DSH Web，硬刷新。
2. 新建**空白工作区**（避免截图里出现真实项目名 / 会话标题 / 余额）。
3. 截亮色与暗色各一张，存为 `screenshot-light.png` / `screenshot-dark.png`。
4. 在 README 顶部引用。

DSH Web 根路径返回 401（需要登录会话），headless 浏览器拿不到，所以真实截图
只能手动完成。
