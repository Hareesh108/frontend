import apiClient from "./api-client";
import { apiConfig } from "./api-config";
import { AccountApi } from "./generate-api";

export const backofficeApi = new AccountApi(apiConfig, undefined, apiClient); 
