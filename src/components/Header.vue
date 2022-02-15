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
      </div>
    </div>
  </div>
</template>
