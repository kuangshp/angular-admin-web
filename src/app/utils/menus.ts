import { cloneDeep } from 'lodash';

export interface IMenus {
  /**ID */
  id: number;
  /** 标题 */
  name: string;
  /**父节点ID */
  parentId: number;
  /**路径 */
  url: string;
  /**排序 */
  sort: number;
  /**小图标 */
  icon?: string | null;
  /**子节点*/
  children?: IMenus[];
}

type ObjectType = Record<string, any>;
/**
 * @Author: 水痕
 * @Date: 2021-04-05 16:09:38
 * @LastEditors: 水痕
 * @Description: 将数组转换为树结构
 * @param {*}
 * @return {*}
 */
export const getTreeList = (oldDataList: IMenus[], sortField: string = ''): IMenus[] => {
  if (!Array.isArray(oldDataList)) {
    throw new TypeError(`${oldDataList}不是数组`);
  }
  const dataList: IMenus[] = cloneDeep(oldDataList);
  // 第一次是将全部的permissionId作为对象的key重组成一个对象
  const formatObj: ObjectType = dataList.reduce((pre, cur) => {
    return { ...pre, [cur['id']]: cur };
  }, {});
  // 排序
  const sortArray = sortField
    ? dataList.sort((a: IMenus, b: IMenus) => a['sort'] - b['sort'])
    : dataList;
  const formatArray = sortArray.reduce((arr: IMenus[], cur: IMenus) => {
    const pid = cur.parentId ? cur.parentId : 0;
    const parent = formatObj[pid];
    if (parent) {
      parent.children ? parent.children.push(cur) : (parent.children = [cur]);
    } else {
      arr.push(cur);
    }
    return arr;
  }, []);
  return formatArray;
};
