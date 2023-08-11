import { Context } from '@nuxt/types'

export default function ({ redirect }: Context) {
  if (process.client) {
    if (!localStorage.getItem('token')) {
      return redirect('/login')
    }
  }
}
