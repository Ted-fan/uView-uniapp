import Vue from 'vue';
import ApproveAssign from '@/components/approve-assign/approve-assign'
import ApproveRemark from '@/components/approve-remark/approve-remark'
export default Vue.extend({
	name: "AuditBar",
	components: { ApproveAssign, ApproveRemark },
	props: {
		approvalId: { // 审批单id
			type: String,
			default: ''
		},
		businessId: { // 审批业务id
			type: String,
			default: ''
		}
	},
	data() {
		return {
			showAssignPopup: false, // 指派弹窗
			showRemarkPopup: false, // 审批弹窗
			auditType: '' // 审批类型
		};
	},
	onReady() {
	},
	methods: {
		// 打开指派弹窗
		openAssignPopup() {
			this.showAssignPopup = true
		},

		// 关闭指派弹窗
		closeAssignPopup() {
			this.showAssignPopup = false
		},

		// 打开审批弹窗
		openAuditPopup(type) {
			this.auditType = type
			this.showRemarkPopup = true
		},

		// 关闭审批弹窗
		closeAuditPopup() {
			this.showRemarkPopup = false
		}
	}
});
