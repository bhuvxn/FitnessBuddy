import axios from "axios";
import { userId } from "../types";
import { apiBaseUrl } from "../constants";

const getMeals = async (userId: userId) => {
  const response = await axios.get(`${apiBaseUrl}/meals/user`);
  return response.data;
};



export default { getMeals };