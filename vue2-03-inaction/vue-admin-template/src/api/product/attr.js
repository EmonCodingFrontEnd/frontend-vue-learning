// 平台属性管理模块请求文件
import request from '@/utils/request8510'

// 获取一级分类数据的接口
export const reqCategory1List = () => request({
  url: `/admin/product/getCategory1`,
  method: 'get'
});

// 获取二级分类数据的接口
export const reqCategory2List = (categoryId) => request({
  url: `/admin/product/getCategory2/${categoryId}`,
  method: 'get'
});

// 获取三级分类数据的接口
export const reqCategory3List = (categoryId) => request({
  url: `/admin/product/getCategory3/${categoryId}`,
  method: 'get'
});

// 获取平台属性接口
export const reqAttrList = ({ category1Id, category2Id, category3Id }) => request({
  url: `/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`,
  method: "get"
});

// 添加或者更新属性与属性值接口
export const reqAddOrUpdateAttr = (data) => request({
  url: `/admin/product/saveAttrInfo`,
  method: "post", data
})