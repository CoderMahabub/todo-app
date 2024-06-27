import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};
const tododSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export default tododSlice.reducer;
