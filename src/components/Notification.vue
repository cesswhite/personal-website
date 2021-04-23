<template>
  <div
    id="showNotification"
    v-if="showNotification"
    class="center-x top-20 z-40 w-96 bg-gray-800 rounded-md py-2 px-4 shadow-lg"
  >
    <h1 class="font-bold text-2xl text-gray-50">Thank you!</h1>
    <p class="font-medium text-lg text-gray-50">Your owl has been sent</p>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
  },
  data: () => ({
    showNotification: false,
  }),
  watch: {
    show(val, oldVal) {
      const notEle = document.getElementById("showNotificacion");
      if (val) {
        this.showNotification = true;
        setTimeout(this.test, 4000);
      }
    },
  },

  methods: {
    test() {
      console.log("test");
      this.showNotification = false;
    },
  },
};
</script>

<style></style>
