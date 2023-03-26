<template>
  <div class="max-w-[800px] mx-auto p-4" v-if="meal">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full" />
    <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
      <div><b>Category:</b> {{ meal.strCategory }}</div>
      <div><b>Area:</b> {{ meal.strArea }}</div>
      <div><b>Tags:</b> {{ meal.strTags }}</div>
    </div>
    <div class="mb-3">
      {{ meal.strInstructions }}
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-3">Ingredient</h2>
        <ul>
          <li v-for="(el, index) in 20" :key="index">
            <span v-if="meal[`strIngredient${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
            </span>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-3">Measure</h2>
        <ul>
          <li v-for="(el, index) in 20" :key="index">
            <span
              v-if="
                meal[`strMeasure${index + 1}`] &&
                meal[`strMeasure${index + 1}`] !== ' '
              "
            >
              {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-4">
      <YouTubeButton :href="meal.strYoutube" :text="'Go to Youtube'" />
      <a
        :href="meal.strSource"
        target="_blank"
        class="px-3 py-2 ml-3 rounded text-gray-700 inline-block hover:bg-indigo-300 hover:text-white transition-colors mr-2"
      >
        View Original Source
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "../axiosClient";
import store from "../store";
import YouTubeButton from "../components/UI/YouTubeButton.vue";
const route = useRoute();
const meal = computed(() => store.state.mealDetail);

onMounted(() => {
  store.dispatch("mealDetail", route.params.id);
});
</script>

<style></style>
