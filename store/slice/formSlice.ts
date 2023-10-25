import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { PayloadAction } from "@reduxjs/toolkit";

export interface User {
  firstName: string;
  lastName: string;
}
const initialState = {
  firstName: "",
  lastName: "",
};

// const addFirstName = (value: string) => {
//   return { type: "addFirstName", payload: value };
// };

// const addLastName = (value: string) => {
//   return { type: "addLastName", payload: value };
// };


// export const UpdateFormData = createSlice({ name: "formData", initialState, });
export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload;
      console.log(action.type);
    },
    updateLastName: (state, action) => {
      state.lastName = action.payload;
    },
  },
});

export const { updateFirstName, updateLastName } = formSlice.actions; //This means that we have two actions in formSlice. One is updateFirstName and other is updateSecondName which updates second name 
export const currentFormData = (state: RootState) => state.persistData.form;
export default formSlice.reducer;
