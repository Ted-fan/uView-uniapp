import Vue from 'vue';
// comonents
import AuditBar from "@/components/audit-bar/audit-bar";
import ApproveSteps from "../components/approve-steps/approve-steps";
// services
import { getApplyDetailApi, getCostContractDetailApi } from "./cost-contract.service";
// utils
import { downLoadFile } from '../../../service/file.service'
import { getUserInfo } from '../../../utils/auth';
export default Vue.extend({
	name: "cost-contract",
	components: { AuditBar, ApproveSteps },
	data() {
		return {
			tabsList: [
				{ name: '成本合同信息' },
				{ name: '其他信息' },
			],
			userInfo: getUserInfo(),
			current: 0, // 分段器初始化时默认选中的选项索引值
			approvalId: '', // 审批单Id
			details: {}, // 审批信息
			titleStyle: {
				'width': '150px'
			}
		};
	},
	onReady() {
		this.getApplyDetail();
	},
	onLoad(option) {
		// 接收传值objectId
		this.approvalId = option.approvalId;
	},
	methods: {
		// 切换分段器
		sectionChange(index) {
			this.current = index;
		},

		// 获取成本合同审批详情
		getApplyDetail() {
			getApplyDetailApi(this.approvalId).then(res => {
				this.details = res.data
				console.log(this.details)
			})
		},

		// 下载文件
		async downLoadFile(file) {
			downLoadFile(file)
		},

		// 跳转付款计划、标的物信息详情页
		moveToDetailsPage(type) {
			let otherInfo = this.otherInfo;
			//使用 encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
			if (type == 'pay') {
				uni.navigateTo({ url: `/pages/approve/cost-contract/payment-plan/payment-plan?data=${encodeURIComponent(JSON.stringify(otherInfo))}` });
			} else {
				let amountMoney = {
					materialTaxIncludingTotalAmount: otherInfo.materialTaxIncludingTotalAmount, // 含税
					materialTaxExcludingTotalAmount: otherInfo.materialTaxExcludingTotalAmount  // 未税
				};
				uni.navigateTo({ url: `/pages/approve/common-page/subject-matter-information/subject-matter-information?data=${encodeURIComponent(JSON.stringify(otherInfo.subjectMatterList))}&type=${type}&amountMoney=${encodeURIComponent(JSON.stringify(amountMoney))}` });
			}
		},
	}
});
