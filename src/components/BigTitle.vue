<template>
  <h1 class="font-bold mb-4 text-9xl text-gray-800 -sm:text-5xl -lg:text-7xl">
    {{ title }}
  </h1>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: "Title",
    },
  },
};
</script>
