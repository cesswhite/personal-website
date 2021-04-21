<template>
  <div id="workSection" class="w-full pb-10">
    <div
      class="max-w-screen-xl mx-auto h-screen relative pt-30 -xl:w-full -xl:px-4 -sm:h-auto -sm:pt-10"
    >
      <div class="w-full">
        <h1 class="text-9xl -sm:text-8xl -sm:text-center mb-4">Works</h1>
      </div>
      <div class="">
        <!-- CounterTopMasters -->
        <div class="flex mb-10 -md:flex-col">
          <div class="group w-1/2 relative -md:w-full">
            <div
              class="bg-gradient-to-r from-green-200 via-green-300 to-blue-500 w-11/12 h-100 mx-auto rounded-md transition duration-300 ease-in-out transform -sm:w-full -sm:h-60 group-hover:scale-103 group-hover:-rotate-2"
            ></div>

            <div
              class="bg-image-counter bg-cover bg-no-repeat w-11/12 h-100 center-x-y top-0 left-0 rounded-md bg-center -sm:bg-contain -sm:h-60"
            ></div>
          </div>
          <div
            class="w-1/2 h-full flex flex-col items-stretch relative -md:w-full -sm:mt-4"
          >
            <span class="text-gray-800 text-opacity-30 font-bold italic text-lg"
              >Web Development</span
            >
            <h1 class="text-4xl mb-4">CounterTop Masters</h1>
            <p class="text-gray-800 text-opacity-40 font-bold text-xl mb-10">
              Countertop masters is a company dedicated to the restoration and
              creation of countertop for all types of places within your home.
            </p>
            <div class="w-full">
              <span class="text-gray-800 text-opacity-40 font-bold text-lg"
                >Built with
              </span>
              <span>🔥</span>
              <div class="flex justify-start">
                <span>VueJS</span> | <span>ElementUI</span> | <span>PHP</span>
              </div>
              <button
                class="w-full bg-gray-800 text-gray-50 rounded-md font-bold text-xl py-2"
              >
                Visit site
              </button>
            </div>
          </div>
        </div>
        <!-- Knives MX -->
        <!-- flex-row-reverse-->
        <div class="flex -md:flex-col">
          <div class="group w-1/2 relative -md:w-full">
            <div
              class="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 w-11/12 h-100 mx-auto rounded-md transition duration-300 ease-in-out transform -sm:w-full -sm:h-60 group-hover:scale-103 group-hover:rotate-2"
            ></div>
            <div
              class="bg-image-knives bg-cover bg-no-repeat w-11/12 h-100 center-x-y top-0 left-0 rounded-md bg-center -sm:bg-contain -sm:h-60"
            ></div>
          </div>
          <div class="w-1/2 h-full relative -md:w-full">
            <span class="text-gray-800 text-opacity-30 font-bold italic text-lg"
              >Web redesign</span
            >
            <h1 class="text-4xl mb-4">Knives México</h1>
            <p class="text-gray-800 text-opacity-40 font-bold text-xl mb-10">
              Knives Mexico is a company dedicated to the sale and distribution
              of knives and pocket knives for all types of use
            </p>

            <div class="w-full">
              <span class="text-gray-800 text-opacity-40 font-bold text-lg"
                >Built with
              </span>
              <span>🔥</span>
              <div class="flex justify-start">
                <span>VueJS</span> | <span>ElementUI</span> | <span>PHP</span>
              </div>
              <button
                class="w-full bg-gray-800 text-gray-50 rounded-md font-bold text-xl py-2"
              >
                Visit site
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- <div
        class="w-1/2 px-10 overflow-scroll -lg:w-full -lg:flex -lg:w-full -lg:h-auto -lg:overflow-y-hidden -lg:px-0 -lg:py-10"
      >
        <div
          v-for="n in 4"
          :key="n"
          :style="{
            backgroundImage: `url('/works/${nameFolder}-${n}-min.png')`,
          }"
          class="relative w-full h-100 bg-cover bg-no-repeat rounded-md mx-auto mb-4 -lg:mr-10 -lg:h-80 -lg:w-200 flex-none photo"
        ></div>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.bg-image-counter {
  background-image: url("../../public/works/ctm-1-min.png");
}
.bg-image-knives {
  background-image: url("../../public/works/knives-1-min.png");
}
</style>
