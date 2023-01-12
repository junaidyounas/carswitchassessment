import axios from "axios";

const axiosInstance = axios.create({
          baseURL: `https://api.agify.io/`
});
axiosInstance.interceptors.request.use((req) => {
  req.headers = {
    ...req.headers
  };

  return req;
});
export default axiosInstance;
