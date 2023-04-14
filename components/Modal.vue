<template>
  <div>
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      class=" overflow-y-auto overflow-x-hidden  justify-center items-center w-full md:inset-0 h-modal "
    >
      <div class="relative p-4 w-full h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative p-2 bg-secondary/20 rounded-lg shadow-sm hover:shadow-none shadow-current">
          <!-- Modal header -->
          <div
            class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600"
          >
            <h3 class="text-lg font-semibold text-primary">Add Product</h3>
            <button
            type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-primary rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
              @click="setShowModal(false)"
            >
              <span class="">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <form action="#">
            <div class="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-primary"
                  >Name</label
                >
                <input
                  id="name"
                  type="text"
                  name="name"
                  class="bg-primary text-secondary text-sm rounded-lg focus:ring-primary block w-full p-2.5"
                  placeholder="Type product name"
                />
              </div>
              <div>
                <label
                  for="brand"
                  class="block mb-2 text-sm font-medium text-primary"
                  >Brand</label
                >
                <input
                  id="brand"
                  type="text"
                  name="brand"
                  class="bg-primary text-secondary text-sm rounded-lg focus:ring-primary block w-full p-2.5"
                  placeholder="Product brand"
                />
              </div>
              <div>
                <label
                  for="price"
                  class="block mb-2 text-sm font-medium text-primary"
                  >Price</label
                >
                <input
                  id="price"
                  type="number"
                  name="price"
                  class="bg-primary text-secondary text-sm rounded-lg focus:ring-primary block w-full p-2.5"
                  placeholder="$2999"
                />
              </div>
              <div>
                <label
                  for="category"
                  class="block mb-2 text-sm font-medium text-primary"
                  >Category</label
                >
                <select
                  id="category"
                  class="bg-primary border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Select category</option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-primary"
                  >Description</label
                >
                <textarea
                  id="description"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-secondary bg-primary rounded-lg border border-grasecondarycus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Write product description here"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Add new product
            </button>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: 'ModalProduct',
  props: ['setShowModal', 'isModalVisible'],
  setup(){
    // const closeModal =() => {
    //   isModalVisible
    // }
    return {
      // isModalVisible,
      // closeModal
    }
  }
}
</script>
