import axios from 'axios'
function tokenHandler(config: any) {
  if (process.client) {
    const tokenStr = localStorage.getItem('token')
    const token: string = tokenStr ? JSON.parse(tokenStr) : ''
    config.headers.common.Authorization = `Bearer ${token}`
  }
  return config
}

export default () => {
  axios.interceptors.request.use(
    (config) => tokenHandler(config),
    function (error) {
      return Promise.reject(error)
    }
  )
}
