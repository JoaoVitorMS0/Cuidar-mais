import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <div className="relative h-16 w-16 mb-2">
            <div className="relative h-16 w-16 mb-1">
              <Image src="/image/logo_cuidar+.png" alt="Logo" width={64} height={64} />
            </div>
          </div>
          <h1 className="text-xl font-medium text-center">
            Bem vindo(a) ao
            <br />
            Cuidar+
          </h1>
        </div>

        <div className="space-y-4 mt-8">
          <Button className="w-full bg-black text-white hover:bg-black/90 rounded-md py-6" asChild>
            <Link href="/login">Entrar</Link>
          </Button>

          <Button
            variant="outline"
            className="w-full border-black text-black hover:bg-gray-100 rounded-md py-6"
            asChild
          >
            <Link href="/cadastro">Criar Conta</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

