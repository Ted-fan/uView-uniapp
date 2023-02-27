import Vue from 'vue';
import { getMessageGroupingApi } from './message.service';
import { getToken } from '../../utils/auth'
export default Vue.extend({
	name: "messagePage",
	data() {
		return {
			iconList: [
				{ iconUrl: '/static/images/icon/icon1.png' },
				{ iconUrl: '/static/images/icon/icon2.png' },
				{ iconUrl: '/static/images/icon/icon3.png' },
				{ iconUrl: '/static/images/icon/icon1.png' }
			],
			list: []
		};
	},
	onReady() {
		this.getMessageGrouping()
	},
	onShow() {
		this.getMessageGrouping()
		uni.removeStorageSync('approveType')

	},
	methods: {
		// 跳转消息列表
		moveToMessageListpage(message) {
			uni.navigateTo({ url: `/pages/message/message-list/message-list?message=${JSON.stringify(message)}` })
		},

		// 获取消息分组
		getMessageGrouping() {
			let token = getToken()
			getMessageGroupingApi({ token: token }).then(res => {
				this.list = res.data
				this.list.map((res, index) => {
					return res.iconUrl = this.iconList[index].iconUrl
				})
			})
		}
	}
});
