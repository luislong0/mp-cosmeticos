interface changeColorButtonProps {
  href: string
}

export function ChangeColorButton({ href }: changeColorButtonProps) {
  return (
    // <a href={href} className="relative inline-block text-lg group">
    //   <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
    //     <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
    //     <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-rose-900 group-hover:-rotate-180 ease"></span>
    //     <span className="relative">Nosso catalogo!</span>
    //   </span>
    //   <span
    //     className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-rose-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
    //     data-rounded="rounded-lg"
    //   ></span>
    // </a>
    <a href={href} className="group relative inline-block text-lg">
      <span className="relative z-10 block overflow-hidden whitespace-nowrap rounded-lg border-2 border-rose-950 px-8 py-5 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white">
        <span className="absolute inset-0 h-full w-full rounded-lg bg-gray-50 px-8 py-5"></span>
        <span className="ease absolute left-0 -ml-2 h-48 w-72 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-rose-900 transition-all duration-300 group-hover:-rotate-180"></span>
        <span className="relative text-xl uppercase">Nosso catalogo!</span>
      </span>
      <span
        className="absolute bottom-0 right-0 -mb-1 -mr-1 h-16 w-full rounded-lg bg-rose-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
        data-rounded="rounded-lg"
      ></span>
    </a>
  )
}
