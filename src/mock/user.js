
const tokens = {
  admin: {
    token: 'admin-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
    struct: 'Develop'
  }
}

module.exports = [
  // user login
  {
    url: '/api/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]
      // mock error
      if (!token) {
        return {
          code: '500',
          data: '',
          message: '登录失败'
        }
      }

      return {
        code: '200',
        data: token,
        message: '登录成功'
      }
    }
  },

  // get user info
  {
    url: '/api/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: '500',
          data: '',
          message: '获取用户信息失败'
        }
      }

      return {
        code: '200',
        data: info,
        message: '获取用户信息成功'
      }
    }
  },

  // user logout
  {
    url: '/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 200,
        data: 'success'
      }
    }
  }
]
