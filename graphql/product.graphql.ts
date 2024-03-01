import gql from 'graphql-tag'

export const GET_ALL_PRODUCTS = gql`
query($id:ID!){
  product(id: $id){
    data{
      id
    }
  }
}
`
