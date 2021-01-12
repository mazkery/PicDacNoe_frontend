import axios from "axios";
const API_SERVER = "http://localhost:5000/";
let instance = axios.create({
  withCredentials: true,
  baseURL: API_SERVER,
});
localStorage.setItem('API','http://localhost:5000/');

export const login = async (data) => {
  return new Promise((resolve, reject) => {
    instance
      .post("/signin", data)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
