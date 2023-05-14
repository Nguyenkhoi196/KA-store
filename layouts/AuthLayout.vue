<template>
  <div>
    <nuxt />

    <div
      class="fixed bottom-0 left-0 z-50 w-full h-16 bg-secondary border-t border-gray-200"
    >
      <ul class="grid h-full max-w-lg grid-cols-4 mx-auto text-2xl">
        <li class="nav-li">
          <nuxt-link class="nav-link" to="/market"
            ><span class="icon-menu">
              <fa :icon="['fas', 'chart-simple']" />
            </span>
          </nuxt-link>
        </li>
        <li class="nav-li">
          <nuxt-link class="nav-link" to="/update"
            ><span class="icon-menu">
              <fa :icon="['fas', 'file-invoice']" />
            </span>
          </nuxt-link>
        </li>
        <li class="nav-li">
          <nuxt-link class="nav-link" to="/warehouse"
            ><span class="icon-menu">
              <fa :icon="['fas', 'box-archive']" />
            </span>
          </nuxt-link>
        </li>
        <li class="nav-li">
          <nuxt-link class="nav-link" to="/profile"
            ><span class="icon-menu">
              <fa :icon="['fas', 'circle-user']" />
            </span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AuthLayout',
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components/_button.scss';

.nav-li {
  @apply list-none relative z-20 transition ease-in-out duration-200
  active:transform
  focus:text-primary focus:transform
  hover:-translate-y-1 hover:transform;
}

.nav-link {
  @apply flex justify-center items-center flex-col text-center h-full;
}

.icon-menu {
  @apply block text-tertiary;
}
</style>
