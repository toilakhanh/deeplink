import serviceUrls from './serviceUrls';
import _ from 'lodash';
import axios from 'axios';
import {getUserToken} from '../utils/storage';

const api = axios.create({
  baseURL: serviceUrls.url.HOST,
  timeout: 10000,
  headers: {'content-type': 'application/json'},
});

api.interceptors.request.use(
  async config => {
    let accessToken = await getUserToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },

  error => {
    if (error.response.status === 400) {
      // alert('Error 400');
    }
    if (error.response.status === 500) {
      // alert('Server Error');
    }
    return Promise.reject(error.response);
  }
);

/**
 * process return data
 * @param {*} response
 */
const returnData = (response: any) => {
  let errorMessage = '';
  if (serviceUrls.statusCode.success.includes(response.status)) {
    return {
      data: response.data,
      error: false,
    };
  }
  if (_.isNull(response.data)) {
    errorMessage = response.problem;
  } else if (
    serviceUrls.statusCode.notFound.includes(response.data.status) ||
    serviceUrls.statusCode.auth.includes(response.data.status)
  ) {
    errorMessage = `${
      response.data.message ? response.data.message : response.data
    }`;
  } else if (serviceUrls.statusCode.error.includes(response.data.status)) {
    errorMessage = response.problem;
  } else {
    errorMessage = response.data.problem;
  }
  return {
    errorMessage,
    detail: response.data.error.details,
    error: true,
  };
};

/**
 * set token for authentication
 * @param {*} token
 */
const setToken = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
  // api.interceptors.request.use(function (config: any) {
  //   config.headers.Authorization = token ? `Bearer ${token}` : '';
  //   return config;
  // });
  // api.setHeader('Authorization', `Bearer ${token}`);
};

/**
 *
 * @param {*url without host} url
 * @param {*param} params
 */
const apiGet = async (url: string, params: any) => {
  const dataResponse = await api.get(url, params);
  return returnData(dataResponse);
};

/**
 *
 * @param {*url without host} url
 * @param {*} body
 */
const apiPost = async (url: string, body: any) => {
  const dataResponse = await api.post(url, JSON.stringify(body));
  return returnData(dataResponse);
};

/**
 *
 * @param {*url without host} url
 * @param {*} body
 */
const apiPut = async (url: string, body: any) => {
  const dataResponse = await api.put(url, body);
  // logic handle dataResponse here
  return returnData(dataResponse);
};

/**
 *
 * @param {*url without host} url
 * @param {*} body
 */
const apiPatch = async (url: string, body: any) => {
  const response = await api.patch(url, body);
  return returnData(response);
};

/**
 *
 * @param {*url without host} url
 * @param {*} body
 */
const apiDelete = async (url: string, body: any) => {
  const response = await api.delete(url, body);
  // logic handle response here
  return returnData(response);
};

export {apiGet, apiPost, setToken, apiPut, apiPatch, apiDelete};
