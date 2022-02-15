<template>
  <div id="workSection" class="w-full pt-20 relative">
    <div
      class="mx-auto max-w-screen-xl z-10 relative -sm:h-auto -sm:pt-0 -xl:w-full -xl:px-4"
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
            <div
              class="bg-contain bg-center bg-no-repeat bg-image-ctm h-140 mb-10 w-full"
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
            <div
              class="bg-contain bg-center bg-no-repeat bg-image-km h-140 mb-10 w-full"
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
            <div
              class="bg-cover bg-center bg-no-repeat bg-image-cf h-140 mb-10 w-full"
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
        <div class="flex mb-10 items-center justify-center">
          <div class="w-11/12">
            <p
              class="font-bold font-sans text-sm leading-snug w-full text-gray-800 text-opacity-50"
            >
              Most of my work has been for private companies, but I have worked
              on some projects on my own with people who have believed in me,
              these are some of them. If you want to know more about what I do
              or can do, I invite you to visit
              <a
                href="https://ecodev.netlify.app/"
                target="_blank"
                class="text-blue-600"
              >
                my digital studio
              </a>
              or send me an email and we'll gladly talk.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
