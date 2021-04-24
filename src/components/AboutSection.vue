<template>
  <div id="aboutSection" class="w-full relative">
    <div
      class="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 w-250 h-80 absolute top-40 right-0 -xl:top-10 -xl:w-2/4 -sm:w-60 -sm:h-60"
    ></div>
    <div
      class="bg-gradient-to-r from-green-200 via-green-300 to-blue-500 w-400 h-100 absolute bottom-30 left-0 -xl:bottom-20 -xl:w-3/5 -xl:h-50 -sm:w-full -sm:bottom-60"
    ></div>
    <div
      class="max-w-screen-xl mx-auto h-screen relative z-10 pt-30 flex -xl:w-full -xl:px-4 -sm:flex-col -lg:h-auto -lg:pb-30 -sm:pt-10"
    >
      <div class="w-1/2 -sm:w-full -sm:mb-10">
        <big-title title="About me"></big-title>
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
          <a href="https://medtrainer.com/" class="text-orange-500"
            >MedTrainer</a
          >, where I perform automated tests, solve bugs and integrate new
          modules.
        </p>
        <div class="mt-4 -sm:text-center">
          <a
            href="https://github.com/cesswhite"
            target="_blank"
            class="text-xl text-gray-800 text-opacity-50 font-bold hover:text-opacity-100"
            >GitHub</a
          >
          |
          <a
            href="https://twitter.com/cessarm_"
            target="_blank"
            class="text-xl text-gray-800 text-opacity-50 font-bold hover:text-opacity-100"
            >Twitter</a
          >
          |
          <a
            href="https://www.instagram.com/cess_armando/"
            target="_blank"
            class="text-xl text-gray-800 text-opacity-50 font-bold hover:text-opacity-100"
            >Instagram</a
          >
        </div>
      </div>
      <div class="w-1/2 -sm:w-full">
        <div :style="cardStyle">
          <div
            ref="target"
            class="relative w-100 h-140 bg-cover bg-no-repeat bg-center rounded-md mx-auto photo -sm:w-full"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent, reactive, computed } from "vue";
import { useParallax } from "@vueuse/core";

export default defineComponent({
  setup() {
    const target = ref(null);
    const parallax = reactive(useParallax(target));
    const cardStyle = computed(() => ({
      transform: `rotateX(${parallax.roll * 10}deg) rotateY(${
        parallax.tilt * 10
      }deg)`,
    }));

    return {
      target,
      parallax,
      cardStyle,
    };
  },
});
</script>

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
