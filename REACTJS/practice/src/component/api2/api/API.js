import axios from "axios";
import config from "../../api2/api/config.json";
const Instance = axios.create({
  baseURL: config.serverURL + "api",
});

export default Instance;

// maintain the api  in a separate file
