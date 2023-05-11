import axios from "axios";

// const userToekn = localStorage.getItem("userToken")
// axios.defaults.headers.common = ['authorization'] = `Bearer ${userToekn}`

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

const token = localStorage.getItem("userToken");

export const privateRequest = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    authorization: `Bearer ${JSON.parse(token)}`,
  },
});
