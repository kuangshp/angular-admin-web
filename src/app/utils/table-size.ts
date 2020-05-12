import { TemplateRef } from '@angular/core'

/*
 * @Description:计算表格中表头和内容不对齐的
 * @Author: 水痕
 * @Github: https://github.com/kuangshp
 * @Email: 332904234@qq.com
 * @Company:
 * @Date: 2020-05-11 09:42:47
 * @LastEditors: 水痕
 * @LastEditTime: 2020-05-11 10:25:41
 * @FilePath: /approlval-web/src/app/utils/table-size.ts
 */

export const getNumberOf20px = (str: any) => {
  return 1 * str.slice(0, str.indexOf('px'));
}
export const calcTableScrollYOfModal = (tableDivRef: TemplateRef<any>): string => {
  const tableDiv = tableDivRef['nativeElement'];
  console.log(tableDiv, tableDiv.offsetWidth)
  const tableDivHeight = tableDiv.offsetHeight;
  const tableDivPaddingTop = getNumberOf20px(window.getComputedStyle(tableDiv).paddingTop);
  const tableDivPaddingBottom = getNumberOf20px(window.getComputedStyle(tableDiv).paddingBottom);
  const theadHeight = tableDiv.getElementsByClassName('ant-table-thead')[0].offsetHeight;
  const btnWrapHeight = tableDiv.getElementsByClassName('list-outer-btn-wrap')[0].offsetHeight;
  const nzTable = tableDiv.getElementsByClassName('list-outer-btn-wrap')[0];
  const nzTableMarginTop = getNumberOf20px(window.getComputedStyle(nzTable).marginTop);
  const footerHeight = 54;
  const suffixHeight = 20;
  return (tableDivHeight - tableDivPaddingTop - tableDivPaddingBottom - btnWrapHeight - nzTableMarginTop - theadHeight - footerHeight - suffixHeight) + 'px';
  // return (tableDivHeight - tableDivPaddingTop - tableDivPaddingBottom - theadHeight - footerHeight - suffixHeight) + 'px';
}
