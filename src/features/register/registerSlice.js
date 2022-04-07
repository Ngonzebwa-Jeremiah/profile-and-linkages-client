import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { registerUser, loginUser } from "../../Services/authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: "",
};

export const registerSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUserAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(registerUserAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(registerUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });

    builder.addCase(loginUserAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginUserAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(loginUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
  },
});

export const registerUserAsync = createAsyncThunk(
  "auth/registerUser",
  async (payload, thunkAPI) => {
    try {
      return await registerUser(payload);
    } catch (error) {
      const message = error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const loginUserAsync = createAsyncThunk(
  "auth/loginUser",
  async (payload, thunkAPI) => {
    try {
      return await loginUser(payload);
    } catch (error) {
      const message = error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const { reset } = registerSlice.actions;

export const authSelector = (state) => state.auth;

export default registerSlice.reducer;
