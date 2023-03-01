import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = [
  {
    id: 1,
    title: "make a todo app ",
  },
  {
    id: 2,
    title: "make a calculator app ",
  },
];
export const todolistSlice = createSlice({
  name: "toDoList",
  initialState: initialStateValue,
  reducers: {
    add: (state, action) => {
      state = state.push({
        id: state[state.length - 1]?.id + 1 || 1,
        title: action.payload.title,
      });
    },
    remove: (state, action) => {
      return (state = state.filter((item) => item.id !== action.payload.id));
    },
    clear: (state) => {
      return (state = []);
    },
    edit: (state, action) => {
      console.log(action.payload);
      return (state = state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            title: action.payload.title,
          };
        }
        return item;
      }));
    },
  },
});

export const { add, remove, clear, edit } = todolistSlice.actions;

export default todolistSlice.reducer;
