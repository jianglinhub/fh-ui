import axios from 'axios';
// import router from 'vue-router';

const service = axios.create({
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

service.interceptors.request.use((config) => {
  const params = config;
  params.headers.token = window.localStorage.getItem('token');
  return params;
}, error => Promise.reject(error));

service.interceptors.response.use((response) => {
  if (response.data && response.data.code === 401) {
    window.localStorage.removeItem('token');
    // router.push({ name: 'login' });
  }
  return response;
}, error => Promise.reject(error));

function doSearch(params) {
  return service({
    url: '',
    method: 'GET',
    data: params,
  });
}

export default {
  doSearch,
};
