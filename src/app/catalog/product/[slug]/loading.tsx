import { Skeleton } from '@/components/Skeletom'

export default function ProductLoading() {
  return (
    <div className="relative grid min-h-[860px] grid-cols-3 content-center">
      <div className="col-span-2 min-h-[700px] min-w-[full] overflow-hidden">
        <Skeleton className="h-full w-full " />
      </div>

      <div className="flex flex-col justify-center px-12">
        <Skeleton className="h-5 w-full" />

        <Skeleton className="h-20 w-full" />

        <div className="mt-8 flex items-center gap-3">
          <Skeleton className="h-5 w-full" />
        </div>

        <div className="mt-8 space-y-4">
          <Skeleton className="h-5 w-full" />
        </div>

        <Skeleton className="h-8 w-full" />
      </div>
    </div>
  )
}
