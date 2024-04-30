import Navbar from '@/components/Navbar'
import { Hero } from '@/components/Sessions/Hero'
import { About } from '@/components/Sessions/About'
import { Products } from '@/components/Sessions/Products'
import { Contact } from '@/components/Sessions/Contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen w-full max-w-full flex-col overflow-hidden">
        <Navbar />
        <div className="w-full">
          <Hero />
          <About />
          <Products />
          <Contact />
        </div>
      </main>
    </>
  )
}
