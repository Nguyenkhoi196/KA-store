const getUserDetailsFromStorage = () => {
  if (process.client) {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  }
  return null
}
const getRoleFromStorage = () => {
  if (process.client) {
    const role = localStorage.getItem('role')
    return role ? JSON.parse(role) : null
  }
  return null
}

export default { getUserDetailsFromStorage, getRoleFromStorage }
