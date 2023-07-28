interface SocialMediaProps {
  socialMedia: 'Instagram' | 'WhatsApp'
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  svg: any
}

export function SocialMedia({ name, socialMedia, svg }: SocialMediaProps) {
  return (
    <div>
      {socialMedia === 'Instagram' && (
        <a
          href="https://www.instagram.com/mpcosmeticos.ofc/"
          target="_blank"
          rel="noreferrer"
          className="flex h-14 max-w-fit items-center justify-center gap-3 rounded-md bg-rose-400 px-6 py-3 font-bold text-white transition-all hover:scale-105 hover:bg-rose-500 hover:text-white"
        >
          {svg}
          <span className="text-lg">{name}</span>
        </a>
      )}

      {socialMedia === 'WhatsApp' && (
        <a
          href={'https://contate.me/mp-cosmeticos'}
          target="_blank"
          rel="noreferrer"
          className="flex h-14 max-w-fit items-center justify-center gap-3 rounded-md bg-rose-400 px-6 py-3 font-bold text-white transition-all hover:scale-105 hover:bg-rose-500 hover:text-white"
        >
          {svg}
          <span className="text-lg">{name}</span>
        </a>
      )}
    </div>
  )
}
