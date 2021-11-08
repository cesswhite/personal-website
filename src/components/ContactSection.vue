<template>
  <div
    id="contactSection"
    class="
      flex
      h-screen
      relative
      items-center
      justify-center
      -md:h-full -md:py-10
    "
  >
    <notification :show="showNotification" />
    <div
      class="h-full w-full z-1 center-x-y backdrop-filter backdrop-blur-lg"
    ></div>
    <div
      class="
        bg-gradient-to-t
        h-full
        from-blue-500
        via-green-300
        to-blue-400
        right-40
        bottom-0
        w-20
        absolute
        -sm:opacity-60
        -md:left-0
      "
    ></div>
    <div
      class="
        bg-gradient-to-t
        h-full
        from-blue-300
        via-green-200
        to-yellow-300
        transform
        top-0
        left-100
        w-20
        -rotate-45
        absolute
        -md:right-0 -md:bottom-0
      "
    ></div>

    <div class="flex mx-auto w-screen-xl z-10 relative -xl:w-full">
      <div
        class="
          rounded-md
          h-190
          w-full
          py-6
          px-4
          filter-drop
          -md:h-auto -md:w-full
          -lg:px-10
        "
      >
        <big-title title="Contact"></big-title>
        <p
          class="
            font-bold
            text-xl
            leading-snug
            mb-10
            text-gray-800 text-opacity-70
          "
        >
          Do you have a project in mind? Let's get in touch
        </p>
        <div class="">
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
                    class="
                      rounded-md
                      font-bold
                      bg-gray-50 bg-opacity-80
                      border-2 border-gray-500 border-opacity-20
                      text-lg
                      w-full
                      py-3
                      pl-2
                      placeholder-gray-300
                      focus:outline-none focus:ring-2 focus:ring-gray-800
                    "
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
                    class="
                      rounded-md
                      font-bold
                      bg-gray-50 bg-opacity-80
                      border-2 border-gray-500 border-opacity-20
                      text-lg
                      w-full
                      py-3
                      pl-2
                      placeholder-gray-300
                      focus:outline-none focus:ring-2 focus:ring-gray-800
                    "
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
                class="
                  rounded-md
                  font-bold
                  bg-gray-50 bg-opacity-80
                  border-2 border-gray-500 border-opacity-20
                  text-lg
                  w-full
                  py-3
                  pl-2
                  placeholder-gray-300
                  focus:outline-none focus:ring-2 focus:ring-gray-800
                "
                cols="30"
                rows="8"
                placeholder="I need help for a magical hogwarts website"
                @input="verifyInput"
              >
              </textarea>
            </div>
            <div class="mt-10 w-full">
              <button
                class="rounded-md bg-gray-800 w-full py-2"
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
