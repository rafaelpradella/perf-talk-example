import Image from 'next/image'
import Link from 'next/link'

import Layout from '@/components/Layout'

export default function Home() {
  const OptimizedImage = () => (
    <Image
      className="relative block mx-auto my-8"
      src="/talk-logo.png"
      alt="Three icons representing the talk theme: Head w/ Interrogation, Medal and Control Panel"
      width={300}
      height={80}
      priority
    />
  );

  return (
    <Layout>
      <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:--x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-orange-200 after:via-amber-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-orange-700 before:dark:opacity-10 after:dark:from-orange-900 after:dark:to-orange-600 after:dark:opacity-40 before:lg:h-[360px]">
        <img
          className="relative block mx-auto my-8"
          src="/talk-logo.png"
          alt="Three icons representing the talk theme: Head w/ Interrogation, Medal and Control Panel"
          width={300}
          height={80}
        />
        <h1 className='text-center text-3xl font-black'>Some horrible code to debug</h1>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:text-left">
        <Link href='banner-form' className="text-lg rounded-lg hover:bg-orange-900/30 hover:border-orange-50 hover:orange-500 p-10">
          <h2 className="mb-3 text-2xl font-regular">Create new banner ➜</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Optimization and debugging exercise
          </p>
        </Link>
      </div>
    </Layout>
  )
}
