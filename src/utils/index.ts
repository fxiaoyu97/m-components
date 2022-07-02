/**
 * 驼峰命名转化成横杠链接
 * @param value 驼峰名称
 * @returns 横杠连接的名称
 */
export const toLine = (value: string) => {
  return value.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
}
