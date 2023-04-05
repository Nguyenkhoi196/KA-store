import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from "firebase/auth"
// import useRoute from '@nuxtjs/composition-api'
// import { user } from './modules/user'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    // isPending: ref<boolean>(false),
    // error: ref<any>(null),
    user :{
      data: null,
      login: false
    }
  },
  getters: {
    user(state: any) {
      return state.user.data;
    }
  },
  mutations: {
    SET_LOGIN(state: any, value: any) {
      state.user.login = true;
      state.user.data = value;
    },
    // SET_LOGOUT(state: any) {
    //   state.user.login = false;
    //   state.user.data = null;
    // }
  },
  actions: {
    async signup(context: any, {email, password}: {email:string, password:string}){
      console.log({email, password})
      const data = await auth.createUserWithEmailAndPassword(auth.getAuth(), email, password)
      console.log( 'skajnfj', data)
      try {
        context.commit('SET_LOGIN', data.user)
        const user: any = auth.getAuth().currentUser;
        console.log(user)
      } catch (error) {
        console.log(error)
      }
    },

    async login(context: any, {email, password}: {email:string, password:string}) {
      console.log({email, password})
      await auth.signInWithEmailAndPassword(auth.getAuth(), email, password)
      .then((data) => {
          context.commit('SET_LOGIN', data.user);
        })
      .catch((error) =>{
        console.log(error.message)
        if(!error.message){
          router.push('/profile')
        }
      })
      // .finally{
      //   isPending.value = false;
      // }
    },

    // async updateUser(context: any, {displayName, photoUrl}: {displayName:string, photoUrl:string}){
    //   const user: any = auth.getAuth().currentUser;
    //   await auth.updateProfile(user, {displayName: displayName, photoUrl: photoUrl})
    // }
  },
  modules: {
  }
})
