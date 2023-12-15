import request from '@/utils/request8510'

// 这个模块主要获取的是品牌管理的数据的模块
export const reqTradeMarkList = (page, limit) => request({
  url: `/admin/product/baseTrademark/${page}/${limit}`,
  method: "get"
})

// 添加或修改品牌
export const reqAddOrUpdateTradeMark = (tradeMark) => {
  // 如果带给服务器的数据携带ID---修改
  if (tradeMark.id) {
    return request({
      url: `/admin/product/baseTrademark/update`,
      method: "put",
      data: tradeMark
    })
  } else {
    // 新增品牌
    return request({
      url: `/admin/product/baseTrademark/save`,
      method: "post",
      data: tradeMark
    })
  }
}

// 删除品牌
export const reqRemoveTradeMark = (id) => request({
  url: `/admin/product/baseTrademark/remove/${id}`,
  method: "delete"
})