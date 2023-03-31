<template>
  <div class="flex flex-col justify-between gap-10">

    <!-- header -->
    <div class="row">
      <div class="container mx-auto">
        <div class="text-center">
          <div class="w-24 h-24 overflow-hidden mx-auto">

          </div>
          <div class="font-semibold font-mono text-2xl text-yellow mt3">
          </div>
          <p class="font-mono text-xs text-blue-600">nguyenkhoi196@gmail.com</p>
        </div>
      </div>
    </div>
    <!-- menu -->
    <div class="flex flex-col justify-between gap-5 mx-auto">
      <nuxt-link to="/weather" >
      <div class="container mx-auto">
        <div class="flex flex-row items-center justify-between text-yellow-600 gap-1">
              <h3 class="font-bold">Weather App</h3>
              <fa :icon="['fas', 'cloud']" />
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/todo">
        <div class="container mx-auto">
          <div class="flex flex-row items-center justify-between text-yellow-600 gap-1">
            <div class="col-span-1">
              <h3 class="font-bold">Todo App</h3>
            </div>
            <span>
              <fa :icon="['fas', 'calendar-check']" bounce />
             </span>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/chat">
        <div class="container mx-auto">
          <div class="flex flex-row items-center justify-between text-yellow-600 gap-1">
            <div class="col-span-1">
              <h3 class="font-bold">Chat app</h3>
            </div>
            <span>
              <fa :icon="['fas', 'comment']" />
            </span>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to='update'>
        <div class="container mx-auto">
          <div class="flex flex-row items-center justify-between text-yellow-600 gap-1">
            <div class="col-span-1">
              <h3 class="font-bold">Something will update</h3>
            </div>
            <span>
              <fa :icon="['fas', 'pen']" />
            </span>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
