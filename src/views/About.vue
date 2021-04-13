<template>
  <div class="about">
    <h1>This is an about page</h1>
    <br />
    <Basic2> SIm no About..... </Basic2> <br />
    <flat-pickr v-model="date"></flat-pickr>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Basic2 from "../components/Basic2.vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default defineComponent({
  components: { Basic2, flatPickr },
  setup() {
    const date = ref("2020-10-16");
    return { date };
  },
});
</script>
