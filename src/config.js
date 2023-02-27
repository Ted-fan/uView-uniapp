// 应用全局配置
module.exports = {
  userKey: 'TAURUS_USER_KEY',
  userToken: 'TAURUS_USER_TOKEN',
  userStructs: 'TAURUS_USER_STRUCTS',
  userOrganization: 'TAURUS_USER_ORGANIZATION',
  userJPushID: 'TAURUS_USER_JPush_ID',
  // dev
  // baseUrl: 'http://zuul.dlanqi.com/',
  // fileUrl: 'http://dell.dlanqi.com:10002/',
  // SYS_SERVICE: 'dlanqi_taurus_sys_dev',
  // BUS_SERVICE: 'dlanqi_taurus_bus_dev',

  // sit
  // baseUrl: 'http://zuul.dlanqi.com/',
  // fileUrl: 'http://dell.dlanqi.com:10002/',
  // SYS_SERVICE:'dlanqi_taurus_sys_sit',
  // BUS_SERVICE:'dlanqi_taurus_bus_sit',

  // uat
  // baseUrl: 'http://zuul.dlanqi.com/',
  // fileUrl: 'http://dell.dlanqi.com:10002/',
  // SYS_SERVICE: 'dlanqi_taurus_sys_uat',
  // BUS_SERVICE: 'dlanqi_taurus_bus_uat',

  // // prod
  baseUrl: '',
  fileUrl: 'http://124.93.3.102:10002/',
  SYS_SERVICE:'http://124.93.3.102:11929',
  BUS_SERVICE:'http://124.93.3.102:11931',

  // 应用信息
  appInfo: {
    // 应用名称
    name: "辽通云",
    // 应用版本
    version: "1.0.0",
    // 应用logo
    logo: "/static/logo.png",
  }
}
