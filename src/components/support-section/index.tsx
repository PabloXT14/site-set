import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react"

export const SupportSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-500 to-gray-700 py-12 md:py-32">
      {/* CONTENT */}
      <div className="container flex flex-col items-center gap-8 md:gap-12">
        {/* TITLE */}
        <h2 className="max-w-[488px] text-balance text-center font-caption text-gray-100 text-heading-md md:text-heading-xl">
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {/* CARD 1 */}
          <div className="flex flex-col gap-4 rounded-xl bg-blue-400 p-6 text-left">
            {/* ICON */}
            <div className="flex size-9 items-center justify-center rounded-lg bg-blue-300 p-2">
              <PaintbrushVertical className="size-5 text-white" />
            </div>

            <div className="flex flex-col gap-2">
              {/* TITLE */}
              <strong className="font-caption text-gray-100 text-heading-sm">
                Personalize seu site
              </strong>

              {/* DESCRIPTION */}
              <p className="text-body-sm text-gray-200">
                Adicione sua logo, favicon, cores no seu catálogo e tenha tudo
                com a sua cara.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col gap-4 rounded-xl bg-cyan-300 p-6 text-left">
            {/* ICON */}
            <div className="flex size-9 items-center justify-center rounded-lg bg-cyan-200 p-2">
              <Store className="size-5 text-white" />
            </div>

            <div className="flex flex-col gap-2">
              {/* TITLE */}
              <strong className="font-caption text-gray-100 text-heading-sm">
                Venda de qualquer loja
              </strong>

              {/* DESCRIPTION */}
              <p className="text-body-sm text-gray-200">
                Não importa a loja, o Site.Set permite que você insira qualquer
                link de afiliado.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col gap-4 rounded-xl bg-blue-400 p-6 text-left">
            {/* ICON */}
            <div className="flex size-9 items-center justify-center rounded-lg bg-blue-300 p-2">
              <HeartHandshake className="size-5 text-white" />
            </div>

            <div className="flex flex-col gap-2">
              {/* TITLE */}
              <strong className="font-caption text-gray-100 text-heading-sm">
                Receba suporte amigável
              </strong>

              {/* DESCRIPTION */}
              <p className="text-body-sm text-gray-200">
                Nossa equipe estará sempre pronta para te atender para ajudar no
                que for preciso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
