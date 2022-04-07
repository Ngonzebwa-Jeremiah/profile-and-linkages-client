const REG_API_URL = process.env.REACT_APP_API_URL + "/auth/signup";
const LOGIN_API_URL = process.env.REACT_APP_API_URL + "/auth/login";

const loginUser = async (userdata) => {
  const response = await fetch(LOGIN_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userdata),
  });

  const data = await response.json();
  return data;
};

const registerUser = async (userdata) => {
  const response = await fetch(REG_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userdata),
  });
  const data = await response.json();
  if (data.accessToken) {
    localStorage.setItem("token", data.accessToken);
    localStorage.setItem("user", JSON.stringify(data.user));
    return data.user;
  } else {
    throw new Error(data.message);
  }
};

export { loginUser, registerUser };
