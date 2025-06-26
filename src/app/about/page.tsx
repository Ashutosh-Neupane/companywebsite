import { AboutUsSection } from "@/sections/about/AboutUsSection";
import HeroSection from "@/sections/about/HeroSection";
import ClientSection from "@/sections/home/Client";



export default function about() {
  return (
    <div>
        <HeroSection/>
        <AboutUsSection/>
        <ClientSection/>
       
    </div>
  )
}
