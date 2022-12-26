import axios from "axios";
import { addEmployee } from "./EmpSlice";
import { addPosts } from "./PostSlice";
import { addProduct } from "./ProductSlice";

//thunk action creator
export const fetchPosts = () => {
  // thunk function
  return async (dispatch, getState) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch(addPosts(response.data));
  };
};

export const fetchEmployees = () => {
  return async (dispatch, getState) => {
    const response = await axios.get("https://reqres.in/api/users?page=2");
    dispatch(addEmployee(response.data?.data));
  };
};

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch(addProduct(response.data));
  };
};
