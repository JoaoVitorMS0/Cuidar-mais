import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function Home() {
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

          <div className="mb-8">
            <div className="flex items-center mb-2">
              <div className="h-px bg-gray-300 flex-grow"></div>
              <span className="mx-2 text-sm font-medium">QUER RELAXAR?</span>
              <div className="h-px bg-gray-300 flex-grow"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden h-24">
                <Image src="/image/exercicio.png" alt="Exercício" fill className="object-cover" />
                <Button
                  className="absolute bottom-0 left-0 right-0 bg-blue-900 text-white hover:bg-blue-800 rounded-none h-8 text-xs"
                  asChild
                >
                  <Link href="/exercicios">HORA DE EXERCITAR</Link>
                </Button>
              </div>

              <div className="relative rounded-lg overflow-hidden h-24">
                <Link href="/relaxamento">
                  <Image src="/image/meditacao.png" alt="Meditação" fill className="object-cover" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <div className="h-px bg-gray-300 flex-grow"></div>
              <span className="mx-2 text-sm font-medium">QUER CONVERSAR?</span>
              <div className="h-px bg-gray-300 flex-grow"></div>
            </div>
            <span className="block text-center text-sm mb-2">PSICOTERAPIA</span>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden h-24">
                <Image src="/image/medico.png" alt="Médico" fill className="object-cover" />
                <Button
                  className="absolute bottom-0 left-0 right-0 bg-gray-800 text-white hover:bg-gray-700 rounded-none h-8 text-xs"
                  asChild
                >
                  <Link href="/planos">CONHEÇA NOSSOS PLANOS</Link>
                </Button>
              </div>

              <div className="relative rounded-lg overflow-hidden h-24">
                <Link href="/chamada">
                  <Image src="/image/psico.jpg" alt="Psicoterapia" fill className="object-cover" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 py-4 rounded-lg" asChild>
              <Link href="/glicose">Verificar Nível de Glicose</Link>
            </Button>
          </div>
        </div>
      </div>
      <BottomNavigation activeItem="home" />
    </main>
  )
}

