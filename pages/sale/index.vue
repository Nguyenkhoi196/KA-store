<template>
  <div>
    <div class="fixed w-screen">
      <section id="cart-header" class=" bg-secondary">
        <div class="container flex justify-between">
          <div id="header-left" class="flex">
            <div id="search-box"
              class="max-w-xl py-2 min-w-max mr-4 text-secondary rounded relative grow flex-wrap items-stretch flex">
              <span class="absolute self-center left-4 z-10">
                <fa icon="magnifying-glass" />
              </span>
              <vue-autosuggest v-model="query" :suggestions="suggestions" :get-suggestion-value="getSuggestionValue"
                :input-props="inputProps" :component-attr-class-autosuggest-results-container="'relative w-full'"
                :component-attr-class-autosuggest-results="'suggest-list top-10 '" @input="fetchResults"
                @selected="onSelected">
                <template #default="{ suggestion }">
                  <div class="cursor-pointer hover:bg-emerald-100 p-2 py-3 rounded">
                    <div class="flex justify-between text-black px-2">
                      <div class="flex flex-col gap-1">
                        <span class="text-lg">
                          {{ suggestion.item.name }}
                        </span>
                        <span class="text-sm text-gray-800">
                          Tồn: {{ suggestion.item.inventory }}
                        </span>
                      </div>
                      <span class="text-lg text-secondaryDark">
                        {{ suggestion.item.price }} <sup>đ</sup>
                      </span>
                    </div>
                  </div>
                </template>
              </vue-autosuggest>
            </div>
            <div id="tab-cart" class="flex flex-col justify-end">
              <ul id="default-tab" class="flex flex-wrap items-end text-sm font-medium text-center"
                data-tabs-toggle="#card-body" data-tabs-active-classes="text-purple-600" role="tablist">
                <li class="me-2" role="presentation">
                  <button id="profile-tab"
                    class="button-tab inline-block p-4 text-white aria-selected:rounded-t-lg aria-selected:bg-gray-50  aria-selected:text-black "
                    data-tabs-target="#tab-1" type="button" role="tab" aria-controls="tab-1" aria-selected="true">
                    Hóa đơn 1
                  </button>
                </li>
                <li class="me-2" role="presentation">
                  <button id="dashboard-tab"
                    class="button-tab inline-block p-4 text-white aria-selected:rounded-t-lg aria-selected:bg-gray-50  aria-selected:text-black"
                    data-tabs-target="#tab-2" type="button" role="tab" aria-controls="tab-2" aria-selected="false">
                    Hóa đơn 2
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div id="header-right" class="max-w-sm grow-0 self-center pr-4">
            <ul id="menu-cart" class="icon-list flex gap-2">
              <li class="text-primary flex p-2">
                <button data-popover-target="bag" type="button">

                  <fa icon="bag-shopping" />
                </button>
              </li>

              <li class="text-primary flex p-2">
                <button data-popover-target="return" type="button">

                  <fa icon="rotate-left" />
                </button>
              </li>
              <li class="text-primary flex p-2">
                <button data-popover-target="sync" type="button">

                  <fa icon="arrows-rotate" />
                </button>
              </li>

              <li class="text-primary flex p-2">
                <button data-popover-target="print" type="button">

                  <fa icon="print" />
                </button>
              </li>
              <!-- <span class="self-center">{{ user.username }}</span> -->
              <li class="text-primary flex p-2 ml-4" data-dropdown-toggle="dropdown-menu" data-dropdown-trigger="click"
                data-dropdown-placement="bottom-end">
                <fa icon="ellipsis-vertical" />
              </li>
              <div id="dropdown-menu" class="hidden shadow-xl text-sm z-10 rounded-lg">
                <ul class="py-2">
                  <nuxt-link to="/manage/market" class="cursor-pointer flex items-center gap-1 px-3 py-1">
                    <fa icon="box" />
                    <span class="pl-3">Quản lý</span>
                  </nuxt-link>
                  <li class="cursor-pointer flex items-center gap-1 px-3 py-1">
                    <fa icon="arrow-right-from-bracket" />
                    <span class="pl-3">Đăng xuất</span>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </section>
      <section id="card-body" class="container mx-auto">
        <div class="col-left">
          <div>
            <div id="tab-1" class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" role="tabpanel"
              aria-labelledby="tab-1">
              <p class="text-sm text-gray-500 dark:text-gray-400">test-tab 1</p>
            </div>
            <div id="tab-2" class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" role="tabpanel"
              aria-labelledby="tab-2">
              <p class="text-sm text-gray-500 dark:text-gray-400">test tab 2</p>
            </div>
          </div>
          <div id="note">note</div>
        </div>
        <div class="col-right"></div>
      </section>
    </div>

    <!-- popover -->
    <div data-popover id="bag" role="tooltip"
      class="absolute z-10 invisible inline-block w-max p-3 text-sm text-black transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0">
      Xử lý đặt hàng
    </div>
    <div data-popover id="return" role="tooltip"
      class="absolute z-10 invisible inline-block w-max p-3 text-sm text-black transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0">
      Xử lý trả hàng
    </div>
    <div data-popover id="sync" role="tooltip"
      class="absolute z-10 invisible inline-block w-max p-3 text-sm text-black transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0">
      Đồng bộ dữ liệu
    </div>
    <div data-popover id="print" role="tooltip"
      class="absolute z-10 invisible inline-block w-max p-3 text-sm text-black transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0">
      Thiết lập in
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VueAutosuggest } from 'vue-autosuggest'
import { findProducts } from '~/api/Product'
import { Product } from '~/types/Product'
const query = ref<string>('')
const timeout = ref<any>(null)
const debounce = 50
type Suggestions = {
  data: Product[]
}
const suggestions = ref<Suggestions[]>([])
const inputProps = {
  id: 'autosuggest__input',
  placholder: 'Nhập mặt hàng',
  class:
    'flex-auto min-w-[384px] border-[1px] border-solid border-black relative float-left pl-10 mb-0 z-[2] focus:outline-dotted focus:shadow-inner focus:ring-none bg-white rounded-lg',
}
const selected = ref<Product>()
const fetchResults = () => {
  clearTimeout(timeout.value)
  timeout.value = setTimeout(async () => {
    try {
      suggestions.value = []
      const res = await findProducts({ pagination: { pageSize: 100 } })
      const filteredData = filteredOptions(res.data.data, query.value)
      suggestions.value.push({ data: filteredData })
    } catch (error) { }
  }, debounce)
}

const filteredOptions = (data: Product[], text: string) => {
  return data
    .filter((item: Product) => {
      return item.name.toLowerCase().includes(text.toLowerCase())
    })
    .sort()
}

const getSuggestionValue = (suggestion) => {
  return suggestion.item.name
}

const onSelected = (item: { item: Product }) => {
  selected.value = item.item
}
</script>

<style scoped lang="scss"></style>
