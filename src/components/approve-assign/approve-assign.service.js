import config from '@/config'
import request from '@/utils/request';

// 获取用户列表
export function getUserListApi(postBody) {
  return request({
    url: config.SYS_SERVICE + '/api/sysUser/getUserDropDownInfoList',
    method: 'post',
    data: postBody
  });
}

// 指派
export function assignApi(postBody) {
  return request({
    url: config.BUS_SERVICE + '/api/busApproval/assign',
    method: 'post',
    data: postBody
  });
}
