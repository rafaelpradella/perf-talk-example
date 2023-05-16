import { Inter } from 'next/font/google'
import ThirdPartyScripts from './ThirdPartyScripts';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }){
  return (
    <> 
      <ThirdPartyScripts />
      <main className={`flex min-h-screen flex-col items-center justify-between p-24 orange-100 ${inter.className}`}>
        <>{children}</>
      </main>
    </>
  )
}