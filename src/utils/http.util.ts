import axios from "axios";

const http = axios.create({
  baseURL: "/",
});

http.interceptors.response.use(
  function (response: any) {
    return {
      ...response.data,
      status: response.status,
    };
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

function get(url: string) {
  return http.get(url);
}

function post(url: string, payload: any) {
  return http.post(url, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function put(url: string, payload: any) {
  return http.put(url, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function destroy(url: string) {
  return http.delete(url);
}

export default {
  get,
  post,
  put,
  destroy,
};
