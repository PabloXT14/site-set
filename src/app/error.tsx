"use client"

import { AlertTriangle } from "lucide-react"

import { Button } from "@/components/ui/button"

type ErrorBoundaryProps = {
  error: Error
  reset: () => void
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      {/* CONTENT */}
      <div className="w-full max-w-md text-center">
        {/* ICON */}
        <div className="relative mb-6 inline-block">
          <AlertTriangle size={64} className="mx-auto text-gray-100" />

          <div className="-rotate-12 -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-1 w-16 bg-red-500 opacity-80" />
        </div>

        {/* TITLE */}
        <h2 className="mb-2 font-sans text-heading-xl text-white">
          Algo deu errado!
        </h2>

        {error?.message && (
          <p className="mb-2 max-h-24 overflow-hidden text-ellipsis px-4 text-body-md text-gray-200">
            {error.message}
          </p>
        )}

        <Button variant="primary" onClick={reset} className="mt-4">
          Tentar novamente
        </Button>
      </div>
    </div>
  )
}
