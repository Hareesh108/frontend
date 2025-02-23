import { Configuration } from "./generate-api";
import fetchClient from "./api-client";

const apiConfig = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_BASE_URL,
  fetchApi: fetchClient, // Use our custom fetch client
});

export { apiConfig, fetchClient };
