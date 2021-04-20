<template>
  <div class="w-full pb-10">
    <div
      class="max-w-screen-xl mx-auto h-screen relative pt-40 flex -xl:w-full -xl:px-4 -sm:flex-col"
    >
      <div class="w-1/2 -sm:w-full -sm:mb-10">
        <h1 class="text-9xl -sm:text-8xl -sm:text-center mb-4">Contact</h1>
        <h1 class="text-9xl -sm:text-8xl -sm:text-center mb-4">WIP</h1>
      </div>
    </div>
  </div>
</template>
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
</style>
