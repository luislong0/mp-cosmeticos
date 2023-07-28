import Navbar from '@/components/Navbar'
import { Hero } from '@/components/Sessions/Hero'
import './globals.css'
import { About } from '@/components/Sessions/About'
import { Products } from '@/components/Sessions/Products'
import { Contact } from '@/components/Sessions/Contact'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col">
        <Navbar />
        <div className="w-full">
          <Hero />
          <About />
          <Products />
          <Contact />
        </div>
      </main>

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
    </>
  )
}
