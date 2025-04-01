import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function Exercicios() {
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
          <div className="bg-indigo-800 text-white text-center py-1 rounded-full mb-4 flex items-center justify-center">
            <span className="text-xs mr-4">Olá, João Vitor!</span>
            <span className="text-xs">Primeiros Passos:</span>
          </div>

          <div className="relative rounded-lg overflow-hidden h-40 mb-4">
            <Image
              src="/image/ex-idosos.png"
              alt="Exercícios para idosos"
              fill
              className="object-cover"
            />
            <Button
              className="absolute bottom-4 right-4 bg-green-600 text-white hover:bg-green-700 rounded-md text-xs px-4 py-2"
              asChild
            >
              <Link href="/video-aula">
                CLIQUE AQUI PARA
                <br />
                ASSISTIR EXERCÍCIOS
              </Link>
            </Button>
          </div>

          <div className="relative rounded-lg overflow-hidden h-40 mb-4">
            <Image src="/image/consulta.png" alt="Consulta médica" fill className="object-cover" />
            <Button
              className="absolute bottom-4 left-4 bg-indigo-800 text-white hover:bg-indigo-900 rounded-md text-xs px-4 py-2"
              asChild
            >
              <Link href="/sobre">
                CLIQUE AQUI PARA
                <br />
                REALIZAR CONSULTAS
                <br />
                MÉDICAS
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <BottomNavigation activeItem="activity" />
    </main>
  )
}

