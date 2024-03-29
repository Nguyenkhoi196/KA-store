import { User } from '../../../types/User'

export interface userState {
  user: {
    data: User | null
    login: boolean
    token: string | null
    role: string | null
  }
}
