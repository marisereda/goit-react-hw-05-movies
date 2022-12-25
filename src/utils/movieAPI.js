import axios from 'axios';
import { API_TOKEN, BASE_URL } from 'constants';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${API_TOKEN}`;

// -------------------------------------------------
export async function getMovieCast({ id, signal }) {
  try {
    const response = await axios.get(`movie/${id}/credits`, {
      signal,
    });
    if (!response) {
      throw Error('We are sorry! There is no cast information about the movie');
    }

    return response.data.cast;
  } catch (error) {
    if (error.name === 'CanceledError') {
      return null;
    }
    if (error.response || error.request) {
      throw Error('There is no server response. Try later again!');
    } else {
      throw error;
    }
  }
}

// -------------------------------------------------
export async function getMovieDetails({ id, signal }) {
  try {
    const response = await axios.get(`movie/${id}`, { signal });
    if (!response) {
      throw Error(
        'We are sorry! There is no detailed information about the movie'
      );
    }

    return response.data;
  } catch (error) {
    if (error.name === 'CanceledError') {
      return null;
    }
    if (error.response || error.request) {
      throw Error('There is no server response. Try later again!');
    } else {
      throw error;
    }
  }
}

// -------------------------------------------------
export async function getMovies({ page = 1, search = '', signal }) {
  let params = {
    page: page,
    query: search,
  };

  try {
    const response = await axios.get('search/movie', { params, signal });
    if (response.data.results.length === 0) {
      throw Error('There is no any match on your request!');
    }

    return response.data.results;
  } catch (error) {
    if (error.name === 'CanceledError') {
      return [];
    }
    if (error.response || error.request) {
      throw Error('There is no server response. Try later again!');
    } else {
      throw error;
    }
  }
}

// -------------------------------------------------
export async function getReviews({ id, signal }) {
  try {
    const response = await axios.get(`movie/${id}/reviews`, { signal });
    if (!response) {
      throw Error('There is no cast information about the movie');
    }

    return response.data.results;
  } catch (error) {
    if (error.name === 'CanceledError') {
      return null;
    }
    if (error.response || error.request) {
      throw Error('There is no server response. Try later again!');
    } else {
      throw error;
    }
  }
}

// -------------------------------------------------
export async function getTrendingMovies({ signal, page = 1 }) {
  let params = {
    page: page,
  };

  try {
    const response = await axios.get('trending/movie/day', { params, signal });
    if (response.data.results.length === 0) {
      throw Error('There is no any match on your request!');
    }

    return response.data.results;
  } catch (error) {
    if (error.name === 'CanceledError') {
      return [];
    }
    if (error.response || error.request) {
      throw Error('There is no server response. Try later again!');
    } else {
      throw error;
    }
  }
}
