import Vue from 'vue';
import { getToken } from '../../../utils/auth'
import { getMessageListApi, setMessageReadApi } from './message-list.service'
export default Vue.extend({
	name: "loginPage",
	data() {
		return {
			messageData: {},
			data: []
		};
	},
	onReady() {
		this.getMessageList()
	},
	onShow() {
		this.data = []
		this.getMessageList()
	},
	onLoad(data) {
		this.messageData = JSON.parse(data.message)
	},
	methods: {
		// 获取消息列表
		getMessageList() {
			let businessTable = this.messageData.businessTable
			let data = {
				businessTable
			}
			getMessageListApi(data).then(res => {
				this.data = res.data
			})
		},

		// 设置消息已读
		setMessageRead(messageId) {
			const params = {
				messageId: messageId
			}
			setMessageReadApi(params).then(res => { })
		},

		// 跳转到详情页
		moveToDetailPage(data) {
			this.setMessageRead(data.objectId)
			switch (data.businessTable) {
				case 'bus_contract_general': uni.navigateTo({ url: `/pages/approve/income-contract/income-contract?approvalId=${data.businessId}` }); break
				case 'bus_cost_contract_general': uni.navigateTo({ url: `/pages/approve/cost-contract/cost-contract?approvalId=${data.businessId}` }); break
				case "bus_project_estimate_cost": uni.navigateTo({ url: `/pages/approve/estimate-cost/estimate-cost?approvalId=${data.businessId}` }); break
				case "bus_quotation_manage": uni.navigateTo({ url: `/pages/approve/quotation/quotation?approvalId=${data.businessId}` }); break
			}
		},
		// 返回
		back() {
			uni.navigateBack()
		}

	}
});

