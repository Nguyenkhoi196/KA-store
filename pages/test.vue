<template>
  <div>
    <button @click="setToken">click</button>
    <button @click="getProduct()" class="p-2 bg-yellow-400">getProduct</button>
    <button @click="login()" class="p-2 bg-slate-600">login</button>
  </div>
</template>

<script>
import { LOGIN } from '../graphql/user.graphql'
import { GET_ALL_PRODUCTS } from '../graphql/product.graphql'
import { getProduct } from '~/api/Product';
export default {
  data() {
    return {
      token: null
    };
  },
  methods: {
    setToken() {
      if (process.client) {
        const tokenStr = localStorage.getItem('token');
        this.token = tokenStr ? JSON.parse(tokenStr) : null;
        console.log(this.token);
        this.$apolloHelpers.onLogin(this.token);
      }
      console.log(client);
    },
    async login() {
      try {
        console.log('login');
        await this.$apollo.mutate({
          mutation: LOGIN,
          variables: { identifier: 'nguyenkhoi196@gmail.com', password: 'phuongxinh' }
        }).then(({ data }) => {
          this.$apolloHelpers.onLogin(data.login.jwt);
        })
      } catch (error) {

      }
    },
    async getProduct() {
      try {
        console.log('get');
        await this.$apollo.query({
          query: GET_ALL_PRODUCTS,
          variables: { id: 1 }
        }).then(({ data }) => {
          console.log(data);
        })
      } catch (error) {

      }
    }
  }
};
</script>

<style scoped></style>
