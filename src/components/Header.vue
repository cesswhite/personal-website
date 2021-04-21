<template>
  <div class="w-full sticky top-2 z-20 -sm:top-0">
    <div
      class="max-w-screen-xl mx-auto flex items-center h-20 filter-drop px-4 rounded-full -xl:w-full -sm:rounded-none"
    >
      <div class="w-1/2">
        <Logo />
      </div>
      <div class="w-1/2 flex items-center justify-end -lg:hidden">
        <a href="#aboutSection" v-smooth-scroll class="w-1/4">
          <button
            class="cursor-pointer py-3 w-full font-bold text-xl rounded-full bg-transparent border-none hover:bg-gray-800 hover:text-gray-50"
          >
            About
          </button>
        </a>
        <a href="#workSection" v-smooth-scroll class="w-1/4">
          <button
            class="cursor-pointer py-3 w-full font-bold text-xl rounded-full bg-transparent border-none hover:bg-gray-800 hover:text-gray-50"
          >
            Work
          </button>
        </a>
        <a href="#contactSection" v-smooth-scroll class="w-1/4">
          <button
            class="cursor-pointer py-3 w-full font-bold text-xl rounded-full bg-transparent border-none hover:bg-gray-800 hover:text-gray-50"
          >
            Contact
          </button>
        </a>

        <a href="#workSection" v-smooth-scroll class="w-1/4">
          <button
            class="cursor-pointer py-3 w-full font-bold text-xl rounded-full bg-gray-800 text-gray-50 border-none hover:bg-gray-700 ml-1"
          >
            Playground
          </button>
        </a>
      </div>
      <div class="w-1/2 flex items-center text-right hidden -lg:block">
        <button class="p-3 bg-transparent border-none">
          <svg
            class="w-10 h-10"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
a {
  font-s
}
</style>
