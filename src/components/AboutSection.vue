<template>
  <div class="w-full">
    <div
      class="max-w-screen-xl mx-auto h-screen relative pt-40 flex -xl:w-full -xl:px-4 -sm:flex-col"
    >
      <div class="w-1/2 -sm:w-full -sm:mb-10">
        <h1 class="text-9xl -sm:text-8xl -sm:text-center mb-4">About me</h1>
        <p class="font-bold leading-snug text-xl text-gray-800 text-opacity-70">
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
          <a href="https://medtrainer.com/">MedTrainer</a>, where I perform
          automated tests, solve bugs and integrate new modules.
        </p>
      </div>
      <div class="w-1/2 -sm:w-full">
        <div
          class="relative w-100 h-140 bg-cover bg-no-repeat rounded-md mx-auto photo"
        ></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.photo {
  background-image: url("../assets/me.jpeg");
}
.photo:after {
  content: "";
  width: inherit;
  height: inherit;
  background: inherit;
  position: absolute;
  filter: blur(20px);
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
