export interface User {
  userUid?: string
  name?: string
  displayName?: string
  imageUrl?: string
  email?: string
  password?: string
}
export interface UserAuth extends User {
  role?: string
}
