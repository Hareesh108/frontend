import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold bg-primary border-2">
        Welcome to Harukit UI Test
      </h1>

      <p className="mt-4 text-lg">
        This is a test page for Harukit UI components.
      </p>
    </main>
  );
}
