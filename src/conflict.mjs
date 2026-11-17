/**
 * 皮肤冲突自检。
 *
 * ── 为什么需要 ────────────────────────────────────────────────────────
 * 所有全站换肤插件都覆盖同一批 `--dsw-alias-*` / `--dsw-static-*` 令牌。
 * 两个同时启用时，后加载者覆盖先加载者，界面会出现**混色**：例如甲的主色
 * 配乙的底色。用户很难自己诊断 —— 看起来只是「皮肤不好看」，实际是配置错误。
 *
 * 真实案例：本机 profile 曾同时启用 dsh-kimi-ui 与 dsh-wechat-ui。
 *
 * ── 做法 ──────────────────────────────────────────────────────────────
 * 每个皮肤在 `<html>` 上打 `data-dsh-<name>-skin` 标记（已有机制）。
 * 本模块扫描所有已知的同类标记；若发现**除自己以外**还有别的皮肤激活，
 * 就在控制台输出一条醒目的诊断，说明会混色并给出修复命令。
 *
 * 只做诊断，不擅自停用别人的插件（那会越权）。
 * 全程 try/catch，任何异常都静默降级 —— 绝不影响皮肤本身。
 */

/**
 * 已知的同类全站皮肤标记。新增皮肤时把标记加进来即可。
 * 用「标记」而不是包名，因为检测发生在浏览器 DOM 层，看不到 profile 配置。
 */
export const PEER_SKIN_ATTRIBUTES = Object.freeze([
  'data-dsh-doubao-skin',
  'data-dsh-kimi-skin',
  'data-dsh-nailong-skin',
  'data-dsh-wechat-skin',
  'data-dsh-zcode-skin',
])

/**
 * 检测冲突并返回诊断结果（纯函数，便于测试）。
 *
 * @param {string} ownAttribute 本插件自己的标记名。
 * @param {(name: string) => string | null} getAttribute 读取 <html> 属性的函数。
 * @returns {{ conflicts: string[], own: string | null }} 冲突列表与自身版本。
 */
export function detectSkinConflicts(ownAttribute, getAttribute) {
  const conflicts = []
  let own = null
  try {
    for (const attr of PEER_SKIN_ATTRIBUTES) {
      const value = getAttribute(attr)
      if (value === null || value === undefined) continue
      if (attr === ownAttribute) own = value
      else conflicts.push(attr)
    }
  } catch {
    /* 读取失败就当作无冲突 */
  }
  return { conflicts, own }
}

/**
 * 检测并输出诊断。
 *
 * @param {Document} doc
 * @param {string} ownAttribute 本插件自己的标记名（如 data-dsh-nailong-skin）。
 * @param {string} pluginId 插件包名，用于日志前缀。
 * @returns {() => void} 空卸载函数（本模块不持有资源）。
 */
export function installConflictCheck(doc, ownAttribute, pluginId) {
  try {
    if (doc === null || doc === undefined || doc.documentElement == null) return () => {}
    const root = doc.documentElement
    const read = (name) => root.getAttribute(name)
    const { conflicts, own } = detectSkinConflicts(ownAttribute, read)
    if (conflicts.length > 0) {
      const list = conflicts.map((a) => a.replace('data-dsh-', '').replace('-skin', '')).join(', ')
      // 用 %c 让这条诊断在 DevTools 里醒目，但不用 throw —— 不能影响宿主。
      try {
        console.warn(
          `[${pluginId}] ⚠ 检测到 ${conflicts.length} 个其他全站皮肤同时启用：${list}（本皮肤 ${own ?? '未知版本'}）\n` +
            `多个皮肤都覆盖 --dsw-* 令牌，会互相覆盖导致混色。请只保留一个：\n` +
            `  dsh plugin --profile <your-profile> disable <其他皮肤包名>\n` +
            `然后重启 DSH Web 并硬刷新浏览器。`,
        )
      } catch {
        /* console 不可用就静默 */
      }
    }
  } catch {
    /* 任何异常都不影响皮肤 */
  }
  return () => {}
}
