import { axios } from '~/plugins/axios'

export async function getHomepage() {
  return await axios.get('/api/home-page?populate=deep,5')
}
