<template>
  <div class="p-8" v-if="ingredients">
    <h1 class="font-semibold text-4xl mb-4">Ingredients</h1>

    <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      class="bg-white rounded-lg p-5 mb-4 shadow-md inline-block"
      v-for="ingredient in ingredients"
      :key="ingredient.idIngredient"
    >
      <h2 class="font-medium text-xl mb-2">{{ ingredient.strIngredient }}</h2>
      <p>
        {{ ingredient.strDescription }}
      </p>
    </router-link>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
const ingredients = store.state.searchedIngredients;
const keyword = ref("");

onMounted(() => {
  store.dispatch("searchIngredients", "list");
});
</script>

<style></style>
