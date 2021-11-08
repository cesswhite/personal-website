<template>
  <div id="home" class="h-screen w-full relative">
    <div
      class="h-screen w-full z-1 center-x-y backdrop-filter backdrop-blur-lg"
    ></div>
    <div
      class="
        bg-gradient-to-r
        from-yellow-300
        via-red-500
        to-pink-500
        h-20
        opacity-80
        transform
        top-80
        -left-40
        w-180
        rotate-45
        absolute
      "
    ></div>
    <div
      class="
        bg-gradient-to-r
        from-green-300
        via-blue-500
        to-purple-600
        h-20
        opacity-80
        transform
        right-0
        bottom-50
        w-100
        rotate-45
        absolute
      "
    ></div>

    <div
      class="h-screen mx-auto max-w-screen-xl z-10 relative -xl:w-full -xl:px-4"
    >
      <div class="center-y -lg:text-center">
        <h1
          class="
            font-semibold
            text-gray-800 text-9xl
            -sm:text-center -sm:text-7xl
          "
        >
          <span class="capitalize">{{ words[setRandomWord] }} </span>
          <br />
          front-end developer.
        </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from "vue";

export default defineComponent({
  props: {},
  data: () => ({}),
  setup() {
    const words = ref([
      "minimalistic",
      "fantastic",
      "incredible",
      "magic",
      "awesome",
    ]);

    const setRandomWord = computed(() =>
      Math.floor(Math.random() * words.value.length)
    );

    return {
      words,
      setRandomWord,
    };
  },
});
</script>
