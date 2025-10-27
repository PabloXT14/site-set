import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "../ui/button"
import Image from "next/image"

export const FeatureSection = () => {
  return (
    <section className="container grid gap-3 bg-gray-700 pt-10 pb-20 md:grid-cols-2 md:gap-6 md:pt-20 md:pb-32">
      {/* FEATURE 1 */}
      <div className="flex flex-col gap-4 rounded-xl bg-gray-500 p-6 md:p-12">
        <span className="w-fit rounded bg-blue-400 px-3 py-1.5 text-blue-200 text-body-tag uppercase">
          Simples
        </span>

        <h2 className="text-gray-100 text-heading-sm md:text-heading-lg">
          Crie um catálogo de produtos online em poucos minutos
        </h2>
      </div>

      {/* FEATURE 2 */}
      <div className="flex flex-col gap-4 rounded-xl bg-gray-500 p-6 md:p-12">
        <span className="w-fit rounded bg-blue-400 px-3 py-1.5 text-blue-200 text-body-tag uppercase">
          Prático
        </span>

        <h2 className="text-gray-100 text-heading-sm md:text-heading-lg">
          Venda para seu público através de uma plataforma única
        </h2>
      </div>

      {/* FEATURE 3 */}
      <div className="col-span-full grid grid-cols-1 flex-col gap-8 rounded-xl bg-gray-500 p-6 md:grid-cols-2 md:gap-20 md:p-12">
        {/* TEXT CONTAINER */}
        <div className="flex flex-col gap-4">
          <span className="w-fit rounded bg-blue-400 px-3 py-1.5 text-blue-200 text-body-tag uppercase">
            Personalizar
          </span>

          <h2 className="text-gray-100 text-heading-sm md:text-heading-lg">
            Tenha uma loja online personalizada com a cara da sua marca
          </h2>

          <Button
            asChild
            className="hidden w-fit gap-2 rounded-full md:mt-auto md:flex"
          >
            <Link href="/create-store">
              Criar loja grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>

        {/* IMAGE CONTAINER */}
        <div className="flex w-full flex-col items-center justify-center">
          <div className="w-full max-w-md overflow-hidden">
            <Image
              src="/img-feature-section.svg"
              alt="Features"
              width={440}
              height={330}
              className="w-full object-contain"
            />
          </div>

          <Button
            asChild
            className="mt-4 flex w-full gap-2 rounded-full md:hidden"
          >
            <Link href="/create-store">
              Criar loja grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
