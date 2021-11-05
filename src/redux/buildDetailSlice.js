import { createSlice } from "@reduxjs/toolkit";

export const buildDeatilSlice = createSlice({
  name: "buildDetail",
  initialState: {
    mouse: "",
    keyboard: "",
    headset: "",
    mousepad: "",
    microphone: "",
  },
  reducers: {
    add: (state, action) => {
      state.mouse = action.payload.mouse;
      state.keyboard = action.payload.keyboard;
      state.headset = action.payload.headset;
      state.mousepad = action.payload.mousepad;
      state.microphone = action.payload.microphone;
    },
    remove: (state) => (state = {})
  }
});

export const { add, remove } = buildDeatilSlice.actions;
export default buildDeatilSlice.reducer;
