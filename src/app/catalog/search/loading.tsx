import { Skeleton } from '@/components/Skeletom'
import { CurrentSearch } from './current-search'
import { Suspense } from 'react'

export default function SearchLoading() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Suspense fallback={null}>
        <CurrentSearch />
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[360px]" />
        <Skeleton className="h-[360px]" />
        <Skeleton className="h-[360px]" />
        <Skeleton className="h-[360px]" />
        <Skeleton className="h-[360px]" />
        <Skeleton className="h-[360px]" />
      </div>
    </div>
  )
}
