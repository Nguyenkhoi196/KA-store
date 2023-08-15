// import axios from 'axios'
const resource = 'http://localhost:1337/api/products'
export default ($axios: any) => ({
  all() {
    return $axios.get(`${resource}`)
  },
})
