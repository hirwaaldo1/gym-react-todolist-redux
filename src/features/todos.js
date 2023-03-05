import { createSlice } from "@reduxjs/toolkit";
const todolistSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({
        id: state[state.length - 1]?.id + 1 || 1,
        title: action.payload.title,
        checked: false,
      });
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clear: () => [],
    edit: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            title: action.payload.title,
          };
        }
        return item;
      });
    },
    check: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      });
    },
  },
});

export const { add, remove, clear, edit, check } = todolistSlice.actions;
export default todolistSlice.reducer;
