"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          પૃષ્ઠ મળ્યું નથી
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          માફ કરશો, તમે જે પૃષ્ઠની શોધ કરી રહ્યા છો તે અમને મળ્યું નથી.
        </p>
        <button
          onClick={() => router.back()}
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          પાછા જાઓ
        </button>
      </div>
    </div>
  );
}
