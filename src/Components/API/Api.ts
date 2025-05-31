import axios from "axios";


const API = axios.create({ baseURL: "http://localhost:3001/api/foland-realty" , withCredentials: true}, );
// const API = axios.create({
  // baseURL: "https://foland-realty-server.onrender.com/api/foland-realty",
// });

// sending token to every request
// API.interceptors.request.use(
//   (config) => {
//     const token = Cookies.get('token');
//     console.log(token)
//     if (token && config.headers) config.headers.Authorization = token;
//     return config;
//   },
//   (err) => Promise.reject(err)
// );


// // error if response doesnt have token
// API.interceptors.response.use(
//   (response) => response,
//   (err) => {
//     if (err.response && err.response.status === 401) {
//       console.log("Token might be expired");
//       window.location.href = "/login";
//     }
//     return Promise.reject(err); 
//   }
// );

export default API;
