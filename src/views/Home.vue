<template>
  <div>
    <div class="flex flex-col p-8">
      <input
        type="text"
        class="rounded border-2 border-gray-200 w-full"
        placeholder="Search for Meals"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import axios from "../axiosClient";

onMounted(async () => {
  const response = await axios.get("/list.php?i=list");
  console.log(response.data);
});
</script>

<style></style>
