/**
 * dsh-nailong-ui — 奶龙主题令牌
 *
 * ── 设计取向 ──────────────────────────────────────────────────────────
 * 奶龙是**黄色卡通形象**：明黄身体、奶白肚皮、圆润无棱角、暖橙小细节。
 * 本皮肤把这套语言翻译成界面配色：
 *   - 主色：明黄 #FFC629（蛋黄黄）→ 暖橙 #FF9F1C（渐变）
 *   - 中性：奶白 / 米白，不是纯白也不是冷灰
 *   - 圆角：偏大且圆润（卡通感来自「没有尖角」）
 *   - 对比：黄底配深棕文字（不是纯黑，纯黑在黄底上显得脏）
 *
 * ── 色值来源（诚实说明）──────────────────────────────────────────────
 * 【推导】**全部色值均为推导，不是官方实测。** 奶龙没有公开的 CSS 设计
 *   令牌表（它是影视/短视频 IP，不是软件产品），网络检索也未找到可靠的
 *   官方色值规范。本皮肤基于对该形象的公开观感归纳出「明黄 + 奶白 + 暖橙」
 *   的配色语言，并针对 DSH 的可读性做了适配。
 *   请**不要**把本文件当作奶龙官方色值引用。
 * 【实测】DSH 侧的 `--dsw-*` 令牌名与 `data-*` 锚点来自本机 app.asar 扫描
 *   与官方包源码（与 dsh-doubao-ui / dsh-kimi-ui 同一份调研）。
 *
 * ── 合规声明 ────────────────────────────────────────────────────────
 * **本插件不包含任何奶龙的形象素材。** 没有图片、没有角色立绘、没有 logo。
 * 只使用「明黄色系 + 圆润几何」这一层抽象的视觉语言（色彩与圆角本身不受
 * 版权保护）。品牌标记是自创的「圆润小恐龙轮廓」抽象图形，不是角色临摹。
 * 「奶龙」名称归其权利人所有，此处仅说明配色灵感来源，无任何隶属或背书关系。
 */

/** 皮肤版本。 */
export const SKIN_VERSION = '1.0.0'

/** 标记属性。 */
export const SKIN_ATTRIBUTE = 'data-dsh-nailong-skin'

/** 样式标签标识。 */
export const STYLE_TAG_ID = 'dsh-nailong-ui/skin.css'

/** 亮色选择器。 */
export const LIGHT_SELECTOR = ':root:root body'

/** 暗色选择器。 */
export const DARK_SELECTOR = ':root:root body[data-ds-dark-theme]'

/**
 * 几何 / 排版令牌。
 *
 * 卡通感的几何来源：**所有圆角都偏大且彼此接近**（没有 4px 这种小锐角），
 * 阴影柔和（不要硬边），字号略大。
 */
export const STRUCTURAL = Object.freeze({
  '--dsw-radius-xs': '8px',
  '--dsw-radius-sm': '12px',
  '--dsw-radius-md': '16px',
  '--dsw-radius-lg': '20px',
  '--dsw-radius-xl': '24px',
  '--dsw-radius-panel': '26px',
  '--dsw-radius-2xl': '28px',
  '--dsw-radius-full': '9999px',
  '--dsw-shadow-lv1': '0 2px 6px rgba(120, 82, 10, 0.08)',
  '--dsw-shadow-lv1-blur': '0 4px 14px rgba(120, 82, 10, 0.10)',
  '--dsw-shadow-lv2': '0 8px 24px rgba(120, 82, 10, 0.12), 0 2px 6px rgba(120, 82, 10, 0.06)',
  '--dsw-shadow-lv3': '0 18px 48px rgba(120, 82, 10, 0.18), 0 4px 12px rgba(120, 82, 10, 0.08)',
  '--dsw-elevation-soft': '0 2px 6px rgba(120, 82, 10, 0.08)',
  '--dsw-elevation-panel': '0 8px 24px rgba(120, 82, 10, 0.12)',
  '--dsw-elevation-prominent': '0 18px 48px rgba(120, 82, 10, 0.18)',
  '--dsw-elevation-stroke-color': 'rgba(120, 82, 10, 0.12)',
  '--dsw-corner-shape': '18px',
  '--dsw-font-family':
    '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, Roboto, "Noto Sans", "PingFang SC", "Microsoft YaHei UI", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif',
  '--dsh-font-family-code-default':
    '"Geist Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
  // 15px：卡通主题字号略大更显亲和（推导）
  '--dsw-font-size-base': '15px',
  '--dsw-font-size-display': 'calc(var(--dsw-font-size-base) + 20px)',
  '--dsw-font-size-headline': 'calc(var(--dsw-font-size-base) + 8px)',
  '--dsw-font-size-title': 'calc(var(--dsw-font-size-base) + 6px)',
  '--dsw-font-size-xl': 'calc(var(--dsw-font-size-base) + 4px)',
  '--dsw-font-size-lg': 'calc(var(--dsw-font-size-base) + 2px)',
  '--dsw-font-size-caption': 'calc(var(--dsw-font-size-base) - 1px)',
  '--dsw-font-size-sm': 'calc(var(--dsw-font-size-base) - 2px)',
  '--dsw-font-size-xs': 'calc(var(--dsw-font-size-base) - 4px)',
  '--dsw-font-size-2xs': 'calc(var(--dsw-font-size-base) - 5px)',
  '--dsh-scrollbar-width': '9px',
  '--dsh-scrollbar-thumb-border': '2px',
  '--dsw-focus-ring-width': '2px',
  // ── 奶龙私有语义变量 ──
  '--nl-yellow': '#FFC629',
  '--nl-yellow-deep': '#FFB300',
  '--nl-orange': '#FF9F1C',
  '--nl-orange-deep': '#F08000',
  '--nl-cream': '#FFF8E7',
  '--nl-brown': '#5C4314',
  '--nl-primary': '#FFB300',
  '--nl-primary-hover': '#FF9F1C',
  '--nl-primary-active': '#F08000',
  '--nl-primary-soft': 'rgba(255, 179, 0, 0.14)',
  '--nl-primary-softer': 'rgba(255, 179, 0, 0.08)',
  '--nl-primary-border': 'rgba(255, 159, 28, 0.45)',
  '--nl-gradient': 'linear-gradient(135deg, #FFD84D 0%, #FFB300 55%, #FF9F1C 100%)',
  '--nl-gradient-soft': 'linear-gradient(135deg, rgba(255,216,77,.20) 0%, rgba(255,159,28,.14) 100%)',
  '--nl-gradient-button': 'linear-gradient(135deg, #FFCB3D 0%, #FFB300 50%, #FF9F1C 100%)',
  '--nl-gradient-text': 'linear-gradient(135deg, #F5A200 0%, #E8760A 100%)',
  '--nl-user-bubble': 'rgba(255, 179, 0, 0.16)',
  '--nl-glass-blur': 'blur(16px) saturate(150%)',
  '--nl-glass-fill': 'rgba(255, 252, 242, 0.82)',
  '--nl-composer-radius': '24px',
  '--nl-composer-shadow': '0 8px 28px rgba(255, 159, 28, 0.16), 0 2px 8px rgba(120, 82, 10, 0.05)',
  '--nl-content-max-width': '768px',
  '--nl-ease': 'cubic-bezier(.34, 1.4, .64, 1)',
  '--nl-ease-out': 'cubic-bezier(.23, 1, .32, 1)',
  '--nl-dur': '.16s',
  '--nl-dur-mid': '.24s',
})

/**
 * 亮色色板 —— 奶白底 + 明黄主色 + 深棕文字。
 *
 * 关键决策：**文字用深棕 #5C4314 而不是纯黑**。纯黑在暖黄底上对比过硬，
 * 显得脏且不亲和；深棕与黄色同属暖色系，读起来舒服。
 */
export const LIGHT = Object.freeze({
  // ── 静态中性阶梯（奶白系，带极淡暖调） ──
  '--dsw-static-neutral-bluish-950': '#FFFFFF',
  '--dsw-static-neutral-bluish-875': '#FFFDF7',
  '--dsw-static-neutral-bluish-850': '#FFF8E7',
  '--dsw-static-neutral-bluish-800': '#FBF1DA',
  '--dsw-static-neutral-bluish-750': '#F3E6C9',
  '--dsw-static-neutral-bluish-700': '#E6D5B0',
  '--dsw-static-neutral-bluish-600': '#C9B489',
  '--dsw-static-neutral-bluish-500': '#A08B62',
  '--dsw-static-neutral-bluish-400': '#7A6743',
  '--dsw-static-neutral-bluish-300': '#5C4314',
  '--dsw-static-neutral-bluish-200': '#3E2D0E',
  '--dsw-static-neutral-bluish-150': '#F3E6C9',
  '--dsw-static-neutral-bluish-100': '#E6D5B0',
  '--dsw-static-neutral-bluish-75': '#FBF1DA',
  '--dsw-static-neutral-bluish-60': '#FBF1DA',
  '--dsw-static-neutral-bluish-50': '#FFF8E7',
  '--dsw-static-neutral-bluish-00': '#3E2D0E',
  '--dsw-static-neutral-bluish-1000': '#3E2D0E',

  // ── 背景：主区奶白，侧栏稍暖稍深，明确分色 ──
  '--dsw-alias-bg-base': '#FFFDF7',
  '--dsw-alias-bg-layer-1': '#FFFFFF',
  '--dsw-alias-bg-layer-2': '#FFF8E7',
  '--dsw-alias-bg-layer-3': '#FBF1DA',
  '--dsw-alias-bg-layer-4': '#F3E6C9',
  '--dsw-alias-bg-overlay': '#FFFFFF',
  '--dsw-alias-bg-module-platform': '#FBF1DA',
  '--dsw-alias-bg-multi-select': 'rgba(255, 179, 0, 0.18)',
  '--dsw-alias-bg-l1': '#FFFFFF',
  '--dsw-alias-bg-l2': '#FFF8E7',
  '--dsw-alias-background-secondary': '#FFF8E7',
  '--dsw-alias-bg-document-preview': '#FFFDF7',
  '--dsw-alias-bg-document-selection': 'rgba(255, 179, 0, 0.32)',
  '--dsw-alias-bg-skeleton': 'rgba(120, 82, 10, 0.06)',
  '--dsw-alias-bg-mask-1': 'rgba(92, 67, 20, 0.28)',
  '--dsw-alias-bg-mask-2': 'rgba(92, 67, 20, 0.14)',
  '--dsw-alias-bg-mask-3': 'rgba(92, 67, 20, 0.48)',
  '--dsw-alias-bg-mask-photo': 'rgba(0, 0, 0, 0.88)',
  '--dsw-alias-bg-mask-drop': 'rgba(255, 253, 247, 0.75)',

  // ── 边框：暖棕系，比纯灰柔和 ──
  '--dsw-alias-border-l1': 'rgba(120, 82, 10, 0.08)',
  '--dsw-alias-border-l2': 'rgba(120, 82, 10, 0.14)',
  '--dsw-alias-border-subtle': 'rgba(120, 82, 10, 0.12)',
  '--dsw-alias-border-l2-darkmode-thin': 'rgba(120, 82, 10, 0.10)',
  '--dsw-alias-border-l3': 'rgba(120, 82, 10, 0.20)',
  '--dsw-alias-border-l4': 'rgba(120, 82, 10, 0.28)',
  '--dsw-alias-border-inverted': 'rgba(120, 82, 10, 0.07)',
  '--dsw-alias-border-inverted2': 'rgba(120, 82, 10, 0.14)',
  '--dsw-alias-separator-primary': 'rgba(120, 82, 10, 0.12)',

  // ── 文字：深棕系（不是纯黑） ──
  '--dsw-alias-label-primary': '#4A3510',
  '--dsw-alias-label-primary-foreground': '#FFFFFF',
  '--dsw-alias-label-primary-inverted': '#FFF8E7',
  '--dsw-alias-label-primary-dimmed': 'rgba(74, 53, 16, 0.66)',
  '--dsw-alias-label-primary-bluish': '#D98A00',
  '--dsw-alias-label-secondary': 'rgba(74, 53, 16, 0.70)',
  '--dsw-alias-label-tertiary': 'rgba(74, 53, 16, 0.54)',
  '--dsw-alias-label-caption': 'rgba(74, 53, 16, 0.44)',
  '--dsw-alias-label-dimmed': 'rgba(74, 53, 16, 0.34)',
  '--dsw-alias-label-quaternary': 'rgba(74, 53, 16, 0.36)',
  '--dsw-alias-label-error': '#D93A3A',
  '--dsw-alias-label-shimmer': 'rgba(74, 53, 16, 0.30)',
  '--dsw-alias-label-document-preview': '#5C4314',
  '--dsw-alias-menu-icon': 'rgba(74, 53, 16, 0.70)',

  // ── 品牌 / 主色：明黄 ──
  '--dsw-alias-brand-primary': '#FFB300',
  '--dsw-alias-brand-primary-invert': '#4A3510',
  '--dsw-alias-brand-text': '#D98A00',
  '--dsw-alias-brand-primary-new-colorprimary-new-color': '#FFB300',
  '--dsw-alias-state-business-primary': '#FFB300',
  '--dsw-alias-state-business-tertiary': 'rgba(255, 179, 0, 0.16)',
  '--dsw-alias-button-primary-fill': '#FFB300',
  '--dsw-alias-button-primary-hover': '#FF9F1C',
  '--dsw-alias-button-primary-dimmed': 'rgba(255, 179, 0, 0.34)',
  '--dsw-alias-button-contrast-fill': '#4A3510',
  '--dsw-alias-button-elevated-fill': '#FFFFFF',
  '--dsw-alias-button-floating-fill': '#FFFFFF',
  '--dsw-alias-button-floating-hover': '#FFF8E7',
  '--dsw-alias-button-ghost-active-fill': 'rgba(255, 179, 0, 0.14)',
  '--dsw-alias-button-ghost-active-hover': 'rgba(255, 179, 0, 0.20)',
  '--dsw-alias-button-ghost-active-border': 'rgba(255, 159, 28, 0.45)',
  '--dsw-alias-button-info-fill': '#FFB300',
  '--dsw-alias-button-info-hover': '#FF9F1C',
  '--dsw-alias-button-tool-bar-fill': 'rgba(122, 103, 67, 0.50)',
  '--dsw-alias-button-tool-bar-fill-invisible': 'rgba(92, 67, 20, 0.36)',
  '--dsw-alias-button-tool-bar-hover': 'rgba(122, 103, 67, 0.64)',

  // ── 交互态 ──
  '--dsw-alias-interactive-bg-hover': 'rgba(120, 82, 10, 0.055)',
  '--dsw-alias-interactive-bg-hover-solid': '#FFF8E7',
  '--dsw-alias-interactive-bg-active': 'rgba(255, 179, 0, 0.16)',
  '--dsw-alias-interactive-bg-hover-accent': 'rgba(255, 179, 0, 0.12)',
  '--dsw-alias-interactive-bg-hover-danger': 'rgba(217, 58, 58, 0.07)',
  '--dsw-alias-fill-l1': 'rgba(120, 82, 10, 0.045)',
  '--dsw-alias-fill-l2': 'rgba(120, 82, 10, 0.075)',
  '--dsw-alias-fill-tertiary': 'rgba(120, 82, 10, 0.075)',
  '--dsw-alias-fill-tsp-secondary': 'rgba(120, 82, 10, 0.045)',

  // ── 状态色（暖调适配） ──
  '--dsw-static-green-500': '#2E9E5B',
  '--dsw-static-green-400': '#2E9E5B',
  '--dsw-static-green-100': 'rgba(46, 158, 91, 0.14)',
  '--dsw-static-green-900': 'rgba(46, 158, 91, 0.14)',
  '--dsw-static-green-500-a08': 'rgba(46, 158, 91, 0.09)',
  '--dsw-static-green-500-a12': 'rgba(46, 158, 91, 0.14)',
  '--dsw-static-red-600': '#D93A3A',
  '--dsw-static-red-500': '#D93A3A',
  '--dsw-static-red-400': '#D93A3A',
  '--dsw-static-red-100': 'rgba(217, 58, 58, 0.14)',
  '--dsw-static-red-900': 'rgba(217, 58, 58, 0.14)',
  '--dsw-static-red-400-a12': 'rgba(217, 58, 58, 0.14)',
  '--dsw-static-red-600-a08': 'rgba(217, 58, 58, 0.09)',
  '--dsw-static-amber-500': '#D9820B',
  '--dsw-static-amber-400': '#D9820B',
  '--dsw-static-amber-600': '#D9820B',
  '--dsw-static-amber-100': 'rgba(217, 130, 11, 0.14)',
  '--dsw-static-amber-900': 'rgba(217, 130, 11, 0.14)',
  '--dsw-alias-state-success-primary': '#2E9E5B',
  '--dsw-alias-state-success-secondary': '#2E9E5B',
  '--dsw-alias-state-success-tertiary': 'rgba(46, 158, 91, 0.14)',
  '--dsw-alias-state-error-primary': '#D93A3A',
  '--dsw-alias-state-error-secondary': '#D93A3A',
  '--dsw-alias-state-warn-primary': '#D9820B',
  '--dsw-alias-state-warning-primary': '#D9820B',
  '--dsw-alias-state-warn-secondary': '#D9820B',
  '--dsw-alias-state-warn-label': '#D9820B',
  '--dsw-alias-state-warn-tertiary': 'rgba(217, 130, 11, 0.14)',
  '--dsw-alias-state-idle-primary': '#A08B62',

  // ── 蓝 / 链接（奶龙没有蓝，统一改为暖橙） ──
  '--dsw-static-deepseek-500': '#E8890B',
  '--dsw-static-deepseek-450': '#E8890B',
  '--dsw-static-deepseek-400': '#E8890B',
  '--dsw-static-deepseek-600': '#D97A00',
  '--dsw-static-deepseek-800': 'rgba(232, 137, 11, 0.18)',
  '--dsw-static-deepseek-100': 'rgba(232, 137, 11, 0.12)',
  '--dsw-static-deepseek-50': 'rgba(232, 137, 11, 0.07)',
  '--dsw-static-deepseek-200': 'rgba(232, 137, 11, 0.18)',
  '--dsw-static-deepseek-300': 'rgba(232, 137, 11, 0.28)',
  '--dsw-alias-link': '#C4730A',
  '--dsw-alias-label-deep-diving': '#D98A00',
  '--dsw-alias-label-deep-diving-shimmer': 'rgba(217, 138, 0, 0.32)',
  '--dsw-static-blue-500': '#FFB300',
  '--dsw-static-blue-450': '#FFB300',
  '--dsw-static-blue-400': '#FFCB3D',
  '--dsw-static-blue-300': '#FFD84D',
  '--dsw-static-blue-100': 'rgba(255, 179, 0, 0.14)',

  // ── Markdown / 代码 ──
  '--dsw-alias-markdown-code-block': '#FFF8E7',
  '--dsw-alias-markdown-code-block-banner': '#FBF1DA',
  '--dsw-alias-markdown-inline-code': 'rgba(255, 179, 0, 0.16)',
  '--dsw-alias-markdown-code-editor-bg': '#3E2D0E',
  '--dsw-alias-markdown-code-editor-fg': '#FFF8E7',
  '--dsw-alias-markdown-tag': '#F3E6C9',
  '--dsw-alias-markdown-citation': '#FFF8E7',
  '--dsw-alias-markdown-placeholder': '#FFFDF7',
  '--dsw-alias-markdown-code-segment-selected': '#FFFFFF',
  '--dsw-alias-markdown-code-segment-unselected': '#FFF8E7',
  '--dsw-alias-turn-trigger-bg': '#FBF1DA',
  '--dsw-alias-turn-trigger-bg-hover': 'rgba(120, 82, 10, 0.055)',
  '--dsw-alias-code-diff-added': 'rgba(46, 158, 91, 0.10)',
  '--dsw-alias-code-diff-deleted': 'rgba(217, 58, 58, 0.10)',
  '--dsw-alias-file-diff-added-bg': '#EAF7EF',
  '--dsw-alias-file-diff-added-gutter': '#F3FAF6',
  '--dsw-alias-file-diff-added-marker': '#2E9E5B',
  '--dsw-alias-file-diff-deleted-bg': '#FBEEEE',
  '--dsw-alias-file-diff-deleted-gutter': '#FDF5F5',
  '--dsw-alias-file-diff-deleted-marker': '#D93A3A',

  // ── 滚动条 / 浮层 / 表单 ──
  '--dsw-alias-scrollbar-bg-l1': 'rgba(120, 82, 10, 0.16)',
  '--dsw-alias-scrollbar-bg-l2': 'rgba(120, 82, 10, 0.16)',
  '--dsw-alias-scrollbar-hover-l1': 'rgba(120, 82, 10, 0.34)',
  '--dsw-alias-scrollbar-hover-l2': 'rgba(120, 82, 10, 0.34)',
  '--dsw-alias-toast-bg': '#4A3510',
  '--dsw-alias-toast-label': '#FFF8E7',
  '--dsw-alias-tooltip-bg': '#4A3510',
  '--dsw-alias-tooltip-label': '#FFF8E7',
  '--dsw-alias-tooltip-key-bg': '#6B5220',
  '--dsw-alias-menu-group-header-fill': 'rgba(255, 248, 231, 0.95)',
  '--dsw-alias-switch-thumb': '#FFFFFF',
  '--dsw-alias-settings-card-fill': '#FFFFFF',
  '--dsw-alias-settings-card-stroke': 'rgba(120, 82, 10, 0.14)',
  '--dsw-alias-onboarding-accent': '#FFB300',
  '--dsw-alias-onboarding-card-fill': '#FFFFFF',
  '--dsw-alias-onboarding-secondary-fill': '#FFF8E7',
  '--dsw-alias-onboarding-checkbox-border': 'rgba(120, 82, 10, 0.24)',
  '--dsw-focus-ring-color': '#F5A200',
  '--dsw-alias-icon-blue': '#D98A00',

  // ── 特定表面：侧栏奶黄，主区奶白 ──
  '--dsw-specific-sidebar-fill': '#FBF1DA',
  '--dsw-specific-sidebar-nav-item-active': 'rgba(255, 179, 0, 0.20)',
  '--dsw-specific-sidebar-nav-item-active-accent': '#E8890B',
  '--dsw-specific-bubble': 'rgba(255, 179, 0, 0.18)',
  '--dsw-specific-bubble-highlight': 'rgba(255, 179, 0, 0.28)',
  '--dsw-specific-input-major': '#FFFFFF',
  '--dsw-specific-login-input': '#FFFFFF',
  '--dsw-specific-selector': '#FFB300',
  '--dsw-specific-tip': '#FBF1DA',
  '--dsw-specific-menu-item-hover': '#FFF8E7',
  '--dsw-specific-menu': '#FFFFFF',
  '--dsw-menu-surface-fill': 'rgba(255, 255, 255, 0.85)',
  '--dsw-menu-backdrop-filter': 'blur(16px) saturate(150%)',

  // ── 奶龙私有：亮色 ──
  '--nl-yellow': '#FFC629',
  '--nl-yellow-deep': '#FFB300',
  '--nl-orange': '#FF9F1C',
  '--nl-orange-deep': '#F08000',
  '--nl-cream': '#FFF8E7',
  '--nl-brown': '#4A3510',
  '--nl-primary': '#FFB300',
  '--nl-primary-hover': '#FF9F1C',
  '--nl-primary-active': '#F08000',
  '--nl-primary-soft': 'rgba(255, 179, 0, 0.14)',
  '--nl-primary-softer': 'rgba(255, 179, 0, 0.08)',
  '--nl-primary-border': 'rgba(255, 159, 28, 0.45)',
  '--nl-gradient': 'linear-gradient(135deg, #FFD84D 0%, #FFB300 55%, #FF9F1C 100%)',
  '--nl-gradient-soft': 'linear-gradient(135deg, rgba(255,216,77,.20) 0%, rgba(255,159,28,.14) 100%)',
  '--nl-gradient-button': 'linear-gradient(135deg, #FFCB3D 0%, #FFB300 50%, #FF9F1C 100%)',
  '--nl-gradient-text': 'linear-gradient(135deg, #F5A200 0%, #E8760A 100%)',
  '--nl-user-bubble': 'rgba(255, 179, 0, 0.18)',
  '--nl-glass-blur': 'blur(16px) saturate(150%)',
  '--nl-glass-fill': 'rgba(255, 252, 242, 0.82)',
  '--nl-composer-radius': '24px',
  '--nl-composer-shadow': '0 8px 28px rgba(255, 159, 28, 0.16), 0 2px 8px rgba(120, 82, 10, 0.05)',
  '--nl-content-max-width': '768px',
  '--nl-ease': 'cubic-bezier(.34, 1.4, .64, 1)',
  '--nl-ease-out': 'cubic-bezier(.23, 1, .32, 1)',
  '--nl-dur': '.16s',
  '--nl-dur-mid': '.24s',
})

/**
 * 暗色色板 —— 暖棕底 + 提亮黄。
 *
 * 暗色不是简单反色：底色用**深暖棕**（不是冷黑），因为明黄在纯黑上会刺眼，
 * 在暖棕上则像「夜里的小夜灯」。
 */
export const DARK = Object.freeze({
  '--dsw-static-neutral-bluish-950': '#1A1610',
  '--dsw-static-neutral-bluish-875': '#221C14',
  '--dsw-static-neutral-bluish-850': '#2A2318',
  '--dsw-static-neutral-bluish-800': '#332A1C',
  '--dsw-static-neutral-bluish-750': '#403522',
  '--dsw-static-neutral-bluish-700': '#54452C',
  '--dsw-static-neutral-bluish-600': '#6E5A3A',
  '--dsw-static-neutral-bluish-500': '#907A52',
  '--dsw-static-neutral-bluish-400': '#B39A6C',
  '--dsw-static-neutral-bluish-300': '#D4BC8C',
  '--dsw-static-neutral-bluish-200': '#EBD9B4',
  '--dsw-static-neutral-bluish-150': '#403522',
  '--dsw-static-neutral-bluish-100': '#54452C',
  '--dsw-static-neutral-bluish-75': '#332A1C',
  '--dsw-static-neutral-bluish-60': '#332A1C',
  '--dsw-static-neutral-bluish-50': '#FFF8E7',
  '--dsw-static-neutral-bluish-00': '#FFF8E7',
  '--dsw-static-neutral-bluish-1000': '#100D08',

  '--dsw-alias-bg-base': '#1A1610',
  '--dsw-alias-bg-layer-1': '#221C14',
  '--dsw-alias-bg-layer-2': '#2A2318',
  '--dsw-alias-bg-layer-3': '#332A1C',
  '--dsw-alias-bg-layer-4': '#403522',
  '--dsw-alias-bg-overlay': '#2A2318',
  '--dsw-alias-bg-module-platform': '#15110C',
  '--dsw-alias-bg-multi-select': 'rgba(255, 179, 0, 0.24)',
  '--dsw-alias-bg-l1': '#221C14',
  '--dsw-alias-bg-l2': '#2A2318',
  '--dsw-alias-background-secondary': '#2A2318',
  '--dsw-alias-bg-document-preview': '#221C14',
  '--dsw-alias-bg-document-selection': 'rgba(255, 179, 0, 0.36)',
  '--dsw-alias-bg-skeleton': 'rgba(255, 248, 231, 0.06)',
  '--dsw-alias-bg-mask-1': 'rgba(0, 0, 0, 0.55)',
  '--dsw-alias-bg-mask-2': 'rgba(0, 0, 0, 0.28)',
  '--dsw-alias-bg-mask-3': 'rgba(0, 0, 0, 0.65)',
  '--dsw-alias-bg-mask-photo': 'rgba(0, 0, 0, 0.9)',
  '--dsw-alias-bg-mask-drop': 'rgba(34, 28, 20, 0.78)',

  '--dsw-alias-border-l1': 'rgba(255, 248, 231, 0.08)',
  '--dsw-alias-border-l2': 'rgba(255, 248, 231, 0.14)',
  '--dsw-alias-border-subtle': 'rgba(255, 248, 231, 0.12)',
  '--dsw-alias-border-l2-darkmode-thin': 'rgba(255, 248, 231, 0.10)',
  '--dsw-alias-border-l3': 'rgba(255, 248, 231, 0.20)',
  '--dsw-alias-border-l4': 'rgba(255, 248, 231, 0.28)',
  '--dsw-alias-border-inverted': 'rgba(255, 248, 231, 0.07)',
  '--dsw-alias-border-inverted2': 'rgba(255, 248, 231, 0.14)',
  '--dsw-alias-separator-primary': 'rgba(255, 248, 231, 0.12)',

  '--dsw-alias-label-primary': '#FFF8E7',
  '--dsw-alias-label-primary-foreground': '#1A1610',
  '--dsw-alias-label-primary-inverted': '#4A3510',
  '--dsw-alias-label-primary-dimmed': 'rgba(255, 248, 231, 0.66)',
  '--dsw-alias-label-primary-bluish': '#FFCB3D',
  '--dsw-alias-label-secondary': 'rgba(255, 248, 231, 0.70)',
  '--dsw-alias-label-tertiary': 'rgba(255, 248, 231, 0.54)',
  '--dsw-alias-label-caption': 'rgba(255, 248, 231, 0.44)',
  '--dsw-alias-label-dimmed': 'rgba(255, 248, 231, 0.34)',
  '--dsw-alias-label-quaternary': 'rgba(255, 248, 231, 0.38)',
  '--dsw-alias-label-error': '#FF7B6B',
  '--dsw-alias-label-shimmer': 'rgba(255, 248, 231, 0.45)',
  '--dsw-alias-label-document-preview': '#D4BC8C',
  '--dsw-alias-menu-icon': 'rgba(255, 248, 231, 0.70)',

  '--dsw-alias-brand-primary': '#FFC629',
  '--dsw-alias-brand-primary-invert': '#1A1610',
  '--dsw-alias-brand-text': '#FFCB3D',
  '--dsw-alias-brand-primary-new-colorprimary-new-color': '#FFC629',
  '--dsw-alias-state-business-primary': '#FFC629',
  '--dsw-alias-state-business-tertiary': 'rgba(255, 198, 41, 0.20)',
  '--dsw-alias-button-primary-fill': '#FFC629',
  '--dsw-alias-button-primary-hover': '#FFD84D',
  '--dsw-alias-button-primary-dimmed': 'rgba(255, 198, 41, 0.28)',
  '--dsw-alias-button-contrast-fill': '#FFF8E7',
  '--dsw-alias-button-elevated-fill': '#2A2318',
  '--dsw-alias-button-floating-fill': '#2A2318',
  '--dsw-alias-button-floating-hover': '#332A1C',
  '--dsw-alias-button-ghost-active-fill': 'rgba(255, 198, 41, 0.18)',
  '--dsw-alias-button-ghost-active-hover': 'rgba(255, 198, 41, 0.26)',
  '--dsw-alias-button-ghost-active-border': 'rgba(255, 203, 61, 0.45)',
  '--dsw-alias-button-info-fill': '#FFC629',
  '--dsw-alias-button-info-hover': '#FFD84D',
  '--dsw-alias-button-tool-bar-fill': 'rgba(179, 154, 108, 0.52)',
  '--dsw-alias-button-tool-bar-fill-invisible': 'rgba(110, 90, 58, 0.38)',
  '--dsw-alias-button-tool-bar-hover': 'rgba(179, 154, 108, 0.66)',

  '--dsw-alias-interactive-bg-hover': 'rgba(255, 248, 231, 0.06)',
  '--dsw-alias-interactive-bg-hover-solid': '#2A2318',
  '--dsw-alias-interactive-bg-active': 'rgba(255, 198, 41, 0.20)',
  '--dsw-alias-interactive-bg-hover-accent': 'rgba(255, 198, 41, 0.16)',
  '--dsw-alias-interactive-bg-hover-danger': 'rgba(255, 123, 107, 0.14)',
  '--dsw-alias-fill-l1': 'rgba(255, 248, 231, 0.055)',
  '--dsw-alias-fill-l2': 'rgba(255, 248, 231, 0.09)',
  '--dsw-alias-fill-tertiary': 'rgba(255, 248, 231, 0.09)',
  '--dsw-alias-fill-tsp-secondary': 'rgba(255, 248, 231, 0.055)',

  '--dsw-static-green-500': '#5FD68A',
  '--dsw-static-green-400': '#5FD68A',
  '--dsw-static-green-100': 'rgba(95, 214, 138, 0.18)',
  '--dsw-static-green-900': 'rgba(95, 214, 138, 0.18)',
  '--dsw-static-green-500-a08': 'rgba(95, 214, 138, 0.10)',
  '--dsw-static-green-500-a12': 'rgba(95, 214, 138, 0.14)',
  '--dsw-static-red-600': '#FF7B6B',
  '--dsw-static-red-500': '#FF7B6B',
  '--dsw-static-red-400': '#FF7B6B',
  '--dsw-static-red-100': 'rgba(255, 123, 107, 0.18)',
  '--dsw-static-red-900': 'rgba(255, 123, 107, 0.18)',
  '--dsw-static-red-400-a12': 'rgba(255, 123, 107, 0.14)',
  '--dsw-static-red-600-a08': 'rgba(255, 123, 107, 0.10)',
  '--dsw-static-amber-500': '#FFB547',
  '--dsw-static-amber-400': '#FFB547',
  '--dsw-static-amber-600': '#FFB547',
  '--dsw-static-amber-100': 'rgba(255, 181, 71, 0.18)',
  '--dsw-static-amber-900': 'rgba(255, 181, 71, 0.18)',
  '--dsw-alias-state-success-primary': '#5FD68A',
  '--dsw-alias-state-success-secondary': '#5FD68A',
  '--dsw-alias-state-success-tertiary': 'rgba(95, 214, 138, 0.18)',
  '--dsw-alias-state-error-primary': '#FF7B6B',
  '--dsw-alias-state-error-secondary': '#FF7B6B',
  '--dsw-alias-state-warn-primary': '#FFB547',
  '--dsw-alias-state-warning-primary': '#FFB547',
  '--dsw-alias-state-warn-secondary': '#FFB547',
  '--dsw-alias-state-warn-label': '#FFB547',
  '--dsw-alias-state-warn-tertiary': 'rgba(255, 181, 71, 0.18)',
  '--dsw-alias-state-idle-primary': '#907A52',

  '--dsw-static-deepseek-500': '#FFC629',
  '--dsw-static-deepseek-450': '#FFC629',
  '--dsw-static-deepseek-400': '#FFC629',
  '--dsw-static-deepseek-600': '#FFD84D',
  '--dsw-static-deepseek-800': 'rgba(255, 198, 41, 0.22)',
  '--dsw-static-deepseek-100': 'rgba(255, 198, 41, 0.16)',
  '--dsw-static-deepseek-50': 'rgba(255, 198, 41, 0.10)',
  '--dsw-static-deepseek-200': 'rgba(255, 198, 41, 0.22)',
  '--dsw-static-deepseek-300': 'rgba(255, 198, 41, 0.32)',
  '--dsw-alias-link': '#FFCB3D',
  '--dsw-alias-label-deep-diving': '#FFCB3D',
  '--dsw-alias-label-deep-diving-shimmer': 'rgba(255, 203, 61, 0.34)',
  '--dsw-static-blue-500': '#FFC629',
  '--dsw-static-blue-450': '#FFC629',
  '--dsw-static-blue-400': '#FFD84D',
  '--dsw-static-blue-300': '#FFE07A',
  '--dsw-static-blue-100': 'rgba(255, 198, 41, 0.18)',

  '--dsw-alias-markdown-code-block': '#221C14',
  '--dsw-alias-markdown-code-block-banner': '#2A2318',
  '--dsw-alias-markdown-inline-code': 'rgba(255, 198, 41, 0.18)',
  '--dsw-alias-markdown-code-editor-bg': '#100D08',
  '--dsw-alias-markdown-code-editor-fg': '#FFF8E7',
  '--dsw-alias-markdown-tag': '#403522',
  '--dsw-alias-markdown-citation': '#2A2318',
  '--dsw-alias-markdown-placeholder': '#221C14',
  '--dsw-alias-markdown-code-segment-selected': '#2A2318',
  '--dsw-alias-markdown-code-segment-unselected': '#1A1610',
  '--dsw-alias-turn-trigger-bg': '#2A2318',
  '--dsw-alias-turn-trigger-bg-hover': 'rgba(255, 248, 231, 0.06)',
  '--dsw-alias-code-diff-added': 'rgba(95, 214, 138, 0.14)',
  '--dsw-alias-code-diff-deleted': 'rgba(255, 123, 107, 0.14)',
  '--dsw-alias-file-diff-added-bg': '#1C2E22',
  '--dsw-alias-file-diff-added-gutter': '#141F18',
  '--dsw-alias-file-diff-added-marker': '#5FD68A',
  '--dsw-alias-file-diff-deleted-bg': '#331D1A',
  '--dsw-alias-file-diff-deleted-gutter': '#231412',
  '--dsw-alias-file-diff-deleted-marker': '#FF7B6B',

  '--dsw-alias-scrollbar-bg-l1': 'rgba(255, 248, 231, 0.16)',
  '--dsw-alias-scrollbar-bg-l2': 'rgba(255, 248, 231, 0.16)',
  '--dsw-alias-scrollbar-hover-l1': 'rgba(255, 248, 231, 0.34)',
  '--dsw-alias-scrollbar-hover-l2': 'rgba(255, 248, 231, 0.34)',
  '--dsw-alias-toast-bg': '#332A1C',
  '--dsw-alias-toast-label': '#FFF8E7',
  '--dsw-alias-tooltip-bg': '#332A1C',
  '--dsw-alias-tooltip-label': '#FFF8E7',
  '--dsw-alias-tooltip-key-bg': '#403522',
  '--dsw-alias-menu-group-header-fill': 'rgba(26, 22, 16, 0.95)',
  '--dsw-alias-switch-thumb': '#FFF8E7',
  '--dsw-alias-settings-card-fill': '#221C14',
  '--dsw-alias-settings-card-stroke': 'rgba(255, 248, 231, 0.14)',
  '--dsw-alias-onboarding-accent': '#FFC629',
  '--dsw-alias-onboarding-card-fill': '#221C14',
  '--dsw-alias-onboarding-secondary-fill': '#2A2318',
  '--dsw-alias-onboarding-checkbox-border': 'rgba(255, 248, 231, 0.24)',
  '--dsw-focus-ring-color': '#FFCB3D',
  '--dsw-alias-icon-blue': '#FFCB3D',

  '--dsw-specific-sidebar-fill': '#15110C',
  '--dsw-specific-sidebar-nav-item-active': 'rgba(255, 198, 41, 0.20)',
  '--dsw-specific-sidebar-nav-item-active-accent': '#FFCB3D',
  '--dsw-specific-bubble': 'rgba(255, 198, 41, 0.18)',
  '--dsw-specific-bubble-highlight': 'rgba(255, 198, 41, 0.28)',
  '--dsw-specific-input-major': '#2A2318',
  '--dsw-specific-login-input': '#2A2318',
  '--dsw-specific-selector': '#FFC629',
  '--dsw-specific-tip': '#2A2318',
  '--dsw-specific-menu-item-hover': '#332A1C',
  '--dsw-specific-menu': '#221C14',
  '--dsw-menu-surface-fill': 'rgba(42, 35, 24, 0.85)',
  '--dsw-menu-backdrop-filter': 'blur(16px) saturate(150%)',

  '--nl-yellow': '#FFC629',
  '--nl-yellow-deep': '#FFD84D',
  '--nl-orange': '#FFB547',
  '--nl-orange-deep': '#FF9F1C',
  '--nl-cream': '#FFF8E7',
  '--nl-brown': '#EBD9B4',
  '--nl-primary': '#FFC629',
  '--nl-primary-hover': '#FFD84D',
  '--nl-primary-active': '#FFE07A',
  '--nl-primary-soft': 'rgba(255, 198, 41, 0.20)',
  '--nl-primary-softer': 'rgba(255, 198, 41, 0.12)',
  '--nl-primary-border': 'rgba(255, 203, 61, 0.45)',
  '--nl-gradient': 'linear-gradient(135deg, #FFE07A 0%, #FFC629 55%, #FF9F1C 100%)',
  '--nl-gradient-soft': 'linear-gradient(135deg, rgba(255,224,122,.22) 0%, rgba(255,159,28,.16) 100%)',
  '--nl-gradient-button': 'linear-gradient(135deg, #FFD84D 0%, #FFC629 50%, #FFB547 100%)',
  '--nl-gradient-text': 'linear-gradient(135deg, #FFD84D 0%, #FFB547 100%)',
  '--nl-user-bubble': 'rgba(255, 198, 41, 0.18)',
  '--nl-glass-blur': 'blur(16px) saturate(150%)',
  '--nl-glass-fill': 'rgba(42, 35, 24, 0.82)',
  '--nl-composer-radius': '24px',
  '--nl-composer-shadow': '0 8px 32px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 248, 231, 0.06)',
  '--nl-content-max-width': '768px',
  '--nl-ease': 'cubic-bezier(.34, 1.4, .64, 1)',
  '--nl-ease-out': 'cubic-bezier(.23, 1, .32, 1)',
  '--nl-dur': '.16s',
  '--nl-dur-mid': '.24s',
})

/**
 * 结构规则。
 *
 * 卡通感的三个结构手法：
 *   1. 圆角全部偏大（无锐角）
 *   2. 交互有「弹一下」的过冲缓动（--nl-ease 带 1.4 回弹）
 *   3. 按钮/胶囊有柔和光晕，不用硬阴影
 *
 * 纪律不变：只用实测确认的宿主 `data-*` 锚点，不碰 CSS Module 哈希类名。
 */
export const STRUCTURE_CSS = `
/* 原生控件跟随皮肤。 */
:root:root body{color-scheme:light}
:root:root body[data-ds-dark-theme]{color-scheme:dark}

/* 字体归一：零特异性，只压过 UA 默认值。 */
:where(body){font-family:var(--dsw-font-family);font-variant-numeric:tabular-nums}
:where(button,input,select,textarea){font-family:inherit}

/* ── 输入框：24px 圆角 + 暖黄光晕 ──────────────────────────────── */
[data-composer-card]{
  border-radius:var(--nl-composer-radius)!important;
  box-shadow:var(--nl-composer-shadow)!important;
  border:1px solid var(--dsw-alias-border-l2)!important;
  background:var(--dsw-alias-bg-layer-1)!important;
  transition:box-shadow var(--nl-dur-mid) var(--nl-ease),border-color var(--nl-dur) var(--nl-ease-out)!important;
}
[data-composer-card]:focus-within{
  border-color:var(--nl-primary)!important;
  box-shadow:0 0 0 4px var(--nl-primary-softer),var(--nl-composer-shadow)!important;
}

/* ── 消息气泡：圆润 20px，用户气泡奶黄 ────────────────────────── */
[data-message-bubble]{
  border-radius:var(--dsw-radius-lg)!important;
}

/* ── 快捷胶囊：奶黄底 + 回弹 hover ────────────────────────────── */
[data-composer-chip]{
  border-radius:var(--dsw-radius-full)!important;
  border:1px solid var(--dsw-alias-border-l2)!important;
  background:var(--nl-glass-fill)!important;
  backdrop-filter:var(--nl-glass-blur)!important;
  -webkit-backdrop-filter:var(--nl-glass-blur)!important;
  color:var(--dsw-alias-label-secondary)!important;
  transition:all var(--nl-dur) var(--nl-ease)!important;
}
[data-composer-chip]:hover{
  border-color:var(--nl-primary-border)!important;
  color:var(--nl-primary-active)!important;
  background:var(--nl-primary-soft)!important;
  transform:translateY(-2px) scale(1.02)!important;
  box-shadow:0 6px 16px var(--nl-primary-soft)!important;
}
[data-composer-chip]:active{
  transform:translateY(0) scale(.98)!important;
}
[data-composer-chip][data-composer-chip-selected],
[data-composer-chip][aria-pressed=true]{
  border-color:var(--nl-primary)!important;
  color:#4A3510!important;
  background:var(--nl-gradient-button)!important;
  box-shadow:0 4px 16px var(--nl-primary-soft)!important;
}

/* ── 主按钮：明黄渐变 + 回弹 ──────────────────────────────────── */
[data-composer-card] button[class*="primary"],
[data-composer-card] [data-composer-command]{
  background:var(--nl-gradient-button)!important;
  color:#4A3510!important;
  border:0!important;
  border-radius:var(--dsw-radius-full)!important;
  font-weight:700!important;
  box-shadow:0 4px 16px var(--nl-primary-soft)!important;
  transition:transform var(--nl-dur) var(--nl-ease),box-shadow var(--nl-dur) var(--nl-ease-out)!important;
}
[data-composer-card] button[class*="primary"]:hover,
[data-composer-card] [data-composer-command]:hover{
  transform:translateY(-2px) scale(1.04)!important;
  box-shadow:0 8px 24px var(--nl-primary-border)!important;
}
[data-composer-card] button[class*="primary"]:active,
[data-composer-card] [data-composer-command]:active{
  transform:translateY(0) scale(.97)!important;
}

/* ── 浮层：奶白玻璃 ──────────────────────────────────────────── */
[data-menu-field],[data-context-menu],[data-global-panel]{
  backdrop-filter:var(--nl-glass-blur)!important;
  -webkit-backdrop-filter:var(--nl-glass-blur)!important;
  border-radius:var(--dsw-radius-xl)!important;
  border:1px solid var(--dsw-alias-border-l2)!important;
  box-shadow:var(--dsw-shadow-lv3)!important;
}

/* ── 代码块 / 引用：圆角 + 明黄引用边 ────────────────────────── */
[data-code-block-banner]{border-radius:var(--dsw-radius-lg) var(--dsw-radius-lg) 0 0!important}
[data-conversation-scroll] pre{border-radius:var(--dsw-radius-lg)!important}
[data-conversation-scroll] blockquote{
  border-radius:var(--dsw-radius-lg)!important;
  border-left:3px solid var(--nl-primary)!important;
  background:var(--nl-gradient-soft)!important;
  padding-left:16px!important;
}

/* ── 滚动条：细圆半透明 ──────────────────────────────────────── */
:root:root ::-webkit-scrollbar{width:var(--dsh-scrollbar-width);height:var(--dsh-scrollbar-width)}
:root:root ::-webkit-scrollbar-thumb{
  background:var(--dsw-alias-scrollbar-bg-l1);
  border-radius:9999px;
  border:var(--dsh-scrollbar-thumb-border) solid transparent;
  background-clip:padding-box;
}
:root:root ::-webkit-scrollbar-thumb:hover{
  background:var(--dsw-alias-scrollbar-hover-l1);
  background-clip:padding-box;
}
:root:root ::-webkit-scrollbar-track{background:transparent}

/* ── 焦点环与选中文本 ────────────────────────────────────────── */
:root:root body :focus-visible{outline-color:var(--dsw-focus-ring-color)}
:root:root body ::selection{
  background:var(--nl-primary-soft);
  color:var(--dsw-alias-label-primary);
}

@media (prefers-reduced-motion: reduce){
  [data-composer-card],[data-composer-chip],
  [data-composer-card] button[class*="primary"]{
    transition:none!important;transform:none!important
  }
  [data-composer-chip]:hover,[data-composer-chip]:active,
  [data-composer-card] button[class*="primary"]:hover,
  [data-composer-card] button[class*="primary"]:active{transform:none!important}
}
`.trim()

/** 把令牌映射渲染成 CSS 文本。 */
export function renderTokenBlock(selector, tokens) {
  return `${selector}{${Object.entries(tokens)
    .map(([name, value]) => `${name}:${value}`)
    .join(';')}}`
}

/** 生成完整皮肤样式表。 */
export function renderSkinCss() {
  const structural = [
    renderTokenBlock(':root:root', STRUCTURAL),
    renderTokenBlock(':root:root body', STRUCTURAL),
  ].join('')
  return [
    `/* dsh-nailong-ui — 奶龙主题 v${SKIN_VERSION} · inspired-by, 非官方 */`,
    `/* 全部色值为视觉归纳（推导），非官方实测。不含任何形象素材。详见 docs/DESIGN.md */`,
    renderTokenBlock(LIGHT_SELECTOR, LIGHT),
    renderTokenBlock(DARK_SELECTOR, DARK),
    structural,
    STRUCTURE_CSS,
  ].join('\n')
}
