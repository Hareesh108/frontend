import { Configuration } from "./generate-api"; 
import apiClient from "./api-client"; 

const apiConfig = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_BASE_URL, 
});

export { apiConfig, apiClient }; 
