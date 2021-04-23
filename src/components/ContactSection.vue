<template>
  <div id="contactSection" class="w-full relative -sm:pb-10">
    <notification :show="showNotification" />

    <div
      class="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 w-100 h-100 absolute right-100 bottom-80 opacity-70 animate-pulse -sm:w-40 -sm:h-40"
    ></div>
    <div
      class="bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300 w-100 h-100 absolute left-0 bottom-0 opacity-70 animate-pulse -sm:w-40 -sm:h-40"
    ></div>
    <div class="absolute filter-drop w-full h-screen z-10 -lg:h-full"></div>

    <div
      class="max-w-screen-xl mx-auto h-screen relative z-10 pt-40 flex -xl:w-full -xl:px-4 -sm:flex-col"
    >
      <div class="w-1/2 -sm:w-full -sm:mb-10">
        <h1 class="text-9xl -sm:text-8xl -sm:text-center mb-4 font-bold">
          Contact
        </h1>
        <p
          class="font-bold leading-snug text-xl text-gray-800 text-opacity-70 mb-10"
        >
          Do you have a project in mind? Let's get in touch
        </p>
        <div class="">
          <form @submit.prevent="sendEmail">
            <div class="w-full flex justify-between mb-6">
              <div class="w-2/5 flex flex-col -sm:w-1/2">
                <div class="mb-3">
                  <label class="font-bold text-gray-800 text-opacity-50"
                    >Name</label
                  >
                </div>
                <div class="w-full">
                  <input
                    type="text"
                    class="w-full py-3 rounded-md pl-2 border-2 border-gray-500 border-opacity-20 font-bold placeholder-gray-300 text-lg focus:outline-none focus:ring-4 focus:ring-gray-800"
                    v-model="data.name"
                    name="name"
                    placeholder="Harry Potter"
                    @input="verifyInput"
                  />
                </div>
              </div>

              <div class="w-2/5 flex flex-col -sm:w-1/2 -sm:ml-2">
                <div class="mb-3">
                  <label class="font-bold text-gray-800 text-opacity-50"
                    >Email</label
                  >
                </div>
                <div class="w-full">
                  <input
                    type="email"
                    class="w-full py-3 rounded-md pl-2 border-2 border-gray-500 border-opacity-20 font-bold placeholder-gray-300 text-lg focus:outline-none focus:ring-4 focus:ring-gray-800"
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
                <label class="font-bold text-gray-800 text-opacity-50"
                  >Message</label
                >
              </div>
              <textarea
                name="message"
                v-model="data.message"
                class="w-full py-3 rounded-md pl-2 border-2 border-gray-500 border-opacity-20 font-bold placeholder-gray-300 text-lg focus:outline-none focus:ring-4 focus:ring-gray-800"
                cols="30"
                rows="8"
                placeholder="I need help for a magical hogwarts website"
                @input="verifyInput"
              >
              </textarea>
            </div>
            <div class="w-full mt-10">
              <button
                class="bg-gray-800 w-full py-2 rounded-md"
                @click="sendEmail"
              >
                <span class="font-bold text-xl text-gray-50">Send an owl</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import emailjs from "emailjs-com";

export default defineComponent({
  setup() {
    const data = {
      name: "",
      email: "",
      message: "",
    };

    const showNotification = ref(false);
    const sendEmail = (e) => {
      try {
        emailjs.sendForm(
          "Personal",
          "template_5o23kpi",
          e.target,
          "user_Ylu4POh5B0aFyUXpnlq68",
          {
            name: data.name,
            email: data.email,
            message: data.email,
          }
        );
      } catch (error) {}
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

<style scoped></style>
