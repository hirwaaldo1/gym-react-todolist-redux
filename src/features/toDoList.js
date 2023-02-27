import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur",
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
  },
});

export const { add, remove, clear } = todolistSlice.actions;

export default todolistSlice.reducer;
