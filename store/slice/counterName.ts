import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
export const counterName = createSlice({
  name: "changeName",
  initialState: { value: "dummy" },
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { change } = counterName.actions;
export const currentName = (state: RootState) => state.changeName.value;
export default counterName.reducer;
