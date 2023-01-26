import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className="py-24 px-12 font-latoBold lg:px-48">
      <Navbar />
      <AnimatePresence initial={false}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
