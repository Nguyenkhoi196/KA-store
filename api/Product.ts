// import axios from 'axios'
import { axios } from '../plugins/axios'
const qs = require('qs')

export async function addProduct(payload: any) {
  const result = await axios.post('/api/products', payload)
  return result
}

export async function productDetails(id: any) {
  const result = await axios.get(`/api/products/${id}`)
  if (result.status === 200) {
    return result.data
  } else return result
}

export async function findProducts(payload: any) {
  const query = qs.stringify(payload)
  const result = await axios.get(`/api/products?${query}`)

  if (result.status === 200) {
    return result.data
  } else return result
}
