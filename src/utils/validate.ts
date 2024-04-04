/**
 * @param {string} path
 * @returns {Boolean}
 */

// 用于检查给定的路径（path）是否是外部链接
export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path);
}
