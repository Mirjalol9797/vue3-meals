// export default {};
import axios from "../axiosClient";

export function searchMeals({ commit }, keyword) {
  axios.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
}
export function searchMealsByLetter({ commit }, letter) {
  axios.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setMealsByLetter", data.meals);
  });
}
export function searchIngredients({ commit }, list) {
  axios.get(`list.php?i=${list}`).then(({ data }) => {
    commit("setSearchIngredients", data.meals);
  });
}
export function searchMealsByIngredients({ commit }, ingredient) {
  axios.get(`filter.php?i=${ingredient}`).then(({ data }) => {
    commit("setMealsByIngredient", data.meals);
    console.log(data);
  });
}
export function mealDetail({ commit }, id) {
  axios.get(`lookup.php?i=${id}`).then(({ data }) => {
    console.log(data.meals[0]);
    commit("setMealDetail", data.meals[0]);
  });
}
