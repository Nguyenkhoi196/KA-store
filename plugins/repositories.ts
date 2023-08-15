import { repositories } from '~/api'

export default (ctx: any, inject: any) => {
  const repository = {
    user: repositories(ctx.$axios).user,
  }
  console.log(repository.user.all())
  if (!process.client) {
    inject('repositories', repositories)
  }
}
