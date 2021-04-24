<template>
  <div id="workSection" class="w-full relative pt-20">
    <div
      class="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 w-270 h-40 absolute top-0 left-0 -md:w-full"
    ></div>

    <div
      class="bg-gradient-to-l from-green-200 via-green-300 to-blue-500 w-3/5 h-40 absolute top-100 right-0 -xl:left-0 -md:w-full -md:top-200 -sm:top-150"
    ></div>
    <div
      class="bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500 w-80 h-250 absolute bottom-70 left-0 -xl:w-3/5 -xl:h-40 -md:w-full"
    ></div>
    <div
      class="bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 w-80 h-250 absolute bottom-0 right-0 -xl:w-3/5 -xl:h-40 -xl:bottom-180 -md:w-full -md:bottom-2/5"
    ></div>
    <div
      class="max-w-screen-xl mx-auto relative z-10 -xl:w-full -xl:px-4 -sm:h-auto -sm:pt-0"
    >
      <div class="w-full">
        <big-title title="Works"></big-title>
      </div>
      <div class="">
        <!-- CounterTopMasters -->
        <work-card
          type="Web Development"
          name="CounterTop Masters"
          url="https://www.countertopmasters.com/"
          phone
          tablet
          desktop
        >
          <template v-slot:bg-image>
            <div
              class="bg-gradient-to-r from-green-200 via-green-300 to-blue-500 w-11/12 h-100 mx-auto rounded-md transition duration-300 ease-in-out transform -sm:w-full -sm:h-60 group-hover:scale-105 group-hover:-rotate-2"
            ></div>
            <div
              class="bg-image-counter bg-cover bg-no-repeat w-11/12 h-100 center-x-y rounded-md bg-center -sm:bg-contain -sm:h-60"
            ></div>
          </template>
          <template v-slot:description>
            Company dedicated to the creation, modification and restoration of
            countertops that need a delicate care.
          </template>
          <template v-slot:built>
            <img
              src="../assets/logos/vue.svg"
              alt=""
              class="mr-4 filter-grayscale hover:filter-none -md:filter-none"
            />
            <img
              src="../assets/logos/element.svg"
              alt=""
              class="mr-4 filter-grayscale hover:filter-none -md:filter-none"
            />
            <img
              src="../assets/logos/php.svg"
              alt=""
              class="filter-grayscale hover:filter-none -md:filter-none"
            />
          </template>
        </work-card>

        <!-- Knives MX -->
        <!-- flex-row-reverse-->
        <work-card
          type="Web redesing"
          name="Knives México"
          url="https://www.knives.mx/"
          phone
          tablet
          desktop
        >
          <template v-slot:bg-image>
            <div
              class="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 w-11/12 h-100 mx-auto rounded-md transition duration-300 ease-in-out transform -sm:w-full -sm:h-60 group-hover:scale-105 group-hover:rotate-2"
            ></div>
            <div
              class="bg-image-knives bg-cover bg-no-repeat w-11/12 h-100 center-x-y top-0 left-0 rounded-md bg-center -sm:bg-contain -sm:h-60"
            ></div>
          </template>
          <template v-slot:description>
            Knives Mexico is a company dedicated to the sale and distribution of
            knives and pocket knives for all types of use.
          </template>
          <template v-slot:built>
            <img
              src="../assets/logos/html.svg"
              alt=""
              class="mr-4 filter-grayscale hover:filter-none -md:filter-none"
            />
            <img
              src="../assets/logos/sass.svg"
              alt=""
              class="filter-grayscale hover:filter-none -md:filter-none"
            />
          </template>
        </work-card>
        <!--Codigo Fuente Software -->
        <work-card
          type="Web Development"
          name="Código Fuente Software"
          url="https://codigofuentesoftware.com.mx/"
          tablet
          desktop
        >
          <template v-slot:bg-image>
            <div
              class="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-11/12 h-100 mx-auto rounded-md transition duration-300 ease-in-out transform -sm:w-full -sm:h-60 group-hover:scale-105 group-hover:-rotate-2"
            ></div>
            <div
              class="bg-image-cf bg-cover bg-no-repeat w-11/12 h-100 center-x-y top-0 left-0 rounded-md bg-center -sm:bg-contain -sm:h-60"
            ></div>
          </template>
          <template v-slot:description>
            Company focused on the development of software for the medical
            industry in the United States which provides the best digital tools
            for administrative processes.
          </template>
          <template v-slot:built>
            <img
              src="../assets/logos/vue.svg"
              alt=""
              class="mr-4 filter-grayscale hover:filter-none -md:filter-none"
            />
            <img
              src="../assets/logos/element.svg"
              alt=""
              class="mr-4 filter-grayscale hover:filter-none -md:filter-none"
            />
            <img
              src="../assets/logos/php.svg"
              alt=""
              class="filter-grayscale hover:filter-none -md:filter-none"
            />
          </template>
        </work-card>

        <!--Note -->
        <div
          class="w-full flex items-center justify-between rounded-md shadow-xl ml-8 py-6 px-4 filter-drop -lg:m-0 -sm:flex-col -sm:px-4"
        >
          <div class="w-1/2 -sm:w-full -sm:pl-0">
            <p
              class="font-bold leading-snug text-md text-gray-800 text-opacity-50"
            >
              Most of my work has been for private companies, but I have worked
              on some projects on my own with people who have believed in me,
              these are some of them. If you want to know more about what I do
              or can do, I invite you to visit
              <router-link
                to="playground"
                class="bg-gradient-to-b from-orange-500 to-yellow-300 bg-clip-text text-transparent"
              >
                my playground
              </router-link>
              or send me an email and we'll gladly talk.
            </p>
          </div>
          <div class="w-1/2 flex items-center -sm:w-full">
            <button
              class="mx-auto py-4 w-1/2 flex items-center justify-center bg-transparent -sm:w-full"
            >
              <span
                class="bg-gradient-to-r from-light-blue-400 to-blue-500 text-4xl font-bold bg-clip-text text-transparent"
              >
                Be the next
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-image-counter {
  background-image: url("/works/ctm-1-min.png");
}
.bg-image-knives {
  background-image: url("/works/knives-1-min.png");
}
.bg-image-cf {
  background-image: url("/works/cf-1-min.png");
}
</style>
