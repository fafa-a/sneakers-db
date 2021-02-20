<template>
  <header
    role="banner"
    class="container flex items-center justify-around mx-auto"
  >
    <img
      alt="Converse sneakers sketch"
      src="../assets/img/imgbin_plimsoll-shoe-sneakers-euclidean-png.png"
    />
    <h1 class="font-black text-yellow-600 font-display text-9xl">
      {{ text }}
    </h1>
  </header>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  text: String,
});
</script>

<style scoped>
img {
  width: 35vw;
}
</style>
