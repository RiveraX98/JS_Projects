import axios from "axios";

const BASE_API_URL = "http://localhost:3002";
// export const axiosInstance = axios.create({ baseURL: BASE_API_URL });
const axiosInstance = axios.create({ baseURL: BASE_API_URL });

class SnackOrBoozeApi {
  //returns entire snack or drink object from db
  static async get(url) {
    let res = await axiosInstance.get(url);
    return res.data;
  }

  static async create(url, data) {
    let res = await axiosInstance.post(url, data);
  }
}

export default SnackOrBoozeApi;
