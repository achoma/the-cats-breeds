import axios from 'axios';

export const fetchBreeds = () => {
  axios.defaults.headers.common['x-api-key'] =
    'live_AUxb9twkkZFuhnD5LB7bXgOoNTd5e4yH0OXrFzQMy0GOPCGjjtvIMBtGvej2vlNh';

  return axios
  .get(`https://api.thecatapi.com/v1/breeds`)
  .then(response => response.data);
};

export const fetchCatByBreed = breedId => {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data);
};