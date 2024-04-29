import { CatalogHeader } from '@/components/CatalogHeader'
import { Footer } from '@/components/Footer'
import { ReactNode } from 'react'

export default function CatalogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid-rows-app mx-auto grid min-h-screen w-full gap-5 bg-zinc-950 text-zinc-50 antialiased">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 p-5">
        <CatalogHeader />
        {children}
      </div>
      <Footer className="mt-10 border-t border-rose-400 bg-zinc-900" />
    </div>
  )
}
