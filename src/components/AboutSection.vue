<template>
  <div
    id="aboutSection"
    class="flex h-screen w-full relative items-center justify-center"
  >
    <!-- <div
      class="
        bg-gradient-to-r
        from-pink-300
        via-purple-300
        to-indigo-400
        h-80
        top-40
        right-0
        w-280
        absolute
        -sm:h-60 -sm:w-60
        -xl:top-10 -xl:w-2/4
      "
    ></div>
    <div
      class="
        bg-gradient-to-r
        from-green-200
        via-green-300
        to-blue-500
        h-100
        bottom-30
        left-0
        w-400
        absolute
        -sm:w-full -sm:bottom-60
        -xl:h-50 -xl:bottom-20 -xl:w-3/5
      "
    ></div> -->
    <div
      class="
        flex
        mx-auto
        max-w-screen-xl
        z-10
        justify-between
        relative
        -sm:flex-col -sm:pt-10
        -lg:h-auto -lg:pb-30
        -xl:w-full -xl:px-4
      "
    >
      <div class="w-1/2 -sm:mb-10 -sm:w-full">
        <big-title title="About me"></big-title>
        <p
          class="
            font-semibold
            text-xl
            leading-snug
            text-gray-700 text-opacity-70
          "
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
            class="
              font-bold
              text-xl text-gray-800 text-opacity-50
              hover:text-opacity-100
            "
            >GitHub</a
          >
          |
          <a
            href="https://twitter.com/cessarm_"
            target="_blank"
            class="
              font-bold
              text-xl text-gray-800 text-opacity-50
              hover:text-opacity-100
            "
            >Twitter</a
          >
          |
          <a
            href="https://www.instagram.com/cess_armando/"
            target="_blank"
            class="
              font-bold
              text-xl text-gray-800 text-opacity-50
              hover:text-opacity-100
            "
            >Instagram</a
          >
        </div>
      </div>
      <div class="w-1/2 relative group -sm:w-full">
        <div
          ref="target"
          class="
            bg-cover bg-no-repeat bg-center
            mx-auto
            h-140
            w-120
            z-1
            relative
            photo
            center-x-y
            -sm:w-full
          "
        ></div>
        <div
          class="
            bg-gradient-to-tr
            mx-auto
            from-yellow-200
            via-yellow-400
            to-yellow-600
            h-140
            transform
            transition
            ease-in-out
            w-120
            duration-300
            group-hover:scale-115 group-hover:-rotate-2
          "
        ></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// import { ref, defineComponent, reactive, computed } from "vue";
// import { useParallax } from "@vueuse/core";

// export default defineComponent({
//   setup() {
//     // const target = ref(null);
//     // const parallax = reactive(useParallax(target));
//     // const cardStyle = computed(() => ({
//     //   transform: `rotateX(${parallax.roll * 10}deg) rotateY(${
//     //     parallax.tilt * 10
//     //   }deg)`,
//     // }));
//     // return {
//     //   target,
//     //   parallax,
//     //   cardStyle,
//     // };
//   },
// });
//
</script>

<style scoped>
.photo {
  background-image: url("/me.jpg");
}
/* .photo:after {
  content: "";
  width: inherit;
  height: inherit;
  background: inherit;
  position: absolute;
  filter: blur(30px);
  top: 0;
  left: 0;
  z-index: -1;
} */
</style>
