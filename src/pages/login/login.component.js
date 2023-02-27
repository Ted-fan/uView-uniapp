import Vue from 'vue';
import { getToken } from '@/utils/auth';
// import { userLoginApi } from '@/service/login.service'

export default Vue.extend({
	name: "loginPage",
	data() {
		return {
			editForm: {
				username: '',
				password: ''
			},
			rules: {
				username: {
					type: 'string',
					required: true,
					message: '用户名不能为空',
					trigger: ['change']
				}
			}
		};
	},
	onReady() {
		if (getToken()) {
			this.moveToHomePage()
		} else {
			// 如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则
			this.$refs.form.setRules(this.rules);
		}
	},
	methods: {
		// 登录
		userLogin() {
			this.$refs.form.validate().then(valid => {
				if (valid) {
					this.$store.dispatch('login', this.editForm).then(res => {
						this.$store.dispatch('getUserInfo', res.token).then(response => {
							this.moveToHomePage()
							uni.$u.toast('登录成功');
						})
					})
				}
			}).catch(errors => {
				uni.$u.toast('校验失败');
			});
		},

		// 跳转到首页
		moveToHomePage() {
			this.$tab.reLaunch('/pages/home/home')
		}
	}
});
