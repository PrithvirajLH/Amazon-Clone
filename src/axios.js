import axios from "axios";
const instance = axios.create({
  baseURL: "https://us-central1-clone2601-93e0e.cloudfunctions.net/api",
});

export default instance;
