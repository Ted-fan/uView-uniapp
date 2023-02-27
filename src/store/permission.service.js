import request from '@/utils/request';
import config from '@/config'

// 登录
export function loginApi(data) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data
  })
}

// 获取用户信息
export function getUserInfoApi(token) {
  let url = '/api/user/info';
  return request({
    url: url,
    method: 'get',
    params: { token }
  });
}

// 获取组织角色列表
export function getStructListApi(objectId) {
  let url = config.SYS_SERVICE + '/api/sysStructRole/getUserStructList';
  return request({
    url: url,
    method: 'get',
    params: { objectId }
  });
}


