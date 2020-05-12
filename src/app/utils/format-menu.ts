import { ObjectType } from '@app/types';

/**
 * @Author: 水痕
 * @Date: 2020-01-26 11:41:01
 * @LastEditors: 水痕
 * @Description: 将数组对象转换为对象,以数组对象中id为key,值为当前数组对象的对象
 * @param {type}
 * @return:
 */
const formatHandler = (data: any[]) => {
  // 把当前数组边变成对象,以id为对象的key,值为当前数组的项
  return data.reduce((pre, cur) => {
    return { ...pre, [cur['id']]: cur }
  }, {});
}

/**
 * @Author: 水痕
 * @Date: 2020-01-26 11:41:45
 * @LastEditors: 水痕
 * @Description: 将数组转换为有children子节点的数组
 * @param data {Array<object>} 需要组装的数组
 * @param sortField {String} 需要根据排序的字段名
 * @return:
 */
export const formatMenus = (data: any[], sortField?: string): Array<ObjectType> => {
  const formatObj = formatHandler(data);
  const sortArray = sortField ? data.sort((a, b) => a[sortField] - b[sortField]) : data;
  return sortArray.reduce((arr, cur) => {
    // 迭代当前数据的parentId存在就取存在的,不存在就取值-1
    const parentId = cur.parentId ? cur.parentId : -1;
    const parent = formatObj[parentId];
    // 迭代当前项存在父节点就判断如果有children的时候就追加,不然就创建一个children;如果当前没父节点就直接追加
    if (parent) {
      parent.children ? parent.children.push(cur) : parent.children = [cur];
    } else {
      arr.push(cur)
    }
    return arr;
  }, []);


  // let rootMenus = [];
  // let map = {};
  // // data.sort((a, b) => a.parentId - b.parentId);
  // const sortArray = sortField ? data.sort((a, b) => a[sortField] - b[sortField]) : data;
  // sortArray.forEach(resource => {
  //   resource.children = [];
  //   map[resource.id] = resource;
  //   if (resource.parentId == -1) {
  //     rootMenus.push(resource);
  //   } else {
  //     if (map[resource.parentId]) {
  //       map[resource.parentId].children.push(resource)
  //     } else {
  //       throw new Error(`当前循环的数据parentId=${resource.parentId}有错误`);
  //     }
  //   }
  // })
  // return rootMenus;
}

