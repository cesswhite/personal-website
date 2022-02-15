<template>
  <div class="rounded-md flex flex-col mb-10 py-4 px-2">
    <div class="group relative">
      <slot name="bg-image" />
    </div>
    <div class="flex flex-col items-stretch relative -sm:mt-4 -md:w-full">
      <a :href="url" target="_blank" class="h-8 -top-8 right-2 w-8 absolute">
        <svg
          viewBox="0 0 20 20"
          class="h-8 fill-current text-gray-800 text-opacity-30 w-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
          ></path>
          <path
            d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
          ></path>
        </svg>
      </a>
      <span class="font-bold text-lg text-gray-800 text-opacity-30 italic">
        {{ type }}
      </span>
      <h1 class="font-bold mb-4 text-4xl">
        {{ name }}
      </h1>
      <p
        class="font-bold text-xl leading-snug mb-10 text-gray-800 text-opacity-70"
      >
        <slot name="description" />
      </p>
      <div>
        <span class="font-bold text-lg text-gray-800 text-opacity-40"
          >Devices
        </span>
        <div class="flex mt-4 mb-4 w-1/2 justify-start">
          <img
            v-if="desktop"
            src="../assets/devices/desktop.svg"
            alt="desktop-device"
            class="h-6 opacity-30 w-6"
          />
          <img
            v-if="tablet"
            src="../assets/devices/tablet.svg"
            alt="tablet-device"
            class="h-6 opacity-30 w-6"
          />
          <img
            v-if="phone"
            src="../assets/devices/phone.svg"
            alt="phone-device"
            class="h-6 opacity-30 w-6"
          />
        </div>
      </div>
      <div class="w-full">
        <span class="font-bold text-lg text-gray-800 text-opacity-40"
          >Built with
        </span>
        <div
          class="flex mt-4 mb-4 w-1/2 justify-start -sm:w-full -sm:justify-evenly"
        >
          <slot name="built" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
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
