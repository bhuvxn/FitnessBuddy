import axios from "axios";

import { Credentials } from "../types";
import { apiBaseUrl } from "../constants";
const login = async (credentials: Credentials) => {
  const response = await axios.post( `${apiBaseUrl}/login`, credentials);
  console.log(response);
  return response.data;
};

export default { login };
