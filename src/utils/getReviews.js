import axios from 'axios';

const START_POINT = 'https://api.themoviedb.org/3/movie/';
const KEY = '4078fca0c4fe3db38be6de95030c2ed1';
// const PAGE_SIZE = 12;

export async function getReviews({ id, signal }) {
  let params = {
    api_key: KEY,
  };

  const url = `${START_POINT + id.toString()}/reviews`;
  try {
    const response = await axios.get(url, { params, signal });
    if (!response) {
      throw Error('We are sorry! There is no cast information about the movie');
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
