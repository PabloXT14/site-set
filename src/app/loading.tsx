import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center px-4">
      {/* CONTENT */}
      <div className="relative">
        <Loader2 size={64} className="animate-spin text-gray-400" />

        <div className="absolute top-0 left-0 h-full w-full animate-[spin_3s_linear_infinite] rounded-full border-cyan-100 border-t-2" />
      </div>
    </div>
  )
}
