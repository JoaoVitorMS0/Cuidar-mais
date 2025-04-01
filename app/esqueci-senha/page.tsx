"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function EsqueciSenha() {
  const router = useRouter()
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Um link de recuperação foi enviado para: ${email}`)
    router.push("/login")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-2xl font-bold text-center">Recuperar Senha</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-sm text-gray-600">Digite seu email para receber um link de recuperação de senha.</p>

          <Input
            type="email"
            placeholder="Digite Seu Email"
            className="border-gray-300 rounded-md py-6"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Button type="submit" className="w-full bg-black text-white hover:bg-black/90 rounded-md py-6">
            Enviar Link
          </Button>

          <div className="text-center">
            <Link href="/login" className="text-blue-600 text-sm">
              Voltar para o login
            </Link>
          </div>
        </form>
      </div>
    </main>
  )
}

