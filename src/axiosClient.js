import axios from "axios";
export default axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1",
});

// www.themealdb.com/api/json/v1/1/list.php?i=list
