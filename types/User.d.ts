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

export interface userRole {
  id: number
  name: string
  description: string
  type: string
  createdAt: string
  updatedAt: string
}
