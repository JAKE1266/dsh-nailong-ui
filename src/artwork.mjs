/**
 * 原创图形资产 —— 纯内联 SVG，**不含任何奶龙形象素材**。
 *
 * 合规说明（重要）：奶龙是有版权的卡通形象。本插件**不复制**它的角色立绘、
 * 表情、配色方案文件或任何官方素材。这里画的是一个**极度抽象的「圆润小恐龙
 * 轮廓」**：一个圆形头、两个小三角背刺、两点眼睛。它是通用的恐龙剪影语法，
 * 不是任何具体角色的临摹 —— 换掉颜色你看不出它像谁。
 *
 * 视觉语言：明黄渐变圆角方底 + 奶白圆头 + 暖橙背刺。只用色彩与几何，
 * 不承载角色识别度。
 */

/** 侧栏 / hero 共用的方形标记（viewBox 0 0 48 48）。 */
export const MARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-label="">
  <defs>
    <linearGradient id="nl-g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FFE07A"/>
      <stop offset="0.5" stop-color="#FFC629"/>
      <stop offset="1" stop-color="#FF9F1C"/>
    </linearGradient>
    <linearGradient id="nl-shine" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.45"/>
      <stop offset="0.6" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect x="2" y="2" width="44" height="44" rx="16" fill="url(#nl-g)"/>
  <rect x="2" y="2" width="44" height="44" rx="16" fill="url(#nl-shine)"/>
  <!-- 抽象小恐龙：圆头 + 两枚背刺 + 两点眼 -->
  <circle cx="24" cy="27" r="11" fill="#FFF8E7"/>
  <path d="M14 18 L18.5 11 L21 19 Z" fill="#F08000"/>
  <path d="M25 17 L29.5 10.5 L31.5 18.5 Z" fill="#F08000"/>
  <circle cx="20.5" cy="25.5" r="1.7" fill="#4A3510"/>
  <circle cx="27.5" cy="25.5" r="1.7" fill="#4A3510"/>
  <path d="M21 31 Q24 33.5 27 31" stroke="#4A3510" stroke-width="1.6" stroke-linecap="round" fill="none"/>
</svg>`

/** 作为 `<img src>` 使用的 data URL。 */
export function markDataUrl() {
  try {
    return 'data:image/svg+xml;base64,' + btoa(MARK_SVG)
  } catch {
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(MARK_SVG)
  }
}
