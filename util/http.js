import axios from "axios";

const API_URL = "https://api.thedogapi.com/v1";
const API_KEY = "SUA_CHAVE";

export async function buscarCaes() {
  const response = await axios.get(`${API_URL}/breeds?api_key=${API_KEY}`);

  return response.data;
}
