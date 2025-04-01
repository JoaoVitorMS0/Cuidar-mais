"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function VideoAula() {
  const [isPlaying, setIsPlaying] = useState(false)
  // Opção 1: Remover o estado não utilizado
  // const [progress, setProgress] = useState(0)
  
  // Opção 2: Usar o estado
  const [progress, setProgress] = useState(0)
  const videoRef = useRef<HTMLDivElement>(null)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    // Usar setProgress para simular progresso do vídeo quando é reproduzido
    if (!isPlaying) {
      setProgress(30) // Simula algum progresso quando o vídeo começa a tocar
    } else {
      setProgress(0) // Reseta o progresso quando pausado
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-white pb-16">
      <div className="w-full max-w-md">
        <div className="p-6">
          <div className="flex flex-col items-center mb-4">
            <div className="relative h-16 w-16 mb-1">
              <Image src="/image/logo_cuidar+" alt="Logo" width={64} height={64} />
            </div>
            <h2 className="text-xl font-bold">Cuidar+</h2>
            <p className="text-xs uppercase font-medium">CUIDANDO DE VOCÊ!</p>
          </div>

          <div className="w-full h-px bg-gray-300 my-4"></div>

          <div className="bg-indigo-800 text-white text-center py-1 rounded-full mb-4">
            <span className="text-xs">Olá, João Vitor!</span>
          </div>

          <div className="mb-6">
            <div ref={videoRef} className="relative rounded-lg overflow-hidden h-40 mb-2 bg-gray-200">
              <Image
                src="/image/exercicio-1.png"
                alt="Vídeo de exercícios"
                fill
                className="object-cover"
              />
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={togglePlay}
                    className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center"
                  >
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
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <button onClick={togglePlay} className="text-gray-800">
                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
                    width="20"
                    height="20"
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

              <div className="flex-1 bg-gray-200 h-1 rounded-full">
                <div className="bg-indigo-800 h-1 rounded-full" style={{ width: `${progress}%` }}></div>
              </div>

              <button className="text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <div className="relative rounded-lg overflow-hidden h-40 mb-2 bg-gray-200">
              <Image
                src="/image/exercicio-2.png"
                alt="Vídeo de exercícios 2"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
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
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button className="text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </button>

              <div className="flex-1 bg-gray-200 h-1 rounded-full">
                <div className="bg-indigo-800 h-1 rounded-full" style={{ width: "0%" }}></div>
              </div>

              <button className="text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation activeItem="activity" />
    </main>
  )
}