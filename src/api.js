import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL

export function getRequest(uri, params = {}) {
    return new Promise((resolve, reject) => {
      axios
        .get(API_URL + uri, {
          params: params,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }