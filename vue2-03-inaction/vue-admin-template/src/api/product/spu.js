import request from '@/utils/request8510'

// 获取Spu列表数据的结构
export const reqSpuList = ({ page, limit, category3Id }) => request({
  url: `/admin/product/${page}/${limit}`,
  method: 'get', params: { category3Id }
});

// 通过spuId获取Spu信息
export const reqSpuInfo = (spuId) => request({
  url: `/admin/product/getSpuById/${spuId}`,
  method: 'get'
})

// 获取品牌的信息
export const reqTradeMarkList = () => request({
  url: `/admin/product/baseTrademark/getTrademarkList`,
  method: 'get'
})

// 获取Spu图片列表
export const reqSpuImageList = (spuId) => request({
  url: `/admin/product/spuImageList/${spuId}`,
  method: 'get'
})

// 获取平台全部销售属性---整个平台销售属性，最多3个数下
export const reqSaleAttrList = () => request({
  url: `/admin/product/baseSaleAttrList`,
  method: 'get'
})

// 修改Spu||添加Spu：对于修改或者添加，携带给服务器的参数大致一样，唯一的区别是参数是否携带id
export const reqAddOrUpdateSpu = (spuInfo) => {
  // 修改
  if (spuInfo.id) {
    return request({
      url: `/admin/product/updateSpuInfo`,
      method: 'post', data: spuInfo
    })
  }
  // 添加
  else {
    return request({
      url: `/admin/product/saveSpuInfo`,
      method: 'post', data: spuInfo
    })
  }
};

// 删除Spu
export const reqDeleteSpu = (spuId) => request({
  url: `/admin/product/deleteSpu/${spuId}`,
  method: 'delete'
})

// 获取销售属性的数据
export const reqSpuSaleAttrList = (spuId) => request({
  url: `/admin/product/spuSaleAttrList/${spuId}`,
  method: 'get'
});

// 获取平台属性的数据
export const reqAttrInfoList = ({ category1Id, category2Id, category3Id }) => request({
  url: `/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`,
  method: 'get'
});

// 获取平台属性的数据
export const reqSaveSkuInfo = (skuInfo) => request({
  url: `/admin/product/saveSkuInfo`,
  method: 'post', data: skuInfo
});

// 获取Sku列表数据的接口
export const reqSkuList = (spuId) => request({
  url: `/admin/product/findBySpuId/${spuId}`,
  method: 'get'
});