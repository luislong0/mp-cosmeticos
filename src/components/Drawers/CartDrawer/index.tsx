import { CartWidget } from '@/components/CartWidget'
import * as Dialog from '@radix-ui/react-dialog'
import { ShoppingBag, X } from 'lucide-react'
import { CartProducts } from './components/CartProducts'
import { WhatsProductsBox } from './components/WhatsProductsBox'

export function CartDrawer() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>
          <CartWidget />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-all fixed inset-0 bg-black/20 backdrop-blur-sm sm:bg-black/90" />

        <Dialog.Content className="data-[state=open]:animate-all fixed right-0 top-0 mt-10 flex h-[calc(100vh-20px)] max-h-[85vh] min-h-full w-[100%] max-w-[full] flex-col items-center justify-between rounded-t-3xl bg-zinc-900 pt-5 text-zinc-100 focus:outline-none data-[state=open]:animate-contentShowMobile sm:mt-0  sm:h-screen sm:min-h-screen sm:w-full sm:max-w-[450px] sm:rounded-t-none sm:data-[state=open]:animate-contentShow">
          {/* <Dialog.Title className="m-0 text-lg font-medium">Login</Dialog.Title> */}
          {/* {formComponent} */}
          <div className="mb-10 flex w-full justify-between px-5">
            <Dialog.Title className="flex items-center gap-2 text-2xl font-semibold uppercase">
              <span className="text-3xl text-rose-400">
                <ShoppingBag size={24} />
              </span>
              Minha sacola
            </Dialog.Title>

            <Dialog.Close asChild>
              <button className="text-xl text-rose-400" aria-label="Close">
                <X />
              </button>
            </Dialog.Close>
          </div>

          <CartProducts />

          <WhatsProductsBox />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
