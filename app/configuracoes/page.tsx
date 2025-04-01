import Image from "next/image"
import Link from "next/link"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function Configuracoes() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white pb-16">
      <div className="w-full max-w-md">
        <div className="p-6">
          <div className="flex flex-col items-center mb-4">
            <div className="relative h-16 w-16 mb-1">
              <Image src="/image/logo_cuidar+.png" alt="Logo" width={64} height={64} />
            </div>
            <h2 className="text-xl font-bold">Configurações</h2>
          </div>

          <div className="w-full h-px bg-gray-300 my-4"></div>

          <div className="space-y-2 mb-6">
            <Link href="#" className="flex items-center p-3 bg-gray-100 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="currentColor"
                className="mr-3"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Editar Perfil</span>
            </Link>

            <Link href="#" className="flex items-center p-3 bg-gray-100 rounded-lg">
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
                className="mr-3"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>Segurança</span>
            </Link>

            <Link href="#" className="flex items-center p-3 bg-gray-100 rounded-lg">
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
                className="mr-3"
              >
                <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
                <polyline points="15,9 18,9 18,11" />
                <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
                <line x1="6" x2="7" y1="10" y2="10" />
              </svg>
              <span>Notificações</span>
            </Link>

            <Link href="#" className="flex items-center p-3 bg-gray-100 rounded-lg">
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
                className="mr-3"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>Privacidade</span>
            </Link>
          </div>

          <h3 className="text-sm font-medium text-gray-500 mb-2">Suporte & Sobre</h3>
          <div className="space-y-2 mb-6">
            <Link href="#" className="flex items-center p-3 bg-gray-100 rounded-lg">
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
                className="mr-3"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <span>Ajuda & Suporte</span>
            </Link>

            <Link href="#" className="flex items-center p-3 bg-gray-100 rounded-lg">
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
                className="mr-3"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
              </svg>
              <span>Termos e Políticas</span>
            </Link>
          </div>

          <h3 className="text-sm font-medium text-gray-500 mb-2">Ações</h3>
          <div className="space-y-2">
            <Link href="#" className="flex items-center p-3 bg-gray-100 rounded-lg">
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
                className="mr-3"
              >
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
                <path d="M18 9V4a1 1 0 0 0-1-1h-4" />
                <path d="m8 16 4-4 4 4" />
                <path d="M12 12v7" />
              </svg>
              <span>Reportar Problema</span>
            </Link>

            <Link href="#" className="flex items-center p-3 bg-gray-100 rounded-lg">
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
                className="mr-3"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <line x1="19" x2="19" y1="8" y2="14" />
                <line x1="22" x2="16" y1="11" y2="11" />
              </svg>
              <span>Adicionar Conta</span>
            </Link>

            <Link href="#" className="flex items-center p-3 bg-gray-100 rounded-lg">
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
                className="mr-3"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" x2="9" y1="12" y2="12" />
              </svg>
              <span>Sair</span>
            </Link>
          </div>
        </div>
      </div>
      <BottomNavigation activeItem="settings" />
    </main>
  )
}