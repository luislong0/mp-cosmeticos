'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'
import { Search } from 'lucide-react'

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams?.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q

    if (!query) {
      return null
    }

    router.push(`/catalog/search?q=${query}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700 focus-within:ring-2 focus-within:ring-rose-400 sm:w-[320px]"
    >
      <Search className="h-5 w-5 text-zinc-500 focus-within:text-rose-400" />

      <input
        name="q"
        defaultValue={query ?? ''}
        placeholder="Buscar produtos..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
        required
      />
    </form>
  )
}
