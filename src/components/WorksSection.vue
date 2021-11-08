<template>
  <div id="workSection" class="w-full pt-20 relative">
    <!-- <div
      class="
        bg-gradient-to-l
        from-green-200
        via-green-300
        to-blue-500
        h-40
        top-100
        right-0
        w-3/5
        absolute
        -sm:top-150
        -md:w-full -md:top-200
        -xl:left-0
      "
    ></div>
    <div
      class="
        bg-gradient-to-l
        from-pink-500
        via-red-500
        to-yellow-500
        h-250
        bottom-70
        left-0
        w-80
        absolute
        -md:w-full
        -xl:h-40 -xl:w-3/5
      "
    ></div>
    <div
      class="
        bg-gradient-to-r
        from-purple-200
        via-purple-400
        to-purple-800
        h-250
        right-0
        bottom-0
        w-80
        absolute
        -md:w-full -md:bottom-2/5
        -xl:h-40 -xl:bottom-180 -xl:w-3/5
      "
    ></div> -->
    <div
      class="
        mx-auto
        max-w-screen-xl
        z-10
        relative
        -sm:h-auto -sm:pt-0
        -xl:w-full -xl:px-4
      "
    >
      <div class="w-full">
        <big-title title="Works"></big-title>
      </div>
      <div class="grid gap-10 grid-cols-2 -md:grid-cols-1">
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
            <div class="bg-gray-300 h-140 mb-10 w-full"></div>
            <!-- <div
              class="
                bg-gradient-to-r
                rounded-md
                mx-auto
                from-green-200
                via-green-300
                to-blue-500
                h-100
                transform
                transition
                ease-in-out
                w-11/12
                duration-300
                -sm:h-60 -sm:w-full
                group-hover:scale-105 group-hover:-rotate-2
              "
            ></div>
            <div
              class="
                bg-image-counter bg-cover bg-no-repeat bg-center
                rounded-md
                h-100
                w-11/12
                center-x-y
                -sm:bg-contain -sm:h-60
              "
            ></div> -->
          </template>
          <template v-slot:description>
            Company dedicated to the creation, modification and restoration of
            countertops that need a delicate care.
          </template>
          <template v-slot:built>
            <img
              src="../assets/logos/vue.svg"
              alt=""
              class="mr-4 filter-grayscale -md:filter-none hover:filter-none"
            />
            <img
              src="../assets/logos/element.svg"
              alt=""
              class="mr-4 filter-grayscale -md:filter-none hover:filter-none"
            />
            <img
              src="../assets/logos/php.svg"
              alt=""
              class="filter-grayscale -md:filter-none hover:filter-none"
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
            <div class="bg-gray-300 h-140 mb-10 w-full"></div>
            <!-- <div
              class="
                bg-gradient-to-r
                rounded-md
                mx-auto
                from-pink-300
                via-purple-300
                to-indigo-400
                h-100
                transform
                transition
                ease-in-out
                w-11/12
                duration-300
                -sm:h-60 -sm:w-full
                group-hover:scale-105 group-hover:rotate-2
              "
            ></div>
            <div
              class="
                bg-image-knives bg-cover bg-no-repeat bg-center
                rounded-md
                h-100
                top-0
                left-0
                w-11/12
                center-x-y
                -sm:bg-contain -sm:h-60
              "
            ></div> -->
          </template>
          <template v-slot:description>
            Knives Mexico is a company dedicated to the sale and distribution of
            knives and pocket knives for all types of use.
          </template>
          <template v-slot:built>
            <img
              src="../assets/logos/html.svg"
              alt=""
              class="mr-4 filter-grayscale -md:filter-none hover:filter-none"
            />
            <img
              src="../assets/logos/sass.svg"
              alt=""
              class="filter-grayscale -md:filter-none hover:filter-none"
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
            <div class="bg-gray-300 h-140 mb-10 w-full"></div>
            <!-- <div
              class="
                bg-gradient-to-r
                rounded-md
                mx-auto
                from-pink-500
                via-red-500
                to-yellow-500
                h-100
                transform
                transition
                ease-in-out
                w-11/12
                duration-300
                -sm:h-60 -sm:w-full
                group-hover:scale-105 group-hover:-rotate-2
              "
            ></div>
            <div
              class="
                bg-image-cf bg-cover bg-no-repeat bg-center
                rounded-md
                h-100
                top-0
                left-0
                w-11/12
                center-x-y
                -sm:bg-contain -sm:h-60
              "
            ></div> -->
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
              class="mr-4 filter-grayscale -md:filter-none hover:filter-none"
            />
            <img
              src="../assets/logos/element.svg"
              alt=""
              class="mr-4 filter-grayscale -md:filter-none hover:filter-none"
            />
            <img
              src="../assets/logos/php.svg"
              alt=""
              class="filter-grayscale -md:filter-none hover:filter-none"
            />
          </template>
        </work-card>

        <!--Note -->
        <div class="flex items-center justify-center">
          <div class="w-11/12">
            <p
              class="
                font-bold
                text-md
                leading-snug
                w-full
                text-gray-800 text-opacity-50
              "
            >
              Most of my work has been for private companies, but I have worked
              on some projects on my own with people who have believed in me,
              these are some of them. If you want to know more about what I do
              or can do, I invite you to visit
              <a
                href="https://ecodev.netlify.app/"
                target="_blank"
                class="
                  bg-gradient-to-b bg-clip-text
                  from-orange-400
                  to-yellow-300
                  text-transparent
                "
              >
                my digital studio
              </a>
              or send me an email and we'll gladly talk.
            </p>
            <button
              class="
                bg-transparent
                flex
                mx-auto
                py-4
                w-1/2
                items-center
                justify-center
                -sm:w-full
              "
            >
              <span
                class="
                  bg-gradient-to-r bg-clip-text
                  font-bold
                  from-blue-600
                  to-blue-200
                  text-transparent text-4xl
                "
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
