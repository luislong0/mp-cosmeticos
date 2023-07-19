import StarRating from './StarRating'

export function PopularProductCard() {
  return (
    <div className="max-w-fit rounded-md bg-rose-gradient p-[2px]">
      <div className="flex max-w-xs flex-col items-center justify-center gap-5 rounded-md bg-zinc-200 px-4 py-8">
        <div className="h-[250px] w-[250px] rounded-md bg-rose-400" />
        <span className="text-lg font-bold text-zinc-900">
          Hidratante Desodorante Corporal Algas do Pacífico 400ml
        </span>

        <StarRating value={4.5} />

        <span className="text-sm font-medium leading-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          soluta placeat blanditiis ipsam obcaecati laudantium corrupti aliquid
          expedita molestias beatae est sit veritatis nobis doloremque porro
          ducimus, doloribus, repudiandae facilis.
        </span>
      </div>
    </div>
  )
}
