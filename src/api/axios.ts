import axios from 'axios';
import { configIp } from './config/configIp';
import { useContext } from 'react';


const baseURL = `http://${configIp.apiBaseUrl}:3005`;

export const api = axios.create({
  baseURL: baseURL

})