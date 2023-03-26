<template>
  <div>
    <div class="p-8 pb-0">
      <input
        v-model="keyword"
        type="text"
        class="rounded border-2 border-gray-200 w-full"
        placeholder="Search for Meals"
        @input="searchMeals"
      />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-8 p-8">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
  // dispatch for action
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>

<style></style>
