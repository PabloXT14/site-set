import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

type MarkdownProps = {
  content: string
}

export const Markdown = ({ content }: MarkdownProps) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      h1: ({ children }) => (
        <h1 className="mb-4 text-heading-md md:text-heading-xl">{children}</h1>
      ),
      h2: ({ children }) => (
        <h1 className="mt-8 mb-4 text-heading-sm md:text-heading-lg">
          {children}
        </h1>
      ),

      a: ({ href, children }) => (
        <a href={href} className="text-blue-200 transition-all hover:underline">
          {children}
        </a>
      ),

      p: ({ children }) => (
        <p className="mb-6 text-gray-200 leading-relaxed">{children}</p>
      ),
      strong: ({ children }) => (
        <strong className="font-extrabold text-gray-100">{children}</strong>
      ),
      ul: ({ children }) => <ul className="list-disc pl-6">{children}</ul>,
    }}
  >
    {content}
  </ReactMarkdown>
)
