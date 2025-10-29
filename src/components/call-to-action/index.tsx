import Link from "next/link"
import { ArrowRight, Store } from "lucide-react"

import { Button } from "../ui/button"

export const CallToAction = () => {
  return (
    <section className="relative bg-call-to-action bg-cover bg-top bg-no-repeat py-14 md:py-24">
      {/* CONTENT */}
      <div className="container flex flex-col items-center gap-8 md:gap-10">
        {/* ICON */}
        <div className="-top-7 md:-top-8 absolute flex size-14 items-center justify-center rounded-full bg-cyan-300 md:size-16">
          <Store className="size-7 text-cyan-100 md:size-8" />
        </div>

        {/* TITLE */}
        <h2 className="max-w-[488px] text-balance text-center font-caption text-gray-100 text-heading-md md:text-heading-xl">
          Crie uma loja online e inicie suas vendas ainda hoje
        </h2>

        <Button className="w-fit" asChild>
          <Link href="/create-store">
            Criar loja grátis
            <ArrowRight className="size-6 text-gray-100" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
