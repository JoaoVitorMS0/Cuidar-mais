"use client"

import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Sucesso() {
  const searchParams = useSearchParams()
  // Usando a variável plano em um comentário ou removendo-a
  // const plano = searchParams.get("plano") || "seu plano"
  
  // Alternativa: usar a variável no texto para mostrar qual plano foi assinado
  const planoNome = searchParams.get("plano") || "seu plano"

  return (
    <main className="flex min-h-screen flex-col items-center bg-green-400">
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

          <div className="flex flex-col items-center justify-center mt-16">
            <div className="w-32 h-32 rounded-full bg-white/30 flex items-center justify-center mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>

            <h2 className="text-4xl font-bold text-white mb-2">Parabéns</h2>
            <p className="text-white text-center text-xl mb-8">
              {planoNome} foi assinado
              <br />
              com sucesso
            </p>

            <Button className="bg-white text-green-600 hover:bg-white/90 font-bold px-8 py-6 rounded-md" asChild>
              <Link href="/home">Ir para Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}