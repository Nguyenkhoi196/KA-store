
import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from "firebase/auth"

Vue.use(Vuex)

export const user = new Vuex.Store({
  state: {
    // isPending: ref<boolean>(false),
    // error: ref<any>(null),
    user :{
      data: null,
      login: false
    }
  },
  // getters: {
  //   user(state: any) {
  //     console.log(state.user.data)
  //     return state.user.data;
  //   }
  // },
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
      await auth.createUserWithEmailAndPassword(auth.getAuth(), email, password)
      .then((data) =>
      {
        context.commit('SET_LOGIN', data.user)
        const user: any = auth.getAuth().currentUser;
        console.log(user)
        return true;
      })
      .catch((error) =>{
        const message: string = error.message;
        const code: number = error.code;
        alert({message, code})
      })
    },

    async login(context: any, {email, password}: {email:string, password:string}) {
      await auth.signInWithEmailAndPassword(auth.getAuth(), email, password)
      .then((data: { user: any }) => {
          context.commit('SET_LOGIN', data.user);
        })
      .catch((error) =>{
        const message: string = error.message;
        const code: number = error.code;
        alert({message, code})
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
  // ở đây

});
