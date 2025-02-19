"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="text-center h-lvh flex flex-col justify-center items-center">
      <button
        onClick={() => router.push("/todos")}
        className="border-4 p-2 rounded-lg"
      >
        Go to Todos
      </button>
    </div>
  );
}
