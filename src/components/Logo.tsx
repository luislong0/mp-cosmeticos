'use client'
import Image from 'next/image'
import logoImg from '../assets/cometic-logo.svg'

export function Logo() {
  return (
    <div className="flex items-center gap-4">
      <Image src={logoImg} alt="" className="h-12 w-12 text-rose-400" />
      <span className="text-2xl font-bold uppercase text-zinc-100">
        <b className="text-3xl">MP</b> Cosméticos
      </span>
    </div>
  )
}
