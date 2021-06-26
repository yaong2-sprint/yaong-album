import axios from 'axios';
import CAT_API_URL from '../constants/url.js';

export const getBreedsIdApi = async (url) => {
  try {
    const response = await axios.get(url);
    const payload = response.data;
    return payload;
  } catch (e) {
    return e;
  }
};

/**
 *
 * retrieve and return cat infos user enter
 */
export const getCatsInfoApi = async (keyword) => {
  try {
    const breeds = await getBreedsIdApi(
      `${CAT_API_URL}/breeds/search?q=${keyword}`
    );
    if (breeds.length) {
      const requests = breeds.map(async (breed) => {
        // eslint-disable-next-line no-return-await
        return await axios.get(
          `${CAT_API_URL}/images/search?limit=20&breed_ids=${breed.id}`
        );
      });
      const responses = await Promise.all(requests);
      const catInfoArr = responses.reduce((acc, cur) => {
        return acc.concat(cur.data);
      }, []);
      return catInfoArr;
    }
    return [];
  } catch (error) {
    console.error(error);
    return null;
  }
};
