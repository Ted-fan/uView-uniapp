
const getApproveCount = {
  pendingApprovalCount: 10,
  approvalHistoryCount: 32
}

const approveList = [
  {
    objectId: '1q2w3e4r',
    title: '合同审批',
    status: '处理中',
    applyTitle: '测试合同申请单A',
    createTime: '2023-01-09',
    enmuType: '10'
  },
  {
    objectId: '1q2w3e4r3232',
    title: '合同审批',
    status: '审批通过',
    applyTitle: '测试合同申请单B',
    createTime: '2023-01-09',
    enmuType: '20'
  }
]

const approveDetail = {
  approvalNo: 'Test1234567890',
  createUserName: 'Ted',
  structNames: '开发部',
  applyAbstract: '测试合同申请单',
  nextUserName: 'Admin',
  status: '处理中',
  contractInfo: {
    contractName: '测试合同',
    contractCategory: '正式合同',
    contractAmount: 10000,
    contractStartDate: '2022-01-01',
    contractEndDate: '20223-12-01',
    ourPosition: '甲方',
    cooperationPosition: '乙方',
    supplierName: '测试供应商',
    supplierPrimaryContactName: '测试人员',
    supplierPrimaryContactPhone: '15977887412'
  },
  approvalStep: [
    { objectId: '1', name: '审批员1', remark: 'text1', enumApprovalStatus: '20', status: '已通过', datetime: '2022-01-03' },
    { objectId: '2', name: '审批员2', remark: 'text2', enumApprovalStatus: '10', status: '待审批', datetime: '2022-02-03' }
  ]
}

module.exports = [
  // approve count
  {
    url: '/api/approve/getApproveCount',
    type: 'post',
    response: config => {
      return {
        code: '200',
        data: getApproveCount,
        message: '登录成功'
      }
    }
  },

  // approve list
  {
    url: '/api/approve/getApproveList',
    type: 'post',
    response: config => {
      return {
        code: '200',
        data: approveList,
        dataCount: approveList.length,
        message: '登录成功'
      }
    }
  },
  // approve detail
  {
    url: '/api/approve/getApproveDetail',
    type: 'post',
    response: config => {
      return {
        code: '200',
        data: approveDetail,
        message: '登录成功'
      }
    }
  }
]
