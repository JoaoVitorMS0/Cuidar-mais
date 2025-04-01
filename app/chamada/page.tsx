import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function Chamada() {
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

          <div className="relative rounded-lg overflow-hidden h-40 mb-4">
            <Image src="/image/psicoterapia.png" alt="Psicoterapia" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-blue-900 text-white p-2 text-center">
              CONHEÇA OS BENEFÍCIOS DA PSICOTERAPIA
            </div>
          </div>

          <div className="bg-green-100 rounded-lg p-4 mb-6">
            <h3 className="text-center font-bold text-green-800 mb-2">CHAMADA ONLINE PSICOTERAPIA</h3>
            <p className="text-sm text-center text-green-800 mb-4">
              Clique abaixo para iniciar sua sessão de psicoterapia online com segurança e conforto.
            </p>

            <div className="flex justify-center">
              <Button className="bg-blue-900 text-white hover:bg-blue-800 rounded-full px-6 py-2 flex items-center">
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
                  className="mr-2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                PEÇA AGORA
              </Button>
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation activeItem="home" />
    </main>
  )
}

