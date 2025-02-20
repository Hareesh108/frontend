"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Root } from "@/types/product";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [todos, setTodos] = useState<Root>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=3"
        );
        setTodos(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.message);
        } else {
          setError("An unexpected error occurred");
        }
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="text-center h-lvh flex flex-col justify-center items-center">
      <h1>TODOS</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {todos?.map((todo) => (
          <div key={todo?.id}>
            <li key={todo?.id}>{todo?.title}</li>
            <button
              onClick={() => router.push(`/todos/${todo.id}`)}
              // To check not found you can un comment below line
              // onClick={() => router.push(`/todos/hed`)}
              className="border-4 p-2 rounded-lg"
            >
              Go to Todo
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
