<template>
  <div class="home">
    <Basic2> local working on Home.. </Basic2>
    <Basic> linked working on Home.. </Basic>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "../components/HelloWorld.vue";
import Basic2 from "../components/Basic2.vue";
import { Basic } from "basic-plugin";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
    Basic2,
    Basic,
  },
});
</script>
