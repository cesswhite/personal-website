<template>
  <div class="w-full -mt-20 relative">
    <img src="../assets/Rectangle.png" alt="" class="absolute -sm:-left-50" />
    <img
      src="../assets/Rectangle.png"
      alt=""
      class="absolute right-0 bottom-0"
    />
    <div class="absolute filter-drop w-full h-screen z-10"></div>

    <div
      class="max-w-screen-xl mx-auto relative h-screen z-10 -xl:w-full -xl:px-4"
    >
      <div class="center-y">
        <h1 class="text-9xl -sm:text-7xl -sm:text-center">
          I'm a {{ words[setRandomWord] }} <br />
          front-end developer.
        </h1>
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
      "handsome",
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

<style></style>
