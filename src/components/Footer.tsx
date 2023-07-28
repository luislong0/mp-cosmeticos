import { Instagram } from 'lucide-react'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-around bg-zinc-950 px-20 py-10 text-white">
      <div className="mx-auto grid w-full grid-cols-2 gap-10 md:grid-cols-4">
        <div className="flex flex-col items-start sm:items-center">
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
                  href="https://www.google.com.br/maps/place/Palmital,+SP,+19970-000/@-22.7884181,-50.2269324,15z/data=!3m1!4b1!4m6!3m5!1s0x94954d2f44590015:0x363ee8dfc7f163ed!8m2!3d-22.7881823!4d-50.2189581!16zL20vMDQ0MHR3?entry=ttu"
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
        <div className="flex flex-col items-start sm:items-center">
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

        <div className="flex flex-col items-start sm:items-center">
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
        <div className="flex flex-col items-start sm:items-center">
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
