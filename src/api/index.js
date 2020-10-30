import httpClient from './httpClient';
import { CATEGORIES, ORIGIN_HOST } from './constants';

/**
 * News Item
 * @typedef {Object} News
 * @property {string} judul - judul berita
 * @property {string} link - link berita, dapat digunakan untuk id detail berita
 * @property {string} poster - poster berita, dalam jpeg
 * @property {string} host - host address
 * @property {string} tipe - tipe atau kategori berita
 * @property {string} id - id of news
 * @property {string} slug - slug from news title
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
 * Compose news data
 */

const composeNewsData = (data) =>
  data.map((news) => {
    const { link } = news;
    const [host, tipe, id, slug] = link.split('https://')[1].split('/');
    return {
      host,
      tipe,
      id,
      slug,
      ...news,
    };
  });

/**
 * Get recent news list
 * Normalized news with headline or generic News with error
 */
async function getAllNews(category = '') {
  try {
    const isCategoryValid = CATEGORIES.indexOf(category) >= 0;

    const targetURL = isCategoryValid ? category : '';

    const { data, error } = await httpClient.get(targetURL);

    if (error) {
      throw new Error(error);
    }

    // compose link
    const composedData = composeNewsData(data);

    // separate headline
    const headline = composedData[0];
    const list = composedData.slice(1);

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

/**
 * Get news details
 * Fetch news detail with link
 * @param {string} category - category of news
 * @param {string} id - id of news
 * @param {string} slug - slug of news
 */
async function getNewsDetails(category, id, slug) {
  try {
    const composedURL = `${ORIGIN_HOST}/${category}/${id}/${slug}`;

    const { data, error } = await httpClient.get('detail/', {
      url: composedURL,
    });
    if (error) {
      throw new Error(error);
    }
    return { data };
  } catch (error) {
    return { error: error.message };
  }
}

async function getNewsByKeyword(keyword = '') {
  try {
    const isValidKeyword = keyword.length <= 0;

    if (isValidKeyword) {
      throw new Error('keyword must be provided');
    }

    const { data, error } = await httpClient.get('search/', { q: keyword });
    if (error) {
      throw new Error(error);
    }
    return { data: composeNewsData(data) };
  } catch (error) {
    return { error: error.message };
  }
}

const api = {
  getAllNews,
  getNewsDetails,
  getNewsByKeyword,
};

export default api;
