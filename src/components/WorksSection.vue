<template>
  <div class="w-full pb-10">
    <div
      class="max-w-screen-xl mx-auto h-screen relative pt-40 flex -xl:w-full -xl:px-4 -lg:flex-col -sm:h-auto"
    >
      <div class="w-1/2 -lg:w-full -sm:mb-10">
        <h1 class="text-9xl -sm:text-8xl -sm:text-center mb-4">Works</h1>
        <p
          class="font-bold leading-snug text-xl text-gray-800 text-opacity-70 mb-10"
        >
          Most of the results of my work belong to the private sphere, but I
          have also worked on my own with some people who believed in me, and
          these are some of them.
        </p>
        <div
          class="flex items-center justify-evenly -lg:mb-10 -sm:flex-col -sm:justify-start"
        >
          <div class="flex flex-col -sm:mb-10">
            <img
              src="../assets/knives.png"
              alt=""
              @click="setName('knives')"
              class="mb-4 cursor-pointer"
            />
            <a href="https://knives.mx/" target="_blank">Link</a>
          </div>
          <div class="flex flex-col -sm:w-full -sm:pl-7">
            <img
              src="../assets/ctm-logo.png"
              alt=""
              @click="setName('ctm')"
              class="mb-4 cursor-pointer w-40 h-40"
            />
            <a href="https://www.countertopmasters.com/" target="_blank"
              >Link</a
            >
          </div>
        </div>
      </div>
      <div
        class="w-1/2 px-10 overflow-scroll -lg:w-full -lg:flex -lg:w-full -lg:h-240 -lg:overflow-y-hidden -lg:px-0 -lg:py-10"
      >
        <div
          v-for="n in 4"
          :key="n"
          :style="{
            backgroundImage: `url('/src/works/${nameFolder}-${n}.png')`,
          }"
          class="relative w-full h-100 bg-cover bg-no-repeat rounded-md mx-auto mb-4 -lg:mr-10 -lg:h-full -lg:w-200 flex-none photo"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const nameFolder = ref("knives");
    const setName = (name) => {
      nameFolder.value = name;
    };

    return {
      setName,
      nameFolder,
    };
  },
});
</script>

<style scoped>
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
  opacity: 0.6;
}
</style>
