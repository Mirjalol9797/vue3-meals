<template>
  <div>
    <div class="p-8">
      <input
        v-model="keyword"
        type="text"
        class="rounded border-2 border-gray-200 w-full"
        placeholder="Search for Meals"
        @input="searchMeals"
      />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-8 p-8">
      <div
        v-for="meal of meals"
        :key="meal.idMeal"
        class="bg-white shadow rounded-xl"
      >
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="rounded-t-xl w-full h-56 object-cover"
        />
        <div class="px-3">
          <h3 class="font-bold">
            {{ meal.strMeal }}
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            rerum!
          </p>
          <div class="p-3">
            <a
              :href="meal.strYoutube"
              target="_blank"
              class="px-3 py-2 rounded border-2 border-red-600 text-white bg-red-500 inline-block hover:bg-red-600 transition-colors mr-2"
              >Youtube</a
            >
            <router-link
              to="/"
              class="px-3 py-2 rounded border-2 border-green-600 text-white bg-green-500 inline-block hover:bg-green-600 transition-colors"
              >View</router-link
            >
          </div>
        </div>
        <pre>
        {{ meal }}

        </pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import store from "../store";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
  // dispatch for action
}
</script>

<style></style>
