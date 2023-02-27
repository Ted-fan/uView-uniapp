import config from '@/config'
import request from '@/utils/request';

// 指派
export function approveApi(postBody) {
  return request({
    url: config.BUS_SERVICE + '/api/busApproval/approve',
    method: 'post',
    data: postBody
  });
}