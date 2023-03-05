import { configureStore } from "@reduxjs/toolkit";
import todosListReducer from "../features/todos";
const store = configureStore({
  reducer: {
    todosList: todosListReducer,
  },
});

export default store;
