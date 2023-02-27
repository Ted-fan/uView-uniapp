import Vue from 'vue';
import { assignApi, getUserListApi } from './approve-assign.service';
export default Vue.extend({
	name: "AuditBar",
	props: {
		approvalId: { // 审批单id
			type: String,
			default: ''
		},
		module: { // 模块
			type: String,
			default: ''
		},
		detailIds: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			showDialog: true,
			showUserPicker: false,
			options: {
				text: 'name',
				value: 'id'
			},
			editForm: {
				userObj: ''
			}, // 表单信息
			users: [], // 用户列表
		};
	},
	created() {
		this.getSysUser()
	},
	methods: {
		// 获取用户列表
		getSysUser() {
			getUserListApi({}).then(res => {
				this.users = res.data
			})
		},
		save() {
			let params = {
				objectId: this.approvalId,
				approvalAssignToUserId: this.editForm.userObj.id
			}
			if (this.detailIds.length !== 0) {
				params.objectIds = this.detailIds
			}
			assignApi(params).then(res => {
				uni.$u.toast(res.message);
				this.closeDialog();
				uni.navigateBack()
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
