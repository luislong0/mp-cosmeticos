interface changeColorButtonProps {
  href: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ChangeColorButton({ href }: changeColorButtonProps) {
  return (
    <div className="group relative inline-block cursor-not-allowed text-lg">
      <span className="relative z-10 block overflow-hidden whitespace-nowrap rounded-lg border-2 border-rose-950 px-8 py-5 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white">
        <span className="absolute inset-0 h-full w-full rounded-lg bg-gray-50 px-8 py-5"></span>
        <span className="ease absolute left-0 -ml-2 h-48 w-72 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-rose-900 transition-all duration-300 group-hover:-rotate-180"></span>
        <span className="relative text-xl uppercase">Nosso catalogo!</span>
      </span>
      <span
        className="absolute bottom-0 right-0 -mb-1 -mr-1 h-16 w-full rounded-lg bg-rose-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
        data-rounded="rounded-lg"
      ></span>
    </div>
  )
}
