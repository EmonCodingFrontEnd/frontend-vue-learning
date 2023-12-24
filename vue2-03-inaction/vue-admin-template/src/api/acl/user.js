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
  // 添加用户
  add(user) {
    return request({
      url: `/admin/acl/user/save`,
      method: 'post',
      data: user
    });
  },
  // 更新用户
  update(user) {
    return request({
      url: `/admin/acl/user/update`,
      method: 'put',
      data: user
    });
  },
  // 删除用户
  removeById(userId) {
    return request({
      url: `/admin/acl/user/remove/${userId}`,
      method: 'delete',
    });
  },
  // 批量删除用户
  removeUsers(idList) {
    return request({
      url: `/admin/acl/user/batchRemove`,
      method: 'delete',
      data: idList
    });
  },
  // 获取角色信息
  getRoles(userId) {
    return request({
      url: `/admin/acl/user/toAssign/${userId}`,
      method: 'get',
    });
  },
  // 为用户分配角色
  assignRoles(userId, roleIds) {
    return request({
      url: `/admin/acl/user/doAssign`,
      method: 'post',
      params: { userId, roleId: roleIds }
    });
  }
}