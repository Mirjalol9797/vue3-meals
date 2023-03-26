<template>
  <div class="bg-white shadow rounded-xl">
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="rounded-t-xl w-full h-56 object-cover mb-4"
    />
    <div class="px-3">
      <h3 class="font-bold">
        {{ meal.strMeal }}
      </h3>
      <p class="meal-instruction" v-if="meal.strInstructions">
        {{ meal.strInstructions }}
      </p>
      <div class="p-3">
        <YouTubeButton :href="meal.strYoutube" />
        <router-link
          :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
          class="px-3 py-2 rounded border-2 border-green-600 text-white bg-green-500 inline-block hover:bg-green-600 transition-colors"
          >View</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from "../components/UI/YouTubeButton.vue";

const props = defineProps({
  meal: {
    type: Object,
    default: {},
    required: true,
  },
});
</script>

<style>
.meal-instruction {
  min-height: 80px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
