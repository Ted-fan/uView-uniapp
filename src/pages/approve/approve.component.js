import Vue from 'vue';
import { getApproveListApi } from './approve.service';

export default Vue.extend({
	name: "approvePage",
	data() {
		return {
			data: [], // 列表数据
			pageNum: 1, // 页码
			recordNum: 6, // 分页数
			// 分段器
			tabsList: [{ name: '待审批' }, { name: '审批历史' }],
			current: 0, // 分段器初始化时默认选中的选项索引值
			isShow: false // 其他筛选下拉框是否打开
		};
	},
	onReady() {
		this.getDataList('10')
	},
	onShow() {
	},
	//下拉触底刷新
	onReachBottom() {
		// alert(1)
		this.pageNum++
		if (this.current == 0) {
			this.getDataList('10');
		} else {
			this.getDataList('20');
		}
	},
	//刷新生命周期
	onPullDownRefresh() {
		this.reload()
	},
	methods: {
		// 获取数据列表
		getDataList(enumType) {
			const params = {
				enumType: enumType
			}
			getApproveListApi(params).then(res => {
				console.log(res)
				if (this.data.length < res.dataCount) {
					res.data.forEach(v => {
						this.data.push(v)
					});
				}
				uni.stopPullDownRefresh();
			})
		},

		// 切换分段器
		sectionChange(index) {
			this.current = index;
			this.pageNum = 1;
			this.data = [];
			if (index == 0) {
				this.getDataList('10');
			} else {
				this.getDataList('20');
			}
		},

		// 刷新
		async reload() {
			this.pageNum = 1
			this.data = []
			if (this.current == 0) {
				this.getDataList('10');
			} else {
				this.getDataList('20');
			}
		},

		// 跳转至合同详情页
		goToDetailsPage(approvalId) {
			uni.navigateTo({ url: `/pages/approve/cost-contract/cost-contract?approvalId=${approvalId}` });
		}
	}
});
