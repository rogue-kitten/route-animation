import { ContainerAnim, item } from '@/animate';
import { motion as m } from 'framer-motion';
import Head from 'next/head';

export default function Home() {
  return (
    <m.div
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
      className="absolute inset-0 h-full w-full bg-orange-200 px-16 text-gray-900 lg:px-48"
    >
      <Head>
        <title>Cool Transition</title>
        <meta
          name="description"
          content="Made with Tailwind CSS and Framer Motion"
        />
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <main>
        <div className="my-96 overflow-hidden p-1">
          <m.h1
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center font-archivo text-6xl lg:text-right lg:text-9xl"
          >
            Happy Pickle
          </m.h1>
        </div>
        <div className="flex justify-between">
          <div className="">
            <h2>Design</h2>
            <h2>Company</h2>
            <h2>2023</h2>
          </div>
          <m.div variants={ContainerAnim} initial="hidden" animate="show">
            <div className="overflow-hidden">
              <m.h3 className="text-lg" variants={item}>
                Go and click on contact for a cool animation.
              </m.h3>
            </div>
            <div className="overflow-hidden">
              <m.h3 className="text-xl" variants={item}>
                Seriously, its super cool.
              </m.h3>
            </div>
          </m.div>
        </div>
      </main>
    </m.div>
  );
}
