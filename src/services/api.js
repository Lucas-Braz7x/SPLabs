import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://sp-labs.vercel.app/api',
});

export const submitForm = (name) => {
  api
    .post('/contact', {
      name: name,
    })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};
