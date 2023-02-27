import Vue from 'vue';
import { getUserInfo } from '@/utils/auth';
import { getApprovalCountApi } from './home.service';
import { getOrganization } from '../../utils/auth';
import { initJPush } from '../../service/jpush.service';
export default Vue.extend({
    name: "homePage",
    data() {
        return {
            userInfo: getUserInfo(),
            userOrganization: getOrganization(),
            pendingApprovalCount: 0, // 待处理审批数
            approvalHistoryCount: 0, // 历史审批数
            items: [
                { icon: '/static/images/icon/icon1.png', title: '收入合同', bussinessTable: 'bus_contract_general' },
                { icon: '/static/images/icon/icon2.png', title: '成本合同', bussinessTable: 'bus_cost_contract_general' },
                { icon: '/static/images/icon/icon3.png', title: '预估成本', bussinessTable: 'bus_project_estimate_cost' },
                { icon: '/static/images/icon/icon4.png', title: '报价单据', bussinessTable: 'bus_quotation_manage' }
            ]
        };
    },
    onReady() {
        this.getApprovalCountApi()
        //#ifdef APP-PLUS
        initJPush()
        //#endif
    },
    onShow() {
        uni.removeStorageSync('approveType')

    },
    onPullDownRefresh() {
        this.getApprovalCountApi()
    },
    methods: {
        // 获取审批数据
        getApprovalCountApi() {
            getApprovalCountApi().then(res => {
                this.pendingApprovalCount = res.data.pendingApprovalCount
                this.approvalHistoryCount = res.data.approvalHistoryCount
                uni.stopPullDownRefresh();
            })
        },

        // 跳转页面
        moveToPage(index) {
            uni.setStorageSync('approveType', this.items[index].bussinessTable)
            this.$tab.reLaunch(`/pages/approve/approve`)
        }
    }
});
