<template>
  <div id="contactSection" class="h-auto mt-10 mb-10 w-full">
    <notification :show="showNotification" />
    <div
      class="mx-auto max-w-screen-lg z-10 relative -sm:h-auto -lg:w-full -lg:px-10"
    >
      <big-title title="Contact"></big-title>
      <p
        class="font-bold text-xl leading-snug mb-10 text-gray-800 text-opacity-70"
      >
        Do you have a project in mind? Let's get in touch
      </p>
      <form @submit.prevent="sendEmail">
        <div class="flex mb-6 w-full justify-between">
          <div class="flex flex-col mr-4 w-1/2 -sm:w-1/2">
            <div class="mb-3">
              <label class="font-bold text-gray-800 text-opacity-60"
                >Name</label
              >
            </div>
            <div class="w-full">
              <input
                type="text"
                class="rounded-md font-bold bg-gray-50 bg-opacity-80 border-2 border-gray-500 border-opacity-10 text-lg w-full py-3 pl-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
                v-model="data.name"
                name="name"
                placeholder="Harry Potter"
                @input="verifyInput"
              />
            </div>
          </div>

          <div class="flex flex-col w-1/2">
            <div class="mb-3">
              <label class="font-bold text-gray-800 text-opacity-60"
                >Email</label
              >
            </div>
            <div class="w-full">
              <input
                type="email"
                class="rounded-md font-bold bg-gray-50 bg-opacity-80 border-2 border-gray-500 border-opacity-10 text-lg w-full py-3 pl-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
                v-model="data.email"
                name="email"
                placeholder="harrypotter@hogwarts.wz"
                @input="verifyInput"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="mb-3">
            <label class="font-bold text-gray-800 text-opacity-60"
              >Message</label
            >
          </div>
          <textarea
            name="message"
            v-model="data.message"
            class="rounded-md font-bold bg-gray-50 bg-opacity-80 border-2 border-gray-500 border-opacity-10 text-lg w-full py-3 pl-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
            cols="30"
            rows="8"
            placeholder="I need help for a magical hogwarts website"
            @input="verifyInput"
          >
          </textarea>
        </div>
        <div class="flex mt-10 w-full justify-end">
          <button
            class="rounded-md bg-gray-800 py-3 px-6 -sm:w-full"
            @click="sendEmail"
          >
            <span class="font-semibold text-lg text-gray-50">Send an owl</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from "vue";
import emailjs from "emailjs-com";

export default defineComponent({
  setup() {
    const data = reactive({
      name: "",
      email: "",
      message: "",
    });

    const showNotification = false;
    const sendEmail = (e) => {
      emailjs.sendForm(
        "Personal",
        "template_5o23kpi",
        e.target,
        "user_Ylu4POh5B0aFyUXpnlq68",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        }
      );
      data.name = "";
      data.email = "";
      data.message = "";
    };

    const verifyInput = (e) => {
      const newValue = e.target.value.length;
      e.target.classList.remove("ring-4", "ring-gray-800");
      if (newValue > 0) {
        e.target.classList.add("ring-4", "ring-gray-800");
      }
    };

    return {
      data,
      showNotification,
      sendEmail,
      verifyInput,
    };
  },
});
</script>
