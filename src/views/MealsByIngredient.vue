<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-8 p-8">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch, computed } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealItem from "../components/MealItem.vue";
const meals = computed(() => store.state.mealsByIngredient);
const route = useRoute();

onMounted(() => {
  store.dispatch("searchMealsByIngredients", route.params.ingredient);
});
</script>

<style></style>
