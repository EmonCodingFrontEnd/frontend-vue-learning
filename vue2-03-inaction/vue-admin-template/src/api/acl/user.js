import request from '@/utils/request8170'

export default {
  // 获取用户列表（带搜索）
  getPageList(page, limit, searchObj) {
    return request({
      url: `/admin/acl/user/${page}/${limit}`,
      method: 'get',
      params: searchObj // url查询字符串或表单键值对
    });
  },
}