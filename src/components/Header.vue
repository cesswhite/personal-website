<template>
  <div class="bg-gray-50/95 border-b-2 border-gray-100 w-full top-0 z-20 fixed">
    <div
      class="flex mx-auto w-screen-lg py-2 items-center justify-between -lg:w-full -lg:px-4"
    >
      <Logo />
      <div class="flex w-1/2 items-center justify-end -lg:hidden">
        <a
          rel="noopener noreferrer"
          aria-label="About"
          href="#aboutSection"
          v-smooth-scroll
          class="font-semibold text-base mr-4 text-gray-800 inline hover:text-gray-900 hover:underline"
        >
          About
        </a>
        <a
          rel="noopener noreferrer"
          aria-label="Works"
          href="#workSection"
          v-smooth-scroll
          class="font-semibold text-base mr-4 text-gray-800 inline hover:text-gray-900 hover:underline"
        >
          Works
        </a>
        <a
          rel="noopener noreferrer"
          aria-label="Contact"
          href="#contactSection"
          v-smooth-scroll
          class="font-semibold text-base text-gray-800 inline hover:text-gray-900 hover:underline"
        >
          Contact
        </a>
      </div>
    </div>
  </div>
</template>
