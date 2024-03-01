export default (context: any) => {
  return {
    // httpEndpoint: `${process.env.NODE_ENV === 'development' ? process.env.DEV_STRAPI_URL : process.env.PROD_STRAPI_URL} + 'graphql `,
    httpEndpoint: "http://localhost:1337/graphql",
    getAuth: () => {
      console.log('abc');
    },
  }
}
