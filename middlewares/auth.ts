// import { useRouter } from '@nuxtjs/composition-api';
// import { store } from "~/store";
// const router = useRouter();
// router.beforeEach((to, from, next) => {
// to and from are both route objects. must call `next`.
//   if(!store.getters.user.data()) {
//       next('/login');
//   }
//   else{
//     next();
//   }
// })
import { Context } from '@nuxt/types'
// import { store } from '../store'

export default function ({ store, redirect }: Context) {
  if (!store.getters.user.login) {
    console.log('1')
    return redirect('/login')
  }
}
