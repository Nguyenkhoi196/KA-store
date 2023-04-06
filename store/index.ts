import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from "firebase/auth"
// import { user } from './modules/user'
import { Router } from '@nuxtjs/router'
// import { router } from '@/router'

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
    SET_LOGOUT(state: any) {
      state.user.login = false;
      state.user.data = null;
    }
  },
  actions: {
    signup(context: any, {email, password, displayName, url = null}: {email:string, password:string, displayName: string ,url:any}) {
      return new Promise((resolve, reject) => {
        auth.createUserWithEmailAndPassword(auth.getAuth(), email, password)
          .then((data) => {
            context.commit('SET_LOGIN', data.user)
            const user: any = auth.getAuth().currentUser;
            console.log(user);
            if (user) {
              auth.updateProfile(user, {
                  displayName
              });
          }
          if (url) {
              Router.push(url)
          }
            resolve(user);
          })
          .catch((error) => {
            console.log('FIREBASE ERROR:',error.message)
            reject(error)
          })
      })
    },

    async logout(context: any) {
      await auth.signOut(auth.getAuth())
      context.commit('SET_LOGOUT', null)
    },

    login(context: any, {email, password, url = null}: {email:string, password:string ,url: any}) {
      return new Promise((resolve, reject) => {
        auth.signInWithEmailAndPassword(auth.getAuth(), email, password)
        .then((data) => {
            context.commit('SET_LOGIN', data.user);
            const user: any = auth.getAuth().currentUser;
            console.log(user);
            if (url) {
              Router.push(url)
          }
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