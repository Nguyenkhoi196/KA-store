import { Context } from '@nuxt/types'

export default function ({ redirect }: Context) {
  if (process.client) {
    if (!sessionStorage.getItem('token')) {
      return redirect('/login')
    }
  }
}
