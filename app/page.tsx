import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import CoreStack from "@/components/sections/CoreStack";
import Testimonials from "@/components/sections/Testimonials";
import Integrations from "@/components/sections/Integrations";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Services />
      <CoreStack />
      <Testimonials />
      <Integrations />
    </main>
  );
}
