<template>
  <h1 class="text-9xl -md:text-8xl -sm:text-7xl mb-4 font-bold">{{ title }}</h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title",
    },
  },
};
</script>

<style></style>
