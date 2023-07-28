import { Instagram } from 'lucide-react'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-around bg-zinc-950 px-20 py-10 text-white">
      <div className="mx-auto grid w-full grid-cols-2 gap-10 md:grid-cols-4">
        <div className="flex flex-col items-center">
          <div>
            <h5 className="mb-3 text-lg font-bold text-rose-400">Empresa</h5>
            <ul>
              <li>
                <a
                  href="#home"
                  className="transition-all hover:text-rose-400 hover:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="transition-all hover:text-rose-400 hover:underline"
                >
                  Sobre nós
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-all hover:text-rose-400 hover:underline"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com.br/maps/place/R.+Pedro+Machado+da+Silva,+502+-+Palmital,+SP,+19970-000/@-22.7934439,-50.2233877,18z/data=!4m5!3m4!1s0x94954d2afe61426f:0xf43fc7135f8c2c00!8m2!3d-22.7940026!4d-50.2223269?entry=ttu"
                  className="transition-all hover:text-rose-400 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Localização
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <h5 className="mb-3 text-lg font-bold text-rose-400">Produtos</h5>
            <ul>
              <li>
                <a
                  href="#"
                  className="transition-all hover:text-rose-400 hover:underline"
                >
                  Catálogo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-all hover:text-rose-400 hover:underline"
                >
                  Seja um distribuidor
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div>
            <h5 className="mb-3 text-lg font-bold text-rose-400">Suporte</h5>
            <ul>
              <li>
                <a
                  href="#contact"
                  className="transition-all hover:text-rose-400 hover:underline"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <h5 className="mb-3 text-lg font-bold text-rose-400">Siga-nos</h5>
            <ul className="flex justify-between space-x-3">
              <li className="transition-all hover:scale-110 hover:text-rose-400">
                <a href="#" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTiktok} size={'xl'} />
                </a>
              </li>
              <li className="transition-all hover:scale-110 hover:text-rose-400">
                <a
                  href="https://www.instagram.com/mpcosmeticos.ofc/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-5 text-center">
        <p>© 2023 MP Cosméticos. Todos os direitos reservados.</p>
      </div>

      <span className="mt-10">
        Criado com 💜 por{' '}
        <a
          href=""
          className="mt-10 font-medium text-rose-400 no-underline hover:underline"
        >
          Luis Otavio Longo
        </a>
      </span>
    </footer>
  )
}
