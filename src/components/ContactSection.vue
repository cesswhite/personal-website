<template>
  <div id="contactSection" class="w-full pb-10">
    <div
      class="max-w-screen-xl mx-auto h-screen relative pt-40 flex -xl:w-full -xl:px-4 -sm:flex-col"
    >
      <div class="w-1/2 -sm:w-full -sm:mb-10">
        <h1 class="text-9xl -sm:text-8xl -sm:text-center mb-4">Contact</h1>

        <div>
          <form @submit.prevent="sendEmail">
            <label>Name</label>
            <input
              type="text"
              v-model="data.name"
              name="name"
              placeholder="Your Name"
            />
            <label>Email</label>
            <input
              type="email"
              v-model="data.email"
              name="email"
              placeholder="Your Email"
            />
            <label>Message</label>
            <textarea
              name="message"
              v-model="data.message"
              cols="30"
              rows="5"
              placeholder="Message"
            >
            </textarea>

            <input type="submit" value="Send" />
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
      } catch (error) {
        console.log(error);
      }
    };

    return {
      data,
      sendEmail,
    };
  },
});
</script>
