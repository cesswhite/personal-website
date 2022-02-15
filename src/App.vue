<template>
  <div class="w-full relative">
    <Header />
    <div class="-mt-20 overflow-x-hidden">
      <index-section />
      <about-section />
      <works-section />
      <eco-studios />
      <contact-section />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
