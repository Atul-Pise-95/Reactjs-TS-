import axios from "axios";
import endpoints from "./endpoints.json";
const API = axios.create({
  baseURL: endpoints.serverURL,
});

//request interceptor
API.interceptors.request.use((request) => {
  //modify the request
  request.headers["authorization"] = "Toppersdfghjk";
  return request;
});

//response interceptor

//API.interceptors.response.use(succsess,error)
API.interceptors.response.use(
  (response) => {
    console.log("Success response...");
    return response;
  },
  (error) => {
    console.log("Error Response...", error);

    if (error.status == 403) {
      //clearing the session details
      return Promise.reject("You need to login");
    }
    if (error.response.status == 404) {
      console.log("Not available in interceptor... ");
    }
  }
);
export default API;
