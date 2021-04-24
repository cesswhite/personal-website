<template>
  <div class="flex py-4 px-2 -md:flex-col rounded-md mb-10 filter-drop">
    <div class="group w-1/2 relative flex items-center -md:w-full rounded-md">
      <slot name="bg-image" />
    </div>
    <div
      class="w-1/2 h-full flex flex-col items-stretch relative -md:w-full -sm:mt-4"
    >
      <span class="text-gray-800 text-opacity-30 font-bold italic text-lg">
        {{ type }}
      </span>
      <h1 class="text-4xl mb-4 font-bold">
        {{ name }}
      </h1>
      <p
        class="font-bold leading-snug text-xl text-gray-800 text-opacity-70 mb-10"
      >
        <slot name="description" />
      </p>
      <div>
        <span class="text-gray-800 text-opacity-40 font-bold text-lg"
          >Devices
        </span>
        <div class="w-1/2 flex justify-start mb-4 mt-4">
          <img
            v-if="desktop"
            src="../assets/devices/desktop.svg"
            alt="desktop-device"
            class="opacity-30 w-6 h-6"
          />
          <img
            v-if="tablet"
            src="../assets/devices/tablet.svg"
            alt="tablet-device"
            class="opacity-30 w-6 h-6"
          />
          <img
            v-if="phone"
            src="../assets/devices/phone.svg"
            alt="phone-device"
            class="opacity-30 w-6 h-6"
          />
        </div>
      </div>
      <div class="w-full">
        <span class="text-gray-800 text-opacity-40 font-bold text-lg"
          >Built with
        </span>
        <span>🔥</span>
        <div
          class="flex justify-start w-1/2 mt-4 mb-4 -sm:w-full -sm:justify-evenly"
        >
          <slot name="built" />
        </div>
        <a :href="url" target="_blank">
          <button
            class="w-full bg-gray-800 text-gray-50 rounded-md font-bold text-xl py-2 cursor-pointer hover:bg-gray-700"
          >
            Visit site
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    name: String,
    phone: Boolean,
    tablet: Boolean,
    desktop: Boolean,
    url: String,
  },
};
</script>

<style></style>
