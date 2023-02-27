
import request from '@/utils/request';

// 获取成本合同审批详情
export function getApplyDetailApi(objectId) {
  let url = '/api/approve/getApproveDetail';
  return request({
    url: url,
    method: 'post',
    data: { objectId }
  });
}
