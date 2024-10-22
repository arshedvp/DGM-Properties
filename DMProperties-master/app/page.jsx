'use client'

import { useRef } from 'react';
import ParallaxComponent from '@components/ParallaxComponent';
import BentoComponent from '@components/BentoGrid';
import ContactComponent from '@components/Contact';
import AboutComponent from '@components/AboutComponent';
export default function Home() {

  const ref = useRef();

  return (
    <>
      <ParallaxComponent />
      <AboutComponent/>
      <BentoComponent />
      <ContactComponent/>
    </>
  )
}
