<template>
  <div>
    <div class="flex flex-col p-8">
      <input
        type="text"
        class="rounded border-2 border-gray-200 w-full"
        placeholder="Search for Meals"
      />
      <div class="flex justify-center gap-1 mt-2">
        <router-link
          :to="{ name: 'byLetter', params: { letter } }"
          v-for="letter in letters"
          :key="letter"
        >
          {{ letter }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import axios from "../axiosClient";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

onMounted(async () => {
  const response = await axios.get("/list.php?i=list");
  console.log(response.data);
});
</script>

<style></style>
