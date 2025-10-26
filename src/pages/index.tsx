import { FeatureSection } from "@/components/feature-section"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <main>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
      </article>
    </main>
  )
}
