import { HOST, PROXY_CORS_ANYWHERE } from './constants';

async function get(targetURL = '', config = {}) {
  const result = {
    data: [],
    error: null,
  };

  const requestConfig = {
    ...config,
    Accept: 'application/json',
  };

  try {
    let endpointURL = `${HOST}/${targetURL}`;

    // if development, use cors anywhere
    if (process.env.NODE_ENV === 'development') {
      endpointURL = `${PROXY_CORS_ANYWHERE}/${endpointURL}`;
    }

    const response = await fetch(endpointURL, requestConfig);
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
