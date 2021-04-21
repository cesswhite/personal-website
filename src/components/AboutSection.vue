<template>
  <div id="aboutSection" class="w-full relative">
    <div
      id="sphereGradientOne"
      class="bg-gradient-to-r from-green-200 via-green-300 to-blue-500 rounded-full w-100 h-100 absolute bottom-30 left-0 -sm:w-40 -sm:h-40 -sm:bottom-120"
    ></div>
    <div
      id="sphereGradient"
      class="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-full w-80 h-80 absolute top-40 right-0 -sm:w-40 -sm:h-40 -sm:top-90"
    ></div>

    <div class="absolute filter-drop w-full h-screen z-10 -lg:h-full"></div>
    <div
      class="max-w-screen-xl mx-auto h-screen relative z-10 pt-30 flex -xl:w-full -xl:px-4 -sm:flex-col -lg:h-auto -lg:pb-30 -sm:pt-10"
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
            class="relative w-100 h-140 bg-cover bg-no-repeat rounded-md mx-auto photo"
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

#sphereGradientOne {
  animation: moveOne 10s ease-in-out infinite alternate;
}
#sphereGradient {
  animation: move 50s ease-in-out infinite alternate;
}
@keyframes move {
  0% {
    transform: translate(100px, 200px);
  }
  50% {
    transform: translate(-400px, 200px);
  }
  100% {
    transform: translate(-500px, 500px);
  }
}

@keyframes moveOne {
  0% {
    transform: translate(0, -200px) scale(1);
  }
  50% {
    transform: translate(0, -300px) scale(0.7);
  }
  100% {
    transform: translate(0, -400px) scale(1.4);
  }
}

@media screen and (max-width: 414px) {
  #sphereGradientOne,
  #sphereGradient {
    animation: none;
  }
}
</style>
