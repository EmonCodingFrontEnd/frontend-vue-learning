import request from '@/utils/request8510'

// 获取Sku列表数据
export const reqSkuList = (page, limit) => request({
  url: `/admin/product/list/${page}/${limit}`,
  method: "get"
})

// Sku上架
export const reqOnSale = (skuId) => request({
  url: `/admin/product/onSale/${skuId}`,
  method: "get"
})

// Sku下架
export const reqCancelSale = (skuId) => request({
  url: `/admin/product/cancelSale/${skuId}`,
  method: "get"
})

// Sku详情
export const reqSkuInfoById = (skuId) => request({
  url: `/admin/product/getSkuById/${skuId}`,
  method: "get"
})