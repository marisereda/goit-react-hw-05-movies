import axios from 'axios';

const START_POINT = 'https://api.themoviedb.org/3/';
const KEY = '4078fca0c4fe3db38be6de95030c2ed1';
// const PAGE_SIZE = 12;

export async function getMovies({ endPoint, page = 1, search = '' }) {
  const params = {
    api_key: KEY,
    page: page,
    query: search,
  };
  const url = START_POINT + endPoint;
  try {
    const response = await axios.get(url, { params });
    console.log(response);
    if (response.data.results.length === 0) {
      throw Error('There is no any match on your request!');
    }
    return response.data.results;
  } catch (error) {
    console.log(error.config);
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      throw Error('There is no server response. Try later again!');
    } else if (error.request) {
      console.log(error.request);
      throw Error('There is no server response. Try later again!');
    } else {
      console.log('Error', error.message);
      throw error;
    }
  }
}
