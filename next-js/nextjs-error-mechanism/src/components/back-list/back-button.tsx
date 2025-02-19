"use client";
import { useRouter } from "next/navigation";
import React from "react";

function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/todos")}
      className="border-4 p-2 rounded-lg"
    >
      Go to Todos
    </button>
  );
}

export default BackButton;
