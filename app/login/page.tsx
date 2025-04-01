"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login com:", email, senha)
    router.push("/planos")
  }

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

        <form onSubmit={handleSubmit} className="space-y-4 mt-8">
          <Input
            type="email"
            placeholder="Digite Seu Email"
            className="border-gray-300 rounded-md py-6"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            type="password"
            placeholder="Digite Sua Senha"
            className="border-gray-300 rounded-md py-6"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <div className="text-center">
            <Link href="/esqueci-senha" className="text-blue-600 text-sm">
              Esqueceu a Senha?
            </Link>
          </div>

          <Button type="submit" className="w-full bg-black text-white hover:bg-black/90 rounded-md py-6">
            Entrar
          </Button>
        </form>
      </div>
    </main>
  )
}

