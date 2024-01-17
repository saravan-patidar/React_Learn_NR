import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "shravan",
  },
  reducers: {
    changeName: (state, action) => {
      state.userName.concat(action.payload);
    },
  },
});
export default userSlice.reducer;
