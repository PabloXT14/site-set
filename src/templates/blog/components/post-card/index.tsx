import Image from "next/image"
import Link from "next/link"

export const PostCard = () => {
  return (
    <Link
      href="/blog"
      className="relative flex w-full max-w-2xl flex-col gap-2 overflow-hidden rounded-xl border border-gray-400 bg-gray-600 p-2 transition-all duration-300 hover:border-blue-300"
    >
      {/* DATE */}
      <div className="absolute top-0 right-0 rounded-bl-lg bg-gray-600 px-3 py-1.5">
        <span className="text-body-xs text-gray-300">20/12/2024</span>
      </div>

      {/* IMAGE */}
      <div className="h-40 w-full overflow-hidden rounded-md">
        <Image
          src="/assets/first-post.png"
          alt="first-post"
          width={288}
          height={144}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-3 p-2">
        {/* INFO */}
        <div className="flex flex-col gap-2">
          <h2 className="line-clamp-2 text-gray-100 text-heading-sm">
            Transformando seu negócio em uma loja virtual
          </h2>

          <p className="line-clamp-2 text-body-sm text-gray-300">
            Se você está buscando uma maneira simples e eficaz de vender seus
            produtos online, o Site
          </p>
        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-gray-400" />

        {/* AUTHOR */}
        <div className="flex items-center gap-2">
          <Image
            src="/customer-01.jpg"
            alt="author"
            width={20}
            height={20}
            className="h-6 w-6 rounded-full border border-blue-200 object-cover"
          />

          <span className="text-body-sm text-gray-300">Aspen Dokidis</span>
        </div>
      </div>
    </Link>
  )
}
