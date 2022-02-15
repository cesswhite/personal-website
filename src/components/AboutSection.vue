<template>
  <div
    id="aboutSection"
    class="flex h-screen w-full relative items-center justify-center -sm:py-30 -md:h-auto"
  >
    <div
      class="flex h-auto mx-auto max-w-screen-xl z-10 justify-between relative -md:flex-col -lg:w-full"
    >
      <div class="h-auto w-1/2 -sm:mb-10 -md:w-full -lg:px-10">
        <big-title title="About me" class="-lg:text-xl"></big-title>
        <p
          class="font-semibold text-xl leading-snug text-gray-700 text-opacity-70 -sm:text-sm"
        >
          I have always liked everything related to the world of art and
          programming, after finishing university I decided to put these two
          universes together.
          <br />
          For more than two years I have been increasing my knowledge to offer
          people a work well done, with current technology and innovative
          designs.
          <br />
          <br />
          I worked for a digital agency where I developed a ticketing platform,
          an online store and a CRM system, all this developed with VueJS.
          <br />
          Currently working as front-end developer at
          <a href="https://medtrainer.com/" class="text-orange-500"
            >MedTrainer</a
          >, where I perform automated tests, solve bugs and integrate new
          modules.
        </p>
        <div class="mt-4 -sm:text-center">
          <a
            href="https://github.com/cesswhite"
            target="_blank"
            class="font-bold text-xl text-gray-800 text-opacity-50 hover:text-opacity-100"
            >GitHub</a
          >
          |
          <a
            href="https://twitter.com/cessarm_"
            target="_blank"
            class="font-bold text-xl text-gray-800 text-opacity-50 hover:text-opacity-100"
            >Twitter</a
          >
          |
          <a
            href="https://www.instagram.com/cess_armando/"
            target="_blank"
            class="font-bold text-xl text-gray-800 text-opacity-50 hover:text-opacity-100"
            >Instagram</a
          >
        </div>
      </div>
      <div
        class="w-1/2 relative group -sm:mt-10 -sm:w-full -md:mt-30 -md:w-full"
      >
        <div
          class="bg-cover bg-no-repeat bg-center mx-auto h-140 w-120 z-1 relative photo center-x-y -sm:w-full"
        ></div>
        <div
          class="bg-gradient-to-tr mx-auto from-yellow-200 via-yellow-400 to-yellow-600 h-140 transform transition ease-in-out w-120 duration-300 -md:mt-0 -md:scale-115 -md:-rotate-2 group-hover:scale-115 group-hover:-rotate-2"
        ></div>
      </div>
    </div>
  </div>
</template>
