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
            <span class="text-menu"> test </span>
          </nuxt-link>
        </li>
        <li class="nav-li">
          <nuxt-link class="nav-link" to="/update"
            ><span class="icon-menu">
              <fa :icon="['fas', 'file-invoice']" />
            </span>
            <span class="text-menu"> test </span>
          </nuxt-link>
        </li>
        <li class="nav-li">
          <nuxt-link class="nav-link" to="/warehouse"
            ><span class="icon-menu">
              <fa :icon="['fas', 'box-archive']" />
            </span>
            <span class="text-menu"> test </span>
          </nuxt-link>
        </li>
        <li class="nav-li">
          <nuxt-link class="nav-link" to="/profile"
            ><span class="icon-menu">
              <fa :icon="['fas', 'circle-user']" />
            </span>
            <span class="text-menu"> test </span>
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

<style>
@import '../assets/scss/components/_button.scss';

.nav-li {
  @apply list-none relative z-20
  active:transform translate-y-7 text-primary;
}

.nav-link {
  @apply relative flex justify-center items-center flex-col text-center;
}

.icon-menu {
  @apply relative block transition text-tertiary hover:-translate-y-7 transform;
}

.text-menu {
  @apply absolute bg-secondary text-primary opacity-0 active:opacity-100 px-2 py-7 font-normal rounded-lg tracking-wide text-center;
}
</style>
