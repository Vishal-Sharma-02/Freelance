import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.data = action.payload ?? null;
      state.loading = false;
    },
    removeUser: (state) => {
      state.data = null;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { addUser, removeUser, setLoading } = userSlice.actions;
export default userSlice.reducer;