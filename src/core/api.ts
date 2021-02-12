import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://api.telegram.org/bot1609961256:AAF9lWLxpJZ9tsuucSvkxIpzFRsY_nH6U4w',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export { api };
