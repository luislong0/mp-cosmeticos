import Navbar from '@/components/Navbar'
import { Hero } from '@/components/Sessions/Hero'
import Image from 'next/image'
import './globals.css'
import { About } from '@/components/Sessions/About'
import { Products } from '@/components/Sessions/Products'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Navbar />
      <div className="w-full">
        <Hero />
        <About />
        <Products />
      </div>
    </main>
  )
}
