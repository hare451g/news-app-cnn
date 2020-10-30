import { HOST, PROXY_CORS_ANYWHERE } from './constants';

async function get(targetURL = '', params = {}) {
  const result = {
    data: [],
    error: null,
  };

  const requestConfig = {
    Accept: 'application/json',
  };

  try {
    const url = new URL(`${PROXY_CORS_ANYWHERE}/${HOST}/${targetURL}`);
    url.search = new URLSearchParams(params);

    const response = await fetch(url, requestConfig);
    const json = await response.json();

    if (json.status !== 200) {
      throw new Error('Error when fetching data');
    }

    result.data = json.data;
  } catch (error) {
    result.error = error.message;
  } finally {
    return result;
  }
}

const httpClient = { get };

export default httpClient;
