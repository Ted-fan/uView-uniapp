import config from '@/config'
import request from '@/utils/request';

// 更新组织
export function updateCompanyIdApi(companyId) {
  return request({
    url: config.SYS_SERVICE + '/account/updateCompanyId',
    method: 'get',
    params: {
      companyId: companyId
    }
  });
}
 