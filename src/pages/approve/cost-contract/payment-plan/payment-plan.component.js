import Vue from 'vue';
export default Vue.extend({
	name: "payment-plan",
	data() {
		return {
			otherInfo: {}, // 其他信息
			contractPaymentCollectionPlanList: [], // 付款计划信息
			totalAmount: "付款含税/未税金额（元）:", // 付款含税/未税金额
		};
	},
	onReady() { },
	onLoad(option) {
		//使用 decodeURIComponent() 函数可对 encodeURIComponent() 函数编码的 URI 进行解码。
		let initData = JSON.parse(decodeURIComponent(option.data));
		this.otherInfo = initData;
		this.contractPaymentCollectionPlanList = initData.contractPaymentCollectionPlanList;
		this.getTotalAmount();
	},
	methods: {
		// 付款含税/未税金额赋值
		getTotalAmount() {
			// 付款含税金额
			let incomeTaxIncludingTotalAmount = 0;
			// 付款未税金额
			let incomeTaxExcludingTotalAmount = this.otherInfo.incomeTaxExcludingTotalAmount;
			if (this.otherInfo.enumContractCategory == '10') {
				incomeTaxIncludingTotalAmount = this.otherInfo.estimateIncomeTaxIncludingTotalAmount;
				incomeTaxExcludingTotalAmount = this.otherInfo.incomeTaxExcludingTotalAmount;
			} else {
				incomeTaxIncludingTotalAmount = this.otherInfo.incomeTaxIncludingTotalAmount;
			}
			// 如果incomeTaxIncludingTotalAmount为空
			if (!incomeTaxIncludingTotalAmount || !incomeTaxExcludingTotalAmount) {
				incomeTaxIncludingTotalAmount = "--";
				incomeTaxExcludingTotalAmount = '--';
			}
			// 显示
			this.totalAmount += incomeTaxIncludingTotalAmount + ' / ' + incomeTaxExcludingTotalAmount;
		}
	}
});
