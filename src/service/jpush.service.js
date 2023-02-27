import config from '@/config'
import { getUserInfo } from '../utils/auth';
import request from '@/utils/request';

var jpushModule = uni.requireNativePlugin("JG-JPush");

export async function initJPush() {
    const rid = await getJPushRegistrationId();
    await bindJPush();
    const jpush = {
        userId: getUserInfo().objectId,
        rid:rid,
        alias: getUserInfo().objectId,
        tag: getUserInfo().objectId
    };
    saveJPush(jpush);
}

// 获取极光推送注册Id
function getJPushRegistrationId() {
    return new Promise((resolve, reject) => {
        jpushModule.getRegistrationID(res => {
            if (res.registerID) {
                uni.setStorageSync(config.userJPushID, res.registerID)
                resolve(res.registerID)
            }
        })
    });
}

// 绑定极光推送,设置别名
function bindJPush() {
    return new Promise((resolve, reject) => {
        let alias = {
            'alias': getUserInfo().objectId,
            'sequence': 1
        }
        jpushModule.setAlias(alias)
		resolve()
    });
}

// 保存极光推送信息
function saveJPush(postBody) {
	return request({
        url: config.SYS_SERVICE + '/api/sysUserJpush/create',
        method: 'post',
        data: postBody
    });
}