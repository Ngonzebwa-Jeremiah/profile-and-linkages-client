import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
  isSucess: false,
  error: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.isLoading = false;
      state.isSucess = true;
      state.user = action.payload;
    },
    registerFailure: (state, action) => {
      state.isLoading = false;
      state.isSucess = false;
      state.error = action.payload;
    },
    reset: (state) => {
      state.isLoading = false;
      state.isSucess = false;
      state.error = null;
    },
  },
});

export const { reset, registerRequest, registerFailure, registerSuccess } = registerSlice.actions;

export const registerSelector = (state) => state.register;

export const registerUser = (userdata) => (dispatch) => {
  dispatch(registerRequest());
  return fetch(process.env.REACT_APP_API_URL + "/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userdata),
  })
    .then((response) => {
      if (response.status === 400) {
        return dispatch(registerFailure("Email already exists"));
      }

      if (response.status === 404) {
        return dispatch(registerFailure("Invalid email or password"));
      }

      return response.json();
    })
    .then((user) => {
      localStorage.setItem("access_token", user.token);
      dispatch(registerSuccess(user));
    })
    .catch((error) => {
      dispatch(registerFailure(error));
    });
};

export default registerSlice.reducer;