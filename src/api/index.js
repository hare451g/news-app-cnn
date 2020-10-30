import httpClient from './httpClient';
import { CATEGORIES } from './constants';

/**
 * News Item
 * @typedef {Object} News
 * @property {string} judul - judul berita
 * @property {string} link - link berita, dapat digunakan untuk id detail berita
 * @property {string} poster - poster berita, dalam jpeg
 * @property {string} tipe - tipe atau kategori berita
 * @property {string} waktu - waktu dari berita rilis
 */

/**
 * Generic News Response
 * @typedef {Object} GenericNewsResponse
 * @property {Array<News>} data - list dari news item
 * @property {string} error - object error message
 */

/**
 * Normalized news list
 * @typedef { Object } NormalizedNewsList
 * @property {News} headline - first news item with resized image
 * @property {string} list - list news item
 */

/**
 * Get recent news list
 * @returns {Promise<NormalizedNewsList|GenericNewsResponse>}
 * Normalized news with headline or generic News with error
 */
async function getRecentNews() {
  try {
    const { data, error } = await httpClient.get();

    if (error) {
      throw new Error(error);
    }

    // separate headline
    const headline = data[0];
    const list = data.slice(1);

    // get base image url
    const { poster } = headline;
    const basePosterURL = poster.split('?')[0];
    const resizedPoster = `${basePosterURL}?w=${382}&q=${180}`;

    // change poster size of headline
    headline.poster = resizedPoster;

    return {
      data: {
        headline,
        list,
      },
    };
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
