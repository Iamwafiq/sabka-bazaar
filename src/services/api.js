import axios from "axios";
const baseURL = "http://localhost:5000/";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const api = axios.create({ baseURL, headers, timeout: 1800000 });

export function generateResourceMethod(resouceApi, method) {
  return function (path, data, config = {}) {
    const apiCall = resouceApi[method](path, data, config);

    return apiCall.then(
      (responseWrapper) => {
        console.log(responseWrapper);
        let { data } = responseWrapper;

        return data;
      },
      (res) => {
        console.log("API fail");

        return {
          data: res.response?.data,
        };
      }
    );
  };
}

export const apiResource = {
  resourceAPI: api,
  get: generateResourceMethod(api, "get"),
  post: generateResourceMethod(api, "post"),
};
