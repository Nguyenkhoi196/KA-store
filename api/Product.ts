import axios from 'axios'
const resource = 'http://localhost:1337/api/products'
const qs = require('qs')
export async function getAllProducts() {
  const result = await axios.get(`${resource}`)
  if (result.status === 200) {
    return result.data
  } else return result
}
export async function addProduct(payload: any) {
  const result = await axios.post(`${resource}`, payload)
  return result
}

export async function findProducts(payload: any) {
  const query = qs.stringify(payload)
  const result = await axios.get(`${resource}?${query}`)
  if (result.status === 200) {
    return result.data
  } else return result
}
