"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function Glicose() {
  const [verificado, setVerificado] = useState(false)

  const handleVerificar = () => {
    setVerificado(true)
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-white pb-16">
      <div className="w-full max-w-md">
        <div className="p-6">
          <div className="flex flex-col items-center mb-4">
            <div className="relative h-16 w-16 mb-1">
              <Image src="/image/logo_cuidar+.png" alt="Logo" width={64} height={64} />
            </div>
            <h2 className="text-xl font-bold">Cuidar+</h2>
            <p className="text-xs uppercase font-medium">CUIDANDO DE VOCÊ!</p>
          </div>

          <div className="w-full h-px bg-gray-300 my-4"></div>

          {/* Saudação */}
          <h2 className="text-xl font-bold mb-6">Olá, João Vitor</h2>

          {/* Card de Verificação */}
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <div className="flex items-center mb-4">
              <div className="flex-1">
                <p className="text-gray-800">Você já verificou seu nível de glicose?</p>
              </div>
              <div className="ml-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="red"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
                  </svg>
                </div>
              </div>
            </div>

            <Button
              className={`w-full ${verificado ? "bg-green-500 hover:bg-green-600" : "bg-blue-600 hover:bg-blue-700"} text-white rounded-full py-2`}
              onClick={handleVerificar}
            >
              {verificado ? "Verificado com sucesso" : "Verifique agora"}
            </Button>
          </div>

          {/* Sinais Vitais */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-sm text-center mb-2">Seus sinais vitais</h3>
              <p className="text-center font-bold">Sem registro</p>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-sm text-center mb-2">IMC</h3>
              <p className="text-center font-bold">Normal</p>
            </div>
          </div>

          {/* Banner de Check-up */}
          <div className="bg-blue-100 rounded-lg p-4 flex items-center">
            <div className="flex-1">
              <h3 className="text-sm font-bold mb-1">Faça um check-up gratuito em sua casa hoje</h3>
              <p className="text-xs">Fundamentos para diabetes</p>
            </div>

            <div className="ml-4 w-16 h-16 relative">
              <Image
                src="/image/check.jpg"
                alt="Check-up"
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation activeItem="alert" />
    </main>
  )
}

