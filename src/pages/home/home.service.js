import request from '@/utils/request';

// 获取审批数量
export function getApprovalCountApi() {
  return request({
    url: '/api/approve/getApproveCount',
    method: 'post',
    data: {}
  });
}

