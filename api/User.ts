import { axios } from '~/plugins/axios'
const qs = require('qs')

export async function login(payload: object) {
  return await axios.post('api/auth/local', payload)
}

export async function signup(payload: object) {
  return await axios.post('api/auth/local/register', payload)
}

export async function getUserDetails(payload: object) {
  const query = qs.stringify(payload)
  return await axios.get(`/api/users/me?${query}`)
}
export async function getRoleDetails(id: number) {
  return await axios.get(`/api/users-permissions/roles/${id}`)
}
