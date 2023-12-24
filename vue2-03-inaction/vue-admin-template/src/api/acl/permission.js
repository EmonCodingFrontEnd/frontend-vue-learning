import request from '@/utils/request8170'

export default {
  // 获取权限（菜单/功能）列表
  getPermissionList() {
    return request({
      url: '/admin/acl/permission',
      method: 'get'
    });
  },
  // 删除一个权限项
  removePermission(id) {
    return request({
      url: `/admin/acl/permission/remove/${id}`,
      method: 'delete'
    })
  },
  // 保存一个权限项
  addPermission(permission) {
    return request({
      url: `/admin/acl/permission/save`,
      method: 'post',
      data: permission
    })
  },
  // 更新一个权限项
  updatePermission(permission) {
    return request({
      url: `/admin/acl/permission/update`,
      method: 'put',
      data: permission
    })
  },
}