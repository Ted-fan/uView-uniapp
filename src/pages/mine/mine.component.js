import Vue from 'vue';
import {
	getUserInfo,
	removeUserInfo,
	removeUserStructs,
	removeOrganization,
	removeToken,
	getUserStructs,
	getOrganization,
	setOrganization
} from '@/utils/auth';
import { updateCompanyIdApi } from './mine.service';
export default Vue.extend({
	name: "loginPage",
	data() {
		return {
			src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
			userInfo: getUserInfo(),
			userOrganization: getOrganization(),
			userStructs: getUserStructs(),
			showStructPopup: false
		};
	},
	onReady() {
	},
	onShow(){
		uni.removeStorageSync('approveType')

	},
	methods: {
		// 打开组织弹窗
		openStructPopup() {
			this.showStructPopup = true
		},
		// 选择切换组织
		selectOrganization(row) {
			if (row.companyId !== this.userOrganization.companyId) {
				updateCompanyIdApi(row.companyId).then(async res => {
					if (res.code === '200') {
						await this.$store.dispatch('getUserInfo', this.userInfo.objectId);
						this.userOrganization = row
						setOrganization(row)
						this.$tab.reLaunch(`/pages/home/home`)
					}
				})
			}
		},
		// 关闭切换组织弹窗
		closeStructPopup() {
			this.showStructPopup = false
		},
		// 退出登录
		logOut() {
			removeUserInfo()
			removeUserStructs()
			removeOrganization()
			removeToken()
			uni.navigateTo({ url: '/pages/login/login' })
		},
	}
});
