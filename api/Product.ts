import axios from 'axios'
const resource = 'http://localhost:1337/api/products'
export async function getAllProducts() {
  const result = await axios.get(`${resource}`).then((res) => {
    return res
  })
  return result.data
}
