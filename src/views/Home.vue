<template>
  <div class="home">
    <Basic2> SIm no Home.. </Basic2>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "../components/HelloWorld.vue";
import Basic2 from "../components/Basic2.vue";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
    Basic2,
  },
});
</script>
