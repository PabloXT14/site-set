import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-950 p-4">
      <h2 className="text-zinc-50">Home</h2>

      <Button>Click me</Button>
    </div>
  )
}
