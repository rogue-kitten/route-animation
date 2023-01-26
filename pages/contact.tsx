import { ContainerAnim, item } from '@/animate';
import { motion as m } from 'framer-motion';

export default function Contact() {
  return (
    <m.main
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
      className="absolute inset-0 h-full w-full bg-red-400 px-16 text-gray-900 lg:px-48"
    >
      <div className="my-96 overflow-hidden p-1">
        <m.h1
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center font-archivo text-6xl lg:text-right lg:text-9xl"
        >
          Lets talk
        </m.h1>
      </div>
      <div className="flex gap-40">
        <div className="text-base lg:text-2xl">
          <h4>Find Me</h4>
        </div>
        <div className="udnerline text-2xl lg:text-6xl">
          <m.ul variants={ContainerAnim} initial="hidden" animate="show">
            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                Twitter
              </m.li>
            </div>
            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                Linkedin
              </m.li>
            </div>
            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                Instagram
              </m.li>
            </div>
            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                Dribbble
              </m.li>
            </div>
          </m.ul>
        </div>
      </div>
    </m.main>
  );
}
