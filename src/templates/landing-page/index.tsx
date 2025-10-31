import {
  CallToAction,
  CustomerStorySection,
  FeatureSection,
  HeroSection,
  SupportSection,
} from "@/templates/landing-page/sections"

export const LandingPage = () => (
  <article className="flex flex-col">
    <HeroSection />
    <FeatureSection />
    <SupportSection />
    <CustomerStorySection />
    <CallToAction />
  </article>
)
