import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

config.autoAddCss = false

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: 'HOME | mpcosméticos',
  description: 'Descrição da home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-zinc-100`}>
        <div>{children}</div>
      </body>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </html>
  )
}
