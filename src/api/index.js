import httpClient from './httpClient';
import { CATEGORIES } from './constants';

async function getRecentNews() {
  try {
    const { data, error } = await httpClient.get();
    if (error) {
      throw new Error(error);
    }
    return { data };
  } catch (error) {
    return { error: error.message };
  }
}

async function getNewsDetails(link) {
  try {
    const { data, error } = await httpClient.get('/detail/', {
      url: link,
    });
    if (error) {
      throw new Error(error);
    }
    return { data };
  } catch (error) {
    return { error: error.message };
  }
}

async function getNewsByCategory(category = '') {
  try {
    const isCategoryValid = CATEGORIES.indexOf(category) < 0;

    if (isCategoryValid) {
      throw new Error(`${category} is not a valid category`);
    }

    const { data, error } = await httpClient.get(`/${category}`);
    if (error) {
      throw new Error(error);
    }
    return { data };
  } catch (error) {
    return { error: error.message };
  }
}

const api = {
  getRecentNews,
  getNewsDetails,
  getNewsByCategory,
};

export default api;
