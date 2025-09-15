import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = () => {
    if (name && message) {
      setSubmitted({ name, message });
      setName("");
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <Head>
        <title>Form Kontak</title>
        <meta
          name="description"
          content="Form kontak sederhana dengan Next.js"
        />
      </Head>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl text-gray-700 font-bold mb-4">Form Kontak</h1>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama"
            className="border p-2 rounded text-gray-700"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Pesan"
            className="border p-2 rounded h-24 text-gray-700"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white p-2 rounded">
            Kirim
          </button>
        </div>
        {submitted && (
          <div className="mt-4 p-4 bg-green-100 text-gray-700 rounded">
            <p>
              <strong>Nama:</strong> {submitted.name}
            </p>
            <p>
              <strong>Pesan:</strong> {submitted.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
