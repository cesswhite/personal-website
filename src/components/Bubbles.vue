<template>
  <div class="h-screen w-full relative">
    <svg id="visual" viewBox="0 0 1280 720" class="h-full mx-auto">
      <defs>
        <filter
          id="blur1"
          x="-10%"
          y="-10%"
          width="120%"
          height="120%"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="161"
            result="effect1_foregroundBlur"
          ></feGaussianBlur>
        </filter>
      </defs>

      <g filter="url(#blur1)">
        <circle
          class="inline -md:hidden"
          cx="900"
          cy="750"
          :fill="colors[setFirstRandomColor]"
          r="200"
        ></circle>
        <circle
          class="inline -md:hidden"
          cx="500"
          cy="720"
          :fill="colors[setSecondRandomColor]"
          r="220"
        ></circle>
        <circle
          class="hidden -md:inline"
          cx="400"
          cy="500"
          :fill="colors[setSecondRandomColor]"
          r="120"
        ></circle>
        <circle
          class="hidden -md:inline"
          cx="200"
          cy="700"
          :fill="colors[setFirstRandomColor]"
          r="160"
        ></circle>
      </g>
    </svg>

    <div class="center-x-y">
      <slot name="title" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from "vue";

export default defineComponent({
  props: {},
  data: () => ({}),
  setup() {
    const colors = ref([
      "#22D3EE",
      "#8B5CF6",
      "#D946EF",
      "#EF4444",
      "#FBBF24",
      "#34D399",
      "#6366F1",
    ]);

    const setFirstRandomColor = computed(() =>
      Math.floor(Math.random() * colors.value.length)
    );
    const setSecondRandomColor = computed(() =>
      Math.floor(Math.random() * colors.value.length)
    );

    return {
      colors,
      setFirstRandomColor,
      setSecondRandomColor,
    };
  },
});
</script>
