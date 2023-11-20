const getUserDetailsFromStorage = () => {
  if (process.client) {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  }
  return null
}

export default { getUserDetailsFromStorage }
