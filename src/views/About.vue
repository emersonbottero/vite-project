<template>
  <div class="about">
    <h1>This is an about page</h1>
    <br />
    <Basic2> local componenet working..... </Basic2> <br />
    <br />
    <Basic> This one does not work 😭 </Basic>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Basic2 from "../components/Basic2.vue";
import { Basic } from "basic-plugin";

export default defineComponent({
  components: { Basic2, Basic },
  setup() {
    const date = ref("2020-10-16");
    return { date };
  },
});
</script>
