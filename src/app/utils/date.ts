import moment from 'moment';
/**
 * @param dateNum 时间
 * @param isDue 是否显示时分秒
 * @return:
 * @Description: 格式化日期
 * @Author: 水痕
 * @LastEditors: 水痕
 * @Date: 2019-07-31 15:27:39
 */
export const formatDate = (dateNum: number | Date, isDue = false): string => {
  if (isDue) {
    return moment(dateNum).format('YYYY-MM-DD');
  } else {
    return moment(dateNum).format('YYYY-MM-DD HH:mm:ss');
  }
};

/**
 * @Author: 水痕
 * @Date: 2020-02-20 20:51:54
 * @LastEditors: 水痕
 * @Description: 获取年月日时间
 * @param {type}
 * @return:
 */
export const getDay = (date: Date = new Date()): string => {
  return moment(date).format('YYYYMMDD');
};

/**
 * @Author: 水痕
 * @Date: 2020-02-20 21:47:49
 * @LastEditors: 水痕
 * @Description: 获取当前的时间鹾
 * @param {type}
 * @return:
 */
export const getTime = (): number => {
  return new Date().getTime();
};
