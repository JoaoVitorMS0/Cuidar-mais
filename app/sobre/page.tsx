import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function Sobre() {
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

          <div className="flex flex-col items-center mb-6">
            <div className="relative w-32 h-32 mb-4">
              <Image
                src="/image/fernandes.png"
                alt="Dr. Fernandes"
                width={128}
                height={128}
                className="rounded-full object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mb-2">Dr. Fernandes</h2>

            <div className="flex space-x-4 mb-4">
              <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </button>

              <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </button>

              <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 7 16 12 23 17 23 7z" />
                  <rect width="15" height="14" x="1" y="5" rx="2" ry="2" />
                </svg>
              </button>
            </div>
          </div>

          {/* Informações */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Sobre</h3>

            <p className="text-gray-700 mb-4">
              O Cuidar+ conecta você a médicos e especialistas de forma rápida e segura. Agende consultas online, receba
              orientações personalizadas e cuide da sua saúde sem sair de casa. Praticidade e bem-estar ao seu alcance!
            </p>

            <Button className="w-full bg-green-500 text-white hover:bg-green-600 rounded-lg py-3">
              Obter consulta
            </Button>
          </div>
        </div>
      </div>
      <BottomNavigation activeItem="profile" />
    </main>
  )
}

