import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function Relaxamento() {
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

          <div className="bg-indigo-800 text-white text-center py-1 rounded-full mb-4">
            <span className="text-xs">EM ESPERA...</span>
            <span className="text-xs ml-4">FIQUE RELAXADO</span>
          </div>

          <div className="relative h-80 mb-6">
            <Image src="/image/relax.png" alt="Meditação" fill className="object-cover" />
          </div>
          <Button className="w-full bg-indigo-200 text-indigo-800 hover:bg-indigo-300 rounded-lg py-3" asChild>
            <Link href="/musica">CLIQUE AQUI PARA INICIAR MEDITAÇÃO GUIADA</Link>
          </Button>
        </div>
      </div>
      <BottomNavigation activeItem="home" />
    </main>
  )
}

