<script>
import config from "./config"
import { getToken } from "@/utils/auth"
var jpushModule = uni.requireNativePlugin('JG-JPush');
export default {
  onLaunch: function () {
    this.initApp()
  },
  methods: {
    // 初始化应用
    initApp() {
      // 初始化应用配置
      this.initConfig()
	  //#ifdef APP-PLUS
      this.initJPush()
	  //#endif
      // 检查用户登录状态
      this.checkLogin()
    },
    initConfig() {
      this.globalData.config = config
    },
    checkLogin() {
      if (!getToken()) {
        this.$tab.reLaunch("/pages/login/login")
      }
    },
    initJPush() {
      //#ifdef APP-PLUS
      jpushModule.setLoggerEnable(true)
      jpushModule.initJPushService()
      jpushModule.addConnectEventListener((result) => {
        let connectEnable = result.connectEnable
      })

      // 通知事件回调
      let badgeNum = 0
      jpushModule.addNotificationListener((result) => {
        let notificationEventType = result.notificationEventType
        let messageID = result.messageID
        let title = result.title
        let content = result.content
        let extras = JSON.parse(result.extras['androidNotification extras key'])
        // 接收事件
        if (notificationEventType == "notificationArrived") {
            badgeNum += 1
            jpushModule.setBadge(badgeNum)
        }
        // 点击事件
        if (notificationEventType == "notificationOpened") {
          console.log(extras)
          badgeNum -= 1
          jpushModule.setBadge(badgeNum)
        }
      })
      //#endif
    }
  }
}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
	@import '@/static/scss/index.scss';
  	@import "@/static/scss/app.css";
</style>
