/* dsh-nailong-ui — 自动生成，请勿直接编辑。
 * 源码：src/tokens.mjs + src/artwork.mjs + src/components.mjs + src/client.mjs
 * 生成：node scripts/build.mjs
 */
window.__ModuleLoader__.load({
	id: 'dsh-nailong-ui',
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

		const __MOD_TOKENS__ = (() => {
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
		const SKIN_VERSION = '1.0.0'

		/** 标记属性。 */
		const SKIN_ATTRIBUTE = 'data-dsh-nailong-skin'

		/** 样式标签标识。 */
		const STYLE_TAG_ID = 'dsh-nailong-ui/skin.css'

		/** 亮色选择器。 */
		const LIGHT_SELECTOR = ':root:root body'

		/** 暗色选择器。 */
		const DARK_SELECTOR = ':root:root body[data-ds-dark-theme]'

		/**
		 * 几何 / 排版令牌。
		 *
		 * 卡通感的几何来源：**所有圆角都偏大且彼此接近**（没有 4px 这种小锐角），
		 * 阴影柔和（不要硬边），字号略大。
		 */
		const STRUCTURAL = Object.freeze({
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
		const LIGHT = Object.freeze({
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
		const DARK = Object.freeze({
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
		const STRUCTURE_CSS = `
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
		function renderTokenBlock(selector, tokens) {
		  return `${selector}{${Object.entries(tokens)
		    .map(([name, value]) => `${name}:${value}`)
		    .join(';')}}`
		}

		/** 生成完整皮肤样式表。 */
		function renderSkinCss() {
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

		return { SKIN_VERSION, SKIN_ATTRIBUTE, STYLE_TAG_ID, LIGHT_SELECTOR, DARK_SELECTOR, STRUCTURAL, LIGHT, DARK, STRUCTURE_CSS, renderTokenBlock, renderSkinCss };
		})();

		const __MOD_ARTWORK__ = (() => {
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
		const MARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-label="">
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
		function markDataUrl() {
		  try {
		    return 'data:image/svg+xml;base64,' + btoa(MARK_SVG)
		  } catch {
		    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(MARK_SVG)
		  }
		}

		return { MARK_SVG, markDataUrl };
		})();

		const __MOD_COMPONENTS__ = (() => {
		/**
		 * dsh-nailong-ui — React 组件层（源码）
		 *
		 * 这一层让皮肤不止于换颜色：
		 *   1. sidebar.brand.mark / sidebar.brand.name  → 自创月牙标记 + 名称
		 *   2. conversation.hero.brand.mark             → 首页大号标记
		 *   3. conversation.hero.options                → 快捷入口胶囊
		 *   4. settings.section                          → 「关于」页
		 *
		 * 全部通过官方 `ctx.slots.inject` / `ctx.slots.register` 声明式注册，
		 * 不直接改宿主 DOM、不碰会话数据、不注册工具、不联网。
		 *
		 * ── 安全纪律 ───────────────────────────────────────────────────────────
		 * DSH 客户端 Loader **不隔离 entry 工厂**：一个工厂抛异常会聚合成
		 * "entries did not activate"，把整个 Web 壳带崩。所以：
		 *   - 模块顶层**绝不** require('react')，改由 bindReact() 惰性绑定；
		 *   - 每个 slots.inject 都单独 try/catch，某个插槽不存在/已声明不影响其余；
		 *   - 组件内部不访问可能为空的 ctx 服务，全部用可选链 + 默认值。
		 *
		 * 关于 priority：-1 是社区皮肤已验证的写法，用来盖掉
		 * 官方 dsh-client-ui-brand-official（默认优先级 0）的占位。
		 */

		let __jsx = null
		let __jsxs = null

		/**
		 * 惰性绑定 React 种子模块；成功返回 true，失败返回 false（绝不抛）。
		 *
		 * 为什么不在模块顶层 require：工厂一进入就会求值所有内联模块体；若此时
		 * React 种子缺失，抛出的异常发生在调用方的 try 之外，会直接把 Web 壳带崩。
		 */
		function bindReact(requireFn) {
		  try {
		    const React = requireFn('react')
		    const runtime = requireFn('react/jsx-runtime')
		    if (!React || !runtime || typeof runtime.jsx !== 'function') return false
		    __jsx = runtime.jsx
		    __jsxs = runtime.jsxs ?? runtime.jsx
		    return true
		  } catch {
		    return false
		  }
		}

		/** 渲染助手：未绑定时返回 null，不抛异常。 */
		const jsx = (...args) => (__jsx ? __jsx(...args) : null)
		const jsxs = (...args) => (__jsxs ? __jsxs(...args) : null)

		const { markDataUrl } = __MOD_ARTWORK__

		const PLUGIN_ID = 'dsh-nailong-ui'
		const NS = 'settings.nailongUi'

		/** 快捷入口文案。走「轻松陪伴」的调性，与卡通主题一致。 */
		const QUICK_ACTIONS = [
		  { id: 'search', label: 'AI 搜索', prompt: '帮我搜索并总结：' },
		  { id: 'read', label: '讲个故事', prompt: '帮我阅读并总结这份长文：\n' },
		  { id: 'write', label: '帮我写作', prompt: '帮我写一段：' },
		  { id: 'translate', label: '翻译', prompt: '请把下面内容翻译成中文：\n' },
		]

		/** 组件层样式，命名空间 .nl-*，与皮肤层令牌解耦。 */
		const COMPONENT_CSS = `
		.nl-mark{display:block;flex:none;border-radius:32%;user-select:none;-webkit-user-drag:none;filter:drop-shadow(0 2px 6px rgba(23,131,255,.30))}
		.nl-brand{display:inline-flex;align-items:center;gap:8px;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:.01em;font-weight:700;font-size:15px;background:var(--nl-gradient-text,linear-gradient(135deg,#1783FF,#2F20FF));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:var(--nl-primary,#1783FF)}
		.nl-hero-mark{display:block;border-radius:34%;box-shadow:0 12px 32px rgba(23,131,255,.34),0 0 0 1px rgba(255,255,255,.10) inset;transition:transform var(--nl-dur-mid,.22s) var(--nl-ease-out,cubic-bezier(0,.0,.2,1))}
		.nl-hero-mark:hover{transform:translateY(-2px) scale(1.03)}
		.nl-quick{display:flex;flex-wrap:wrap;gap:9px;justify-content:center;width:100%;padding:4px 0 0;box-sizing:border-box}
		.nl-chip{appearance:none;display:inline-flex;align-items:center;gap:6px;min-height:34px;padding:0 16px;border:1px solid var(--dsw-alias-border-l2,rgba(0,0,0,.12));border-radius:9999px;background:var(--nl-glass-fill,rgba(255,255,255,.78));backdrop-filter:var(--nl-glass-blur,blur(20px) saturate(180%));-webkit-backdrop-filter:var(--nl-glass-blur,blur(20px) saturate(180%));color:var(--dsw-alias-label-secondary,rgba(0,0,0,.85));font:inherit;font-size:13px;font-weight:500;line-height:20px;cursor:pointer;transition:all var(--nl-dur,.15s) var(--nl-ease-out,cubic-bezier(0,0,.2,1))}
		.nl-chip:hover{border-color:var(--nl-primary-border,rgba(23,131,255,.32));color:var(--nl-primary,#1783FF);background:var(--nl-primary-soft,rgba(23,131,255,.1));transform:translateY(-1px);box-shadow:0 4px 12px var(--nl-primary-softer,rgba(23,131,255,.06))}
		.nl-chip:active{transform:translateY(0)}
		.nl-chip:focus-visible{outline:2px solid var(--dsw-focus-ring-color,#1783FF);outline-offset:2px}
		.nl-about{max-width:760px;display:flex;flex-direction:column;gap:18px;color:var(--dsw-alias-label-primary,#1A1815);font:14px/1.6 var(--dsw-font-family,system-ui)}
		.nl-about h2{margin:0;font-size:22px;font-weight:700;line-height:30px;letter-spacing:-.01em}
		.nl-about h3{margin:0 0 6px;font-size:15px;font-weight:600}
		.nl-about p{margin:0;color:var(--dsw-alias-label-secondary,rgba(26,24,21,.68))}
		.nl-about-card{border:1px solid var(--dsw-alias-border-l2,rgba(26,24,21,.12));border-radius:var(--dsw-radius-lg,20px);padding:18px;background:var(--dsw-alias-bg-layer-1,#fff);display:flex;flex-direction:column;gap:8px;transition:box-shadow var(--nl-dur-mid,.22s) var(--nl-ease-out,cubic-bezier(0,0,.2,1))}
		.nl-about-card:hover{box-shadow:0 6px 20px rgba(23,131,255,.10)}
		.nl-about-head{display:flex;align-items:center;gap:14px}
		.nl-about-head img{width:44px;height:44px;border-radius:32%;flex:none;box-shadow:0 6px 18px rgba(23,131,255,.28)}
		.nl-about-badge{display:inline-flex;align-items:center;padding:3px 10px;border-radius:9999px;font-size:12px;font-weight:600;line-height:18px;background:var(--nl-gradient-soft,linear-gradient(135deg,rgba(77,160,255,.14),rgba(47,32,255,.10)));color:var(--nl-primary,#1783FF);border:1px solid var(--nl-primary-border,rgba(23,131,255,.32))}
		.nl-about-tip{margin:0;font-size:12.5px;color:var(--dsw-alias-label-tertiary,rgba(26,24,21,.52))}
		.nl-about a{color:var(--nl-primary,#1783FF);text-decoration:none}
		.nl-about a:hover{text-decoration:underline}
		@media (prefers-reduced-motion: reduce){.nl-chip,.nl-hero-mark,.nl-about-card{transition:none}.nl-hero-mark:hover{transform:none}}
		`.trim()

		/** 幂等安装组件层样式（与皮肤层同一约定，便于 HMR 回收）。 */
		function installComponentStyles(doc) {
		  if (typeof doc === 'undefined' || doc === null || doc.head == null) return () => {}
		  const id = 'dsh-nailong-ui/components.css'
		  let tag = doc.querySelector(`style[data-plugin-css="${id}"]`)
		  if (tag === null) {
		    tag = doc.createElement('style')
		    tag.dataset.plugin = PLUGIN_ID
		    tag.dataset.pluginCss = id
		    doc.head.appendChild(tag)
		  }
		  tag.textContent = COMPONENT_CSS
		  return () => {
		    try { tag?.remove() } catch { /* ignore */ }
		  }
		}

		/** 派发 `input` 事件，让 React 的受控组件感知到值变化。三级兜底。 */
		function dispatchInput(el) {
		  try {
		    const view = el.ownerDocument?.defaultView
		    const Ctor = view?.Event ?? (typeof Event !== 'undefined' ? Event : null)
		    if (Ctor !== null && Ctor !== undefined) {
		      el.dispatchEvent(new Ctor('input', { bubbles: true }))
		      return
		    }
		  } catch { /* 落到下一级 */ }
		  try {
		    const ev = el.ownerDocument.createEvent('Event')
		    ev.initEvent('input', true, false)
		    el.dispatchEvent(ev)
		  } catch { /* 事件发不出就算了，值已经写进去了 */ }
		}

		/**
		 * 把预置提示词写进当前输入框。
		 *
		 * 用宿主公开的稳定锚点 `[data-composer-input]` 找真实输入元素，
		 * 走原型上的原生 setter 写值（绕过 React 的值追踪），再派发冒泡 input 事件。
		 * 找不到输入框时返回 false，绝不抛异常。
		 */
		function insertDraft(text) {
		  try {
		    const doc = globalThis.document
		    if (doc === null || doc === undefined) return false
		    const candidates = [
		      '[data-composer-input] textarea',
		      '[data-composer-input] [contenteditable="true"]',
		      '[data-composer-card] textarea',
		      '[data-composer-card] [contenteditable="true"]',
		      '[data-input] textarea',
		      'textarea[data-input]',
		    ]
		    let el = null
		    for (const selector of candidates) {
		      el = doc.querySelector(selector)
		      if (el !== null) break
		    }
		    if (el === null) return false

		    if (el.getAttribute('contenteditable') === 'true') {
		      el.focus?.()
		      el.textContent = text
		      dispatchInput(el)
		      return true
		    }

		    // 用 tagName 判断而不是 instanceof —— 后者在跨 realm 场景会误判。
		    const tag = String(el.tagName ?? '').toUpperCase()
		    const view = el.ownerDocument?.defaultView
		    const Ctor = tag === 'TEXTAREA' ? view?.HTMLTextAreaElement : view?.HTMLInputElement
		    let setter
		    try {
		      setter = Ctor ? Object.getOwnPropertyDescriptor(Ctor.prototype, 'value')?.set : undefined
		    } catch {
		      setter = undefined
		    }
		    el.focus?.()
		    if (typeof setter === 'function') setter.call(el, text)
		    else el.value = text
		    dispatchInput(el)
		    return true
		  } catch {
		    return false
		  }
		}

		/** 侧栏方形标记。props.size 由宿主传入（实测 24）。 */
		function BrandMark(props) {
		  const size = props && typeof props.size === 'number' ? props.size : 24
		  return jsx('img', {
		    'data-nailong-mark': '',
		    className: 'nl-mark',
		    src: markDataUrl(),
		    alt: '',
		    'aria-hidden': 'true',
		    draggable: false,
		    style: { width: `${size}px`, height: `${size}px` },
		  })
		}

		/** 侧栏名称。 */
		function BrandName() {
		  return jsx('span', { 'data-nailong-name': '', className: 'nl-brand' }, '奶龙')
		}

		/** 首页大号标记。props.size / props.className 由宿主传入（实测 34）。 */
		function HeroMark(props) {
		  const size = props && typeof props.size === 'number' ? props.size : 34
		  const cls = props && typeof props.className === 'string' ? props.className : ''
		  return jsx('img', {
		    'data-nailong-hero-mark': '',
		    className: `nl-hero-mark ${cls}`.trim(),
		    src: markDataUrl(),
		    alt: '',
		    'aria-hidden': 'true',
		    draggable: false,
		    style: { width: `${size}px`, height: `${size}px` },
		  })
		}

		/** 首页快捷入口胶囊：点击把预置提示词写进输入框。 */
		function QuickActions() {
		  return jsxs('div', {
		    className: 'nl-quick',
		    'data-nailong-quick': '',
		    role: 'group',
		    'aria-label': '快捷入口',
		    children: QUICK_ACTIONS.map((action) =>
		      jsx('button', {
		        key: action.id,
		        type: 'button',
		        className: 'nl-chip',
		        'data-nailong-chip': action.id,
		        onClick: () => { insertDraft(action.prompt) },
		        children: action.label,
		      }),
		    ),
		  })
		}

		/** 「关于」设置页：说明来源、权限边界与回滚方式。 */
		function AboutSection() {
		  return jsxs('div', {
		    className: 'nl-about',
		    children: [
		      jsxs('div', { className: 'nl-about-head', children: [
		        jsx('img', { src: markDataUrl(), alt: '', 'aria-hidden': 'true' }),
		        jsxs('div', { children: [
		          jsx('h2', { children: '奶龙主题' }),
		          jsx('span', { className: 'nl-about-badge', children: 'dsh-nailong-ui · v2.0.0' }),
		        ] }),
		      ] }),
		      jsxs('div', { className: 'nl-about-card', children: [
		        jsx('h3', { children: '这是什么' }),
		        jsx('p', { children: '给 DeepSeek Harness Web 换一套明黄主题：蛋黄主色、奶白暖调表面、圆润无棱角的几何，外加品牌标记与首页快捷入口。明暗双主题跟随宿主设置。' }),
		      ] }),
		      jsxs('div', { className: 'nl-about-card', children: [
		        jsx('h3', { children: '能力边界' }),
		        jsx('p', { children: '本插件只写两张样式表并注册几个界面插槽：不读写文件、不发起网络请求、不注册工具或服务、不写会话记录。停用或卸载后官方界面完整恢复。' }),
		      ] }),
		      jsxs('div', { className: 'nl-about-card', children: [
		        jsx('h3', { children: '来源与声明' }),
		        jsx('p', { children: '配色与几何参照 奶龙形象的配色语言（明黄 + 奶白 + 暖橙），按 DSH 语义重新映射；图标为本项目原创绘制，未复制任何形象素材。这是个人维护的非官方插件，与奶龙形象权利人、DeepSeek 无隶属或背书关系。' }),
		        jsx('p', { className: 'nl-about-tip', children: '完整令牌映射与逐项「实测 / 推导」标注见仓库 docs/DESIGN.md。' }),
		      ] }),
		    ],
		  })
		}

		/**
		 * 声明式注册所有插槽。
		 *
		 * 每个注册都独立 try/catch：某个插槽在当前宿主版本不存在、或已被别的插件
		 * 声明（slot already declared），就跳过它，其余照常工作。
		 */
		function registerSlots(ctx) {
		  const slots = ctx && ctx.slots
		  if (!slots || typeof slots.inject !== 'function' || typeof slots.register !== 'function') return

		  // 1. 侧栏品牌：盖掉官方 brand-official（priority -1）
		  try {
		    slots.inject('sidebar.brand.mark', () =>
		      slots.inject('sidebar.brand.name', function* () {
		        try { yield slots.register({ name: 'sidebar.brand.mark', priority: -1 }, BrandMark) } catch { /* slot taken */ }
		        try { yield slots.register({ name: 'sidebar.brand.name', priority: -1 }, BrandName) } catch { /* slot taken */ }
		      }),
		    )
		  } catch { /* 宿主无此插槽 */ }

		  // 2. 首页 hero 标记
		  try {
		    slots.inject('conversation.hero.brand.mark', () =>
		      slots.register({ name: 'conversation.hero.brand.mark', priority: -1 }, HeroMark),
		    )
		  } catch { /* 宿主无此插槽 */ }

		  // 3. 首页快捷胶囊
		  try {
		    slots.inject('conversation.hero.options', () =>
		      slots.register({ name: 'conversation.hero.options', id: 'nailong-quick-actions', order: 80 }, QuickActions),
		    )
		  } catch { /* 宿主无此插槽 */ }

		  // 4. 设置页「关于」
		  try {
		    slots.inject('settings.section', () =>
		      slots.register({
		        name: 'settings.section',
		        id: 'nailong-ui',
		        order: 900,
		        label: () => '奶龙主题',
		      }, AboutSection),
		    )
		  } catch { /* 宿主无此插槽 */ }
		}


		return { bindReact, installComponentStyles, registerSlots, insertDraft, dispatchInput, BrandMark, BrandName, HeroMark, QuickActions, AboutSection, QUICK_ACTIONS, COMPONENT_CSS, NS };
		})();

		const __MOD_CLIENT__ = (() => {
		/**
		 * dsh-nailong-ui — 奶龙主题 · 浏览器半（源码）
		 *
		 * 构建产物是 client/client.js：一个由 window.__ModuleLoader__.load 注册的
		 * 工厂式 CJS 模块（与官方 ui-* 包、其他第三方皮肤完全同一套机制）。
		 * 构建脚本 scripts/build.mjs 把 src/*.mjs 全部内联打包，因此本包**没有运行时
		 * 依赖、没有构建期框架依赖、不需要 pnpm install**。
		 *
		 * 两层贡献：
		 *   - 皮肤层（tokens.mjs）：纯 CSS 变量覆盖，换全站配色与几何。始终生效。
		 *   - 组件层（components.mjs）：React 插槽注册，换品牌标记、首页快捷入口、
		 *     设置页关于入口。宿主无 React / 无插槽时整体安全降级，皮肤层不受影响。
		 *
		 * ── 导出契约 ──────────────────────────────────────────────────────────
		 * 本文件**不使用** `module.exports = {...}`。原因：`module.exports = x` 会让
		 * `module.exports` 指向新对象，而工厂开头 `var exports = module.exports` 拿到的
		 * 是**旧对象**；后续任何 `exports.foo = ...` 都写在废弃对象上，静默丢失。
		 *
		 * ── require 的传递 ────────────────────────────────────────────────────
		 * `apply` 需要工厂的 `require` 来探测 React 种子模块。ESM 源码里没有 `require`
		 * 这个自由变量，所以由构建器在工厂作用域内调用 `createApply(require)`。
		 *
		 * 设计原则（刻意保守，避免把宿主带崩）：
		 *   1. 不替换宿主业务组件、不注册工具、不碰会话数据、不发起网络请求。
		 *   2. 所有平台能力探测与样式注入都包在 try 里；任何一步失败都退化成
		 *      「隐形的哑模块」——绝不让 loader 的 entry 工厂抛异常（loader 不隔离
		 *      工厂：一个工厂抛异常会聚合成 "entries did not activate"，把整个 Web
		 *      壳带崩，这是社区插件最常见的白屏原因）。
		 *   3. 不依赖宿主的 CSS Module 哈希类名。所有选择器走 :root / body /
		 *      data-* 稳定锚点；找不到锚点时什么都不发生，皮肤其余部分不受影响。
		 *   4. 样式标签带 data-plugin / data-plugin-css，遵循 DSH 客户端插件约定，
		 *      让 HMR 驱动与卸载流程能正确回收它。
		 */

		const {
		  SKIN_VERSION,
		  SKIN_ATTRIBUTE,
		  STYLE_TAG_ID,
		  renderSkinCss,
		} = __MOD_TOKENS__

		const PLUGIN_ID = 'dsh-nailong-ui'

		/**
		 * 安全获取 React 组件层。
		 *
		 * `require('react')` / `require('react/jsx-runtime')` 是 DSH 客户端模块系统的
		 * **平台种子模块**（无需在 dsh.client.external 声明），但宿主版本差异或加载
		 * 顺序异常时仍可能抛错。这里把整个组件层的加载包在 try 里：拿不到就返回
		 * null，插件自动退化为「纯 CSS 皮肤」，绝不白屏。
		 */
		function probeComponents(requireFn) {
		  if (typeof requireFn !== 'function') return null
		  try {
		    const components = __MOD_COMPONENTS__
		    if (!components || typeof components.bindReact !== 'function') return null
		    // 绑定失败（React 种子缺失）→ 整体降级为纯 CSS 皮肤。
		    if (!components.bindReact(requireFn)) return null
		    return components
		  } catch {
		    return null
		  }
		}

		/**
		 * 安装皮肤样式表。
		 *
		 * 幂等：同名标签已存在时只替换内容，不重复插入。
		 * 返回卸载函数，供 ctx.effect 在插件停用时回收（同时还原 <html> 标记）。
		 */
		function installSkin(doc) {
		  if (typeof doc === 'undefined' || doc === null || doc.head == null) return () => {}
		  let tag = doc.querySelector(`style[data-plugin-css="${STYLE_TAG_ID}"]`)
		  if (tag === null) {
		    tag = doc.createElement('style')
		    tag.dataset.plugin = PLUGIN_ID
		    tag.dataset.pluginCss = STYLE_TAG_ID
		    doc.head.appendChild(tag)
		  }
		  tag.textContent = renderSkinCss()

		  const root = doc.documentElement
		  const previous = root.getAttribute(SKIN_ATTRIBUTE)
		  root.setAttribute(SKIN_ATTRIBUTE, SKIN_VERSION)

		  return () => {
		    try {
		      tag?.remove()
		      if (previous === null) root.removeAttribute(SKIN_ATTRIBUTE)
		      else root.setAttribute(SKIN_ATTRIBUTE, previous)
		    } catch {
		      /* 卸载时 DOM 可能已经不在了，忽略 */
		    }
		  }
		}

		/**
		 * 在宿主侧栏/会话区打上 `data-nailong-*` 标记，供样式表作为稳定锚点。
		 *
		 * 为什么需要：DSH 的组件类名是 CSS Module 内容哈希（形如 `._8HJdBW_group`），
		 * 上游每次构建都会变。社区皮肤均采用同一策略：
		 * 「主题只能用 data-* 属性选择器，不能依赖宿主类名」。
		 *
		 * 这里用 MutationObserver 只做「加属性」这一件事，且带短路与节流，
		 * 不改动任何元素结构、不注入任何 DOM 节点、不监听业务事件。
		 */
		function markHostSurfaces(doc) {
		  if (typeof doc === 'undefined' || doc === null || doc.body == null) return () => {}

		  const ALIASES = [
		    ['[data-conversation-scroll]', 'data-nailong-conversation'],
		    ['[data-composer-card]', 'data-nailong-composer'],
		    ['[data-phase="hero"]', 'data-nailong-hero-phase'],
		  ]

		  const mark = (root) => {
		    try {
		      for (const [selector, attr] of ALIASES) {
		        const nodes = root.querySelectorAll?.(selector) ?? []
		        for (const node of nodes) {
		          if (!node.hasAttribute(attr)) node.setAttribute(attr, '')
		        }
		      }
		    } catch {
		      /* 单个节点失败不影响其余 */
		    }
		  }

		  mark(doc.body)

		  let observer = null
		  try {
		    if (typeof MutationObserver !== 'undefined') {
		      let frame = 0
		      observer = new MutationObserver(() => {
		        if (frame !== 0) return
		        frame = requestAnimationFrame(() => {
		          frame = 0
		          mark(doc.body)
		        })
		      })
		      observer.observe(doc.body, { childList: true, subtree: true })
		    }
		  } catch {
		    observer = null
		  }

		  return () => {
		    try { observer?.disconnect() } catch { /* ignore */ }
		  }
		}

		/**
		 * 客户端服务注入声明。
		 *
		 * `slots` 是唯一硬依赖：组件层的品牌/首页/设置页注册都需要它。
		 * 即使宿主没有 slots 服务，`apply` 也会安全跳过组件层，CSS 皮肤照常工作。
		 */
		const inject = ['slots']

		/**
		 * 构造真正的 `apply(ctx)`。
		 *
		 * 为什么不直接导出 `apply(ctx, requireFn)`：Loader 只会用 `apply(ctx)` 调用，
		 * 第二个参数恒为 undefined，组件层会被永久静默禁用。因此必须把工厂的 require
		 * 在**闭包**里捕获，导出签名严格为 1 参。
		 */
		function createApply(requireFn) {
		  return function apply(ctx) {
		    const undo = []
		    try {
		      const effect = typeof ctx?.effect === 'function' ? ctx.effect.bind(ctx) : null
		      const register = (fn, label) => {
		        if (effect !== null) {
		          try {
		            effect(fn, label)
		            return
		          } catch {
		            /* 某些宿主版本 effect 签名不同，退回直接调用 */
		          }
		        }
		        undo.push(fn())
		      }

		      const doc = globalThis.document

		      // 第一层：纯 CSS 皮肤，永远尝试，不依赖任何服务。
		      register(() => installSkin(doc), `${PLUGIN_ID}: skin stylesheet`)
		      register(() => markHostSurfaces(doc), `${PLUGIN_ID}: surface markers`)

		      // 第二层：React 组件。整体可选，失败只影响这一层。
		      try {
		        const components = probeComponents(requireFn)
		        if (components !== null) {
		          register(
		            () => components.installComponentStyles(doc),
		            `${PLUGIN_ID}: component stylesheet`,
		          )
		          components.registerSlots(ctx)
		        }
		      } catch (error) {
		        try { console.warn(`[${PLUGIN_ID}] 组件层降级：`, error && error.message) } catch { /* ignore */ }
		      }
		    } catch (error) {
		      try {
		        console.warn(`[${PLUGIN_ID}] 皮肤初始化失败，已安全降级：`, error && error.message)
		      } catch { /* console 不可用时彻底静默 */ }
		      for (const dispose of undo) {
		        try { dispose?.() } catch { /* ignore */ }
		      }
		    }
		  }
		}


		return { createApply, inject, installSkin, markHostSurfaces, probeComponents, PLUGIN_ID };
		})();

		// Loader 只用 apply(ctx) 一个参数调用，所以工厂的 require 必须在
		// 闭包里捕获后交给 createApply —— 否则组件层永远拿不到 React 种子模块。
		Object.assign(exports, __MOD_CLIENT__);
		exports.apply = __MOD_CLIENT__.createApply(require);
		return module.exports;
	}
});
