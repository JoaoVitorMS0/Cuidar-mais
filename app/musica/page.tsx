"use client"

import Image from "next/image"
import { useState } from "react"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function Musica() {
  const [isPlaying, setIsPlaying] = useState(true)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-green-500 pb-16">
      <div className="w-full max-w-md">
        <div className="p-6">
          <div className="flex flex-col items-center mb-4">
            <div className="relative h-16 w-16 mb-1">
              <Image src="/image/logo_cuidar+.png" alt="Logo" width={64} height={64} />
            </div>
            <h2 className="text-xl font-bold">Cuidar+</h2>
            <p className="text-xs uppercase font-medium">CUIDANDO DE VOCÊ!</p>
          </div>

          <div className="w-full h-px bg-white my-4"></div>

          <div className="relative h-60 rounded-lg overflow-hidden mb-6">
            <Image src="/image/paisagem.png" alt="Paisagem Relaxante" fill className="object-cover" />

          </div>

          <div className="mb-6">
            <div className="flex justify-between text-white text-sm mb-2">
              <span>1:30</span>
              <span>5:00</span>
            </div>
            <div className="h-12 bg-white/20 rounded-lg flex items-center px-4">
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1 mx-0.5 bg-white"
                  style={{
                    height: `${Math.sin(i * 0.5) * 20 + 30}%`,
                    opacity: i > 20 ? 0.5 : 1,
                  }}
                ></div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center space-x-8">
            <button className="text-indigo-900 hover:text-indigo-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
            </button>

            <button
              className="w-12 h-12 bg-indigo-900 rounded-full flex items-center justify-center text-white hover:bg-indigo-800"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </button>

            <button className="text-indigo-900 hover:text-indigo-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <BottomNavigation activeItem="home" />
    </main>
  )
}

