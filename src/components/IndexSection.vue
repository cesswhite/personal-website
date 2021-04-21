<template>
  <div id="home" class="w-full -mt-20 relative overflow-x-hidden">
    <div
      class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 w-100 h-100 absolute -sm:w-20 -sm:h-20"
    ></div>
    <div
      class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 w-140 h-200 absolute right-0 bottom-0 opacity-70 -sm:w-40 -sm:h-40"
    ></div>

    <div class="absolute filter-drop w-full h-screen z-10"></div>

    <div
      class="max-w-screen-xl mx-auto relative h-screen z-10 -xl:w-full -xl:px-4"
    >
      <div class="center-y">
        <h1 class="text-9xl -sm:text-7xl -sm:text-center">
          I'm a {{ words[setRandomWord] }} <br />
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
