import request from '@/utils/request8170'

export default {
  // 获取角色列表（带搜索）
  getPageList(page, limit, searchObj) {
    return request({
      url: `/admin/acl/role/${page}/${limit}`,
      method: 'get',
      params: searchObj // url查询字符串或表单键值对
    });
  },
  // 获取某个角色
  getById(id) {
    return request({
      url: `/admin/acl/role/get/${id}`,
      method: 'get',
    });
  },
  // 保存一个新角色
  save(role) {
    return request({
      url: `/admin/acl/role/save`,
      method: 'post',
      data: role
    });
  },
  // 更新一个角色
  update(role) {
    return request({
      url: `/admin/acl/role/update`,
      method: 'put',
      data: role
    });
  },
}