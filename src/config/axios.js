import axios from "axios";

const axiosBase = axios.create({
  baseURL: "https://evangadi-forumbackend-xroh.onrender.com/api",
});

export default axiosBase;
