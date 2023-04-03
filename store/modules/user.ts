export default {
  state: {
    user :{
      data: null,
      login: false,
    }
  },
  mutations: {
    SET_LOGIN(state: any, value: any) {
      state.user.login = true;
      state.user.data = value;
    }
  },
  actions: {

  },
  getters: {
    user(state: any) {
      return state.user
    }
  }
}
