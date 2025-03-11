import axios from "axios";
import { configIp } from "./config/configIp";

const baseURL = `http://${configIp.apiBaseUrl}:3004`;

export const api = axios.create({
  baseURL: baseURL,
});
