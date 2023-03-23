<template>
  <div class="wrapper bg-gray-100 h-full">
    <Header />
    <main>
      <router-view />
    </main>
    <footer></footer>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
</script>

<style></style>
