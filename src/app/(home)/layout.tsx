import { Footer } from '@/components/Footer'
import { Metadata } from 'next'
import { ReactNode } from 'react'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="bg-zinc-100">
        {children}
        <Footer />
      </div>
    </div>
  )
}
