// import axios from 'axios'
import { axios } from '../plugins/axios'
const qs = require('qs')

export async function addProduct(payload: object) {
  const result = await axios.post('/api/products', payload)
  return result
}

export async function getProduct(id: string) {
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

export async function deleteProduct(id: string) {
  const result = await axios.delete(`/api/products/${id}`)
  if (result.status === 200) {
    return result
  } else return result
}

export async function updateProduct(id: string, payload: object) {
  const result = await axios.put(`/api/products/${id}`, payload)
  if (result.status === 200) {
    return result
  } else return result
}
