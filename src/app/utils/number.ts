/**
 * 转换为印尼格式化钱
 * @param {*} number
 */
export const numberToCurrency = (number: string): string => {
  if (!/\d+/.test(number)) {
    return '';
  }
  return `Rp ${numberWithDelimiter(number)}`;
};

/**
 * 每三位加一个.
 * @param {*} number
 */
export const numberWithDelimiter = (number: string): string => {
  if (!/\d+/.test(number)) {
    return '';
  }
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};
