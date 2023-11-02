// import axios from 'axios'
import { axios } from '../plugins/axios'
const qs = require('qs')

export async function addProduct(payload: object) {
  return await axios.post('/api/products', payload)
}

export async function getProduct(id: string, payload: object) {
  const query = qs.stringify(payload)
  return await axios.get(`/api/products/${id}?${query}`)
}

export async function findProducts(payload: any) {
  const query = qs.stringify(payload)
  return await axios.get(`/api/products?${query}`)
}

export async function getAllProducts() {
  return await axios.get('api/products')
}

export async function deleteProduct(id: string) {
  return await axios.delete(`/api/products/${id}`)
}

export async function updateProduct(id: string, payload: object) {
  return await axios.put(`/api/products/${id}`, payload)
}
