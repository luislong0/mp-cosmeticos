'use client'

import Link from 'next/link'
import { Suspense } from 'react'
import { Book } from 'lucide-react'
import { SearchForm } from './SearchForm'
import { CartDrawer } from './Drawers/CartDrawer'

export function CatalogHeader() {
  return (
    <div className="flex flex-col items-center justify-between gap-5 md:flex-row md:gap-0">
      <div className="flex w-full flex-col items-center justify-between gap-5 sm:flex-row md:w-auto md:justify-start">
        <Link
          href="/catalog"
          className="flex items-center gap-2 text-3xl font-extrabold uppercase text-rose-400"
        >
          <Book fontWeight={700} />
          Catálogo
        </Link>

        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>
      </div>
      <div className="flex w-full items-center justify-end gap-4 md:w-auto md:justify-start">
        <CartDrawer />
      </div>
    </div>
  )
}
