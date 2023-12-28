import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
        <h2 className='p-2 text-white text-xl'>Home page</h2>
    </main>
  )
}
