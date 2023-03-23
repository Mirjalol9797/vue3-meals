// export default {};
import axios from "../axiosClient";

export function searchMeals({ commit }, keyword) {
  axios.get(`/search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
}
