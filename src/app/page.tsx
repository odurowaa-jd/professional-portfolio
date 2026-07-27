import Hero from '@/app/components/Hero'
import Pillars from '@/app/components/Pillars'
import Projects from '@/app/components/Projects' 
import Timeline from '@/app/components/Timeline'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Pillars />
      <Projects />
      <Timeline />
      <Footer />
    </main>
  )
}
    