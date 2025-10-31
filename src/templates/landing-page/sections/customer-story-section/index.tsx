import Image from "next/image"

const CUSTOMER_STORIES = [
  {
    content:
      "Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.",
    author: {
      name: "Annete Bones",
      role: "CEO na Anne Corp",
      avatar: "/customer-01.jpg",
    },
  },
  {
    content:
      "Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!",
    author: {
      name: "Jacob Jones",
      role: "CEO na JJ Corp",
      avatar: "/customer-02.jpg",
    },
  },
]

export const CustomerStorySection = () => {
  return (
    <section className="container py-20 md:py-32">
      {/* CONTENT */}
      <div className="flex flex-col items-center gap-8 md:gap-12">
        {/* TITLE */}
        <h2 className="max-w-[488px] text-balance text-center font-caption text-gray-100 text-heading-md md:text-heading-xl">
          Quem utiliza, aprova!
        </h2>

        {/* STORY CARDS */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {CUSTOMER_STORIES.map((customerStory) => (
            <div
              key={customerStory.author.name}
              className="flex flex-col justify-between gap-8 rounded-xl border border-gray-400 bg-gray-600 p-6 md:gap-10 md:p-10"
            >
              <p className="text-body-md text-gray-200 italic">
                {customerStory.content}
              </p>

              <div className="flex items-center gap-3">
                <div className="relative size-10 overflow-hidden rounded-full border border-blue-200">
                  <Image
                    src={customerStory.author.avatar}
                    alt={customerStory.author.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <strong className="font-medium text-gray-200 text-sm">
                    {customerStory.author.name}
                  </strong>

                  <span className="text-gray-300 text-xs">
                    {customerStory.author.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
