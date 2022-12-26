import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/redux/CounterSlice";
import userReducer from "../components/userTask/UserSlice";
import employeeReducer from "../components/thunk-demo/04-Thunk-demo/EmpSlice";
import postReducer from "../components/thunk-demo/04-Thunk-demo/PostSlice";
import productReducer from "../components/thunk-demo/04-Thunk-demo/ProductSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
    employees: employeeReducer,
    posts: postReducer,
    products: productReducer,
  },
});

export default store;
