"use client";

import { useEffect } from "react";
import { backofficeApi } from "../../api-axios/api-module";

export default function Home() {
  async function fetchUsers() {
    try {
      const response = await backofficeApi.listAccounts(); // Type-safe API call
      console.log("Users:", response.data);
    } catch (error) {
      console.log("Failed to fetch users", error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return <div className="text-center pt-5 font-bold">Hello, There!</div>;
}
