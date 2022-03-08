<template>
  <div
    id="home"
    class="flex h-screen mt-20 w-full relative items-center justify-center overflow-hidden"
  >
    <bubbles>
      <template #title>
        <h1
          class="font-sans font-bold text-center text-4xl text-gray-900 capitalize"
        >
          {{ words[setRandomWord] }} <br />
          Front-End Developer
        </h1>
      </template>
    </bubbles>
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
