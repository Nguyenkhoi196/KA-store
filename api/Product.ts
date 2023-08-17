import axios from 'axios'
const resource = 'http://localhost:1337/api/products'
export async function getAllProducts() {
  const result = await axios.get(`${resource}`)
  return result.data
}
export async function addProduct(payload: any) {
  const result = await axios.post(`${resource}`, payload)
  return result
}
