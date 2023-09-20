import axios from 'axios'
function tokenHandler(config: any) {
  if (process.client) {
    const tokenStr = localStorage.getItem('token')
    if (tokenStr) {
      const token: string = tokenStr ? JSON.parse(tokenStr) : ''
      config.headers.common.Authorization = `Bearer ${token}`
    }
  }
  return config
}

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:1337'
      : 'https://khoianh-strapi.onrender.com',
})

api.interceptors.request.use(
  (config) => tokenHandler(config),
  (error) => Promise.reject(error)
)

export { api as axios }
