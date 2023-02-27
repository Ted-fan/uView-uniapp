import config from '@/config'
const TokenKey = config.userToken
const UserKey = config.userKey
const UserStructs = config.userStructs
const UserOrganization = config.userOrganization
// token管理
export function getToken() {
  return uni.getStorageSync(TokenKey)
}

export function setToken(token) {
  return uni.setStorageSync(TokenKey, token)
}

export function removeToken() {
  return uni.removeStorageSync(TokenKey)
}

// 用户信息管理
export function getUserInfo() {
  return uni.getStorageSync(UserKey)
}

export function setUserInfo(user) {
  return uni.setStorageSync(UserKey, user)
}

export function removeUserInfo() {
  return uni.removeStorageSync(UserKey)
}

// 组织列表
export function getUserStructs() {
  return uni.getStorageSync(UserStructs)
}

export function setUserStructs(structs) {
  return uni.setStorageSync(UserStructs, structs)
}

export function removeUserStructs() {
  return uni.removeStorageSync(UserStructs)
}

// 设置当前组织
export function getOrganization() {
  return uni.getStorageSync(UserOrganization)
}

export function setOrganization(organzation) {
  return uni.setStorageSync(UserOrganization, organzation)
}

export function removeOrganization() {
  return uni.removeStorageSync(UserOrganization)
}
