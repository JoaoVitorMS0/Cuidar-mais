"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function Planos() {
  const router = useRouter()

  const handleSubscribe = (plan: string) => {
    console.log(`Assinando plano: ${plan}`)
    router.push(`/planos/sucesso?plano=${plan}`)
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

          <div className="space-y-4 mt-6">
            {/* Plano Básico */}
            <div className="border border-gray-300 rounded-lg p-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-bold">Básico</h3>
                <span className="font-bold">•</span>
                <span className="font-bold">Gratuito</span>
              </div>
              <ul className="text-sm space-y-1 mb-3">
                <li>Alertas de medicamento</li>
                <li>Dicas de saúde e bem-estar</li>
                <li>Chamadas de emergência rápidas</li>
              </ul>
              <Button
                className="w-full bg-black text-white hover:bg-black/90 rounded-full py-1 h-8 text-sm"
                onClick={() => handleSubscribe("básico")}
              >
                Assinar
              </Button>
            </div>

            {/* Plano Intermediário */}
            <div className="border border-gray-300 rounded-lg p-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-bold">Intermediário</h3>
                <span className="font-bold">•</span>
                <span className="font-bold">R$ 29,90/mês</span>
              </div>
              <ul className="text-sm space-y-1 mb-3">
                <li>Tudo do plano básico +</li>
                <li>Monitoramento de sinais vitais</li>
                <li>Agenda médica integrada</li>
              </ul>
              <Button
                className="w-full bg-blue-900 text-white hover:bg-blue-800 rounded-full py-1 h-8 text-sm"
                onClick={() => handleSubscribe("intermediário")}
              >
                Assinar
              </Button>
            </div>

            {/* Plano Premium */}
            <div className="border border-gray-300 rounded-lg p-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-bold">Premium</h3>
                <span className="font-bold">•</span>
                <span className="font-bold">R$ 49,90/mês</span>
              </div>
              <ul className="text-sm space-y-1 mb-3">
                <li>Tudo do plano intermediário +</li>
                <li>Teleconsulta com profissionais de saúde</li>
                <li>Acompanhamento personalizado e</li>
                <li>Relatórios semanais para familiares</li>
              </ul>
              <Button
                className="w-full bg-black text-white hover:bg-black/90 rounded-full py-1 h-8 text-sm"
                onClick={() => handleSubscribe("premium")}
              >
                Assinar
              </Button>
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation activeItem="home" />
    </main>
  )
}

