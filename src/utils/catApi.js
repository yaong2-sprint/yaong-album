const API_ENDPOINT = "https://api.thecatapi.com/v1";
import axios from 'axios';

export const catApi = async (keyword) => {
  try {
    const url = `${API_ENDPOINT}/breeds/search?q=${keyword}`
    const payload = await axios.get(url);
    console.log(payload.data);
    return payload.data;

  } catch (e) {
    throw {
      message: e.message,
      status: e.status,
    };
  }
};