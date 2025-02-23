const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://api.reldyn.dev/indigo";

const fetchClient = async (url: string, options: RequestInit = {}) => {
  try {
    // Validate Base URL
    if (!BASE_URL) {
      throw new Error("BASE_URL is not defined.");
    }

    // Authorization Token
    const token = "Hareesh Bhittam Test"; // Replace with dynamic logic
    console.log("Token:", token);

    // Set Headers
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...options.headers, // Preserve existing headers
    };

    if (token) {
      (headers as Record<string, string>)["Authorization"] = `Bearer ${token}`;
    }

    // Remove Disallowed Headers (Fetch API does not allow 'User-Agent')
    delete (headers as Record<string, string>)["User-Agent"];

    // Fetch Request
    const response = await fetch(`${BASE_URL}${url}`, {
      ...options,
      headers,
    });

    // ✅ Handle HTTP Errors Properly
    if (!response.ok) {
      const errorText = await response.text(); // Read error message from response
      console.error("API Error:", response.status, response.statusText, errorText);
      throw new Error(`HTTP Error ${response.status}: ${response.statusText} - ${errorText}`);
    }

    return await response.json(); // ✅ Return Parsed JSON
  } catch (error) {
    console.error("Fetch Error:", error);
    throw new Error("Network request failed. Please check your connection.");
  }
};

export default fetchClient;
