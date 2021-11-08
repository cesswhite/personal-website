<template>
  <div class="w-full top-0 z-20 filter-drop sticky -sm:top-0">
    <div class="flex mx-auto h-20 w-screen-xl items-center -xl:w-full -xl:px-4">
      <div class="w-1/2">
        <Logo />
      </div>
      <div class="flex w-1/2 items-center justify-end -lg:hidden">
        <a
          href="#aboutSection"
          v-smooth-scroll
          class="font-bold text-xl text-gray-800 w-1/4 hover:underline"
        >
          About
          <!-- <button
            class="
              bg-transparent
              border-none
              rounded-full
              cursor-pointer
              font-bold
              text-xl
              w-full
              py-3
              hover:bg-gray-800 hover:text-gray-50
            "
          >
            About
          </button> -->
        </a>
        <a
          href="#workSection"
          v-smooth-scroll
          class="font-bold text-xl text-gray-800 w-1/4 hover:underline"
        >
          Works
        </a>
        <a
          href="#contactSection"
          v-smooth-scroll
          class="font-bold text-xl text-gray-800 w-1/4 hover:underline"
        >
          Contact
        </a>

        <!-- <a href="#workSection" v-smooth-scroll class="w-1/4">
          <button
            class="
              border-none
              rounded-full
              cursor-pointer
              font-bold
              bg-gray-800
              text-xl
              ml-1
              w-full
              py-3
              text-gray-50
              hover:bg-gray-700
            "
          >
            Playground
          </button>
        </a> -->
      </div>
      <!-- <div class="flex text-right w-1/2 items-center hidden -lg:block">
        <button class="bg-transparent border-none p-3">
          <svg
            class="h-10 w-10"
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
      </div> -->
    </div>
  </div>
</template>
