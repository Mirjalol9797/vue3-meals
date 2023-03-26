<template>
  <a
    v-if="href"
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded border-2 border-red-600 text-white bg-red-500 inline-block hover:bg-red-600 transition-colors mr-2"
  >
    {{ text }}
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
  text: {
    type: String,
    default: "You tube",
  },
});
</script>

<style></style>
