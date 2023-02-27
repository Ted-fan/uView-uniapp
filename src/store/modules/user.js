import { getToken, setToken, removeToken } from '@/utils/auth'
import { setUserInfo, setUserStructs } from '../../utils/auth'
import { loginApi, getUserInfoApi, getStructListApi } from '../permission.service'


const user = {
  state: {
    token: getToken()
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },

  actions: {
    // 登录
    login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      const password = userInfo.password
      return new Promise((resolve, reject) => {
        loginApi({username, password}).then(res => {
          setToken(res.data.token)
          commit('SET_TOKEN', res.data.token)
          resolve(res.data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    getUserInfo({ commit }, token) {
      return new Promise((resolve, reject) => {
        getUserInfoApi(token).then(res => {
          setUserInfo(res.data);
          resolve(res.data);
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取组织列表
    getStructList() {
      return new Promise((resolve, reject) => {
        getStructListApi().then(res => {
          setUserStructs(res.data)
          resolve(res.data);
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 退出系统
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
