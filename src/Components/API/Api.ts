import axios from "axios";


// const API = axios.create({ baseURL: "http://localhost:3001/api/foland-realty" , withCredentials: true}, );
const API = axios.create({
  baseURL: "https://foland-realty-server-1.onrender.com/api/foland-realty",
});

export default API;
