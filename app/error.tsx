"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error("Error occurred:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-red-500">Something went wrong</h1>
      <p className="text-lg text-gray-600 mt-2">{error.message || "An unexpected error occurred."}</p>

      <div className="mt-4 flex gap-4">
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Try Again
        </button>
        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
