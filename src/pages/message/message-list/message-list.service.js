import config from '@/config'
import request from '@/utils/request';

// 获取消息列表
export function getMessageListApi(data) {
  return request({
    url: config.SYS_SERVICE + '/api/sysMessage/getMessageListByGroup',
    method: 'post',
    data: data
  });
}

// 设置已读
export function setMessageReadApi(data) {
  return request({
    url: config.SYS_SERVICE + '/api/sysReadMessage/create',
    method: 'post',
    data: data
  });
}