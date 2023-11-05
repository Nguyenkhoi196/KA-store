<template>
  <div>
    <div
      class="fixed bottom-0 left-0 z-50 w-full h-16 bg-secondary border-t border-gray-200"
    >
      <ul class="grid h-full max-w-lg grid-cols-4 mx-auto text-2xl">
        <li class="nav-li">
          <nuxt-link class="nav-link" to="/manage/market"
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

<script setup lang="ts"></script>

<style scoped></style>
