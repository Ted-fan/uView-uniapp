import request  from '@/utils/request'
import config from '@/config'

export function getMessageGroupingApi(token) {
  return request({
    url: config.SYS_SERVICE + '/api/sysMessage/getMessageGroup',
    method: 'post',
    data: token
  });
}

