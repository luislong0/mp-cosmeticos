import { Skeleton } from '@/components/Skeletom'

export default function CatalogLoading() {
  return (
    <div className="flex w-full grid-cols-9 grid-rows-6 flex-col gap-6 md:grid xl:max-h-[860px]">
      <Skeleton className="col-span-6 row-span-6 h-[425px] xl:h-[850px]" />
      <Skeleton className="col-span-3 row-span-3 h-[400px]" />
      <Skeleton className="col-span-3 row-span-3 h-[400px]" />
    </div>
  )
}
