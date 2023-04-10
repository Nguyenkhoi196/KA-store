import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from "firebase/auth"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user :{
      data: null,
      login: false,
      token: ''
    }
  },

  getters: {
    user(state: any) {
      return state.user.data;
    },
    isAuthenticated(state) {
      console.log('kiểm tra stata.token',!!state.token);
      return !!state.token
    },
  },

  mutations: {
    SET_LOGIN(state: any, payload: any) {
      state.user.login = true;
      state.user.data = payload.value;
      state.user.token = payload.token;
    },
    SET_LOGOUT(state: any) {
      state.user.login = false;
      state.user.data = null;
      state.user.token = null;
    },
    SET_TOKEN(state: any, token: string) {
      state.token = token
      localStorage.setItem('token', token)
    },
    REMOVE_TOKEN(state: any, token: string) {
      state.token = null
      localStorage.removeItem(token)
    },
  },

  actions: {
    signup(context: any, {email, password}: {email:string, password:string, displayName: string }) {
      return new Promise((resolve, reject) => {
        auth.createUserWithEmailAndPassword(auth.getAuth(), email, password)
          .then((data) => {
            context.commit('SET_LOGIN', data.user)
            const user: any = auth.getAuth().currentUser;
          //   if (user) {
          //     auth.updateProfile(user, {
          //         displayName
          //     });
          // }
            resolve(user);
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    async logout(context: any) {
      await auth.signOut(auth.getAuth())
      context.commit('SET_LOGOUT', null)
    },

    login(context: any, {email, password}: {email:string, password:string}) {
      return new Promise((resolve, reject) => {
        auth.signInWithEmailAndPassword(auth.getAuth(), email, password)
        .then((data) => {
            data.user.getIdToken().then((token) => {
              localStorage.setItem('user', JSON.stringify(data.user.reloadUserInfo));
              localStorage.setItem('token', token)

              context.commit('SET_LOGIN', data.user)
              context.commit('SET_TOKEN', token)

              console.log(localStorage);
              // console.log('string',JSON.stringify(data.user));
              console.log('user', data.user.reloadUserInfo);
              console.log('luu token',token);

            })
            // context.commit('SET_LOGIN', data.user);
            const user: any = auth.getAuth().currentUser;
            // console.log(user);

            resolve(user)
          })
        .catch((error) =>{
          reject(error)
        })
      })
    },

    // async updateUser(context: any, {displayName, photoUrl}: {displayName:string, photoUrl:string}){
    //   await auth.updateProfile(auth.getAuth(), displayName: 'khoi', photoUrl:'logo.png');
    // }
  },

  modules: {
  }
})
