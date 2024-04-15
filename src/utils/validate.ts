/**
 * @param {string} path
 * @returns {Boolean}
 */

// 用于检查给定的路径（path）是否是外部链接
export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

export function getCode(herf: string) {
  const regex = /code=([^&]*)/;
  const match = herf.match(regex);
  return match[1];
}
