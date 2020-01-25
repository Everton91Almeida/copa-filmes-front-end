import axios from "axios";

const apiFilmes = axios.create({ baseURL: "https://localhost:5001/api" });

export default apiFilmes;