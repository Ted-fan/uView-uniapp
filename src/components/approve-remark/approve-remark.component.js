import Vue from 'vue';
import { approveApi, assignApi, getUserListApi } from './approve-remark.service';
export default Vue.extend({
	name: "ApproveRemark",
	props: {
		approvalId: { // 审批单id
			type: String,
			default: ''
		},
		detailIds: {
			type: Array,
			default: []
		},
		businessId: {
			type: String,
			default: ''
		},
		type: { // 审批类型 pass,reject
			type: String,
			default: ''
		},
		module: { // 区分模块
			type: String,
			default: ''
		}
	},
	data() {
		return {
			showDialog: true,
			editForm: {
				remark: ''
			}
		};
	},
	created() {
	},
	methods: {
		save(type) {
			let params = {
				objectId: this.approvalId,
				remark: this.editForm.remark,
				enumType: type,
				businessId: this.businessId
			}
			if (this.detailIds.length !== 0) {
				params.objectIds = this.detailIds
			}
			approveApi(params).then(res => {
				uni.$u.toast(res.message);
				uni.navigateBack()
				this.closeDialog();
			}).catch(() => {
			})
		},
		// 关闭dialog时需要告诉父组件隐藏弹窗
		closeDialog() {
			this.showDialog = false;
			this.$emit('close', true);
		}
	}
});
