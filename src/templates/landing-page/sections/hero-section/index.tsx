import { ArrowRight, Clock, Store } from "lucide-react"
import { Button } from "../../../../components/ui/button"
import Image from "next/image"
import Link from "next/link"

export const HeroSection = () => {
  return (
    <section className="container relative flex items-center justify-center">
      {/* CONTENT */}
      <div className="grid min-h-[22rem] grid-cols-1 items-center gap-14 md:h-[36rem] md:grid-cols-[1.16fr_0.94fr]">
        {/* TEXTS CONTAINER */}
        <div className="flex flex-col items-center justify-center gap-10 md:items-start md:gap-14">
          {/* TITLE */}
          <div className="flex flex-col items-center gap-6 md:items-start md:gap-8">
            <h1 className="text-center font-caption text-gray-100 text-heading-lg md:text-left md:text-heading-hg">
              Venda seus produtos como afiliado em um único lugar
            </h1>

            {/* ITEMS */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <Clock className="size-4 text-cyan-100 md:size-5" />

                <span className="text-body-sm text-gray-200 md:text-body-md">
                  Crie o seu site em menos de 5 minutos
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Store className="size-4 text-cyan-100 md:size-5" />
                <span className="text-body-sm text-gray-200 md:text-body-md">
                  Acompanhe e otimize seu negócio online
                </span>
              </div>
            </div>
          </div>

          {/* ACTION */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Button className="w-fit rounded-full" asChild>
              <Link href="/create-store">
                Criar loja grátis
                <ArrowRight className="size-6 text-gray-100" />
              </Link>
            </Button>

            <span className="text-body-xs text-gray-300">
              Não precisa de cartão de crédito
            </span>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative order-first hidden h-[20rem] items-center justify-center md:order-last md:flex md:h-full">
          <Image
            src="/bg-hero-section.svg"
            alt="Ilustração com ícones de store, tag e sacola"
            width={200}
            height={400}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
