import axios from 'axios'
import env from '../env';

export default axios.create({
  baseURL: env.module1BaseURL
})
