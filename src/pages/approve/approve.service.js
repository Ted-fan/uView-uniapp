import request from '@/utils/request';

// 获取审批数据
export function getApproveListApi(postBody) {
  return request({
    url: '/api/approve/getApproveList',
    method: 'post',
    data: postBody
  });
}
