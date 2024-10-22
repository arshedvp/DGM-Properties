'use client'

import React, { useRef } from "react";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { Link, animateScroll as scroll } from 'react-scroll';

const NavBarComponent = () => {
    const ref = useRef(null);

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolling(offset > 50); // Adjust the offset value as needed
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 z-50 bg-white backdrop-filter  bg-opacity-0 w-full transition-transform duration-[500ms] ${scrolling ? '-translate-y-16' : ''
                }`}
        >
            <div className="max-w-5xl mx-auto px-4">
  <div className="flex items-center justify-between h-16">
    <span className="text-2xl text-gray-900 font-semibold sm:flex hidden">
      <Image
          src='/img/logo.png'
          alt='DGM PROPERTIES'
          width={250}
          height={250}
          className='object-contain'
        />
    </span>
    <span className="text-2xl text-gray-900 font-semibold sm:hidden">
      DGM
    </span>
    <div className="flex space-x-4 text-gray-900">
      <a
        href="#"
        className="link-container"
      >
        <span className="hover-text">About</span>
      </a>
      <a
        href="#"
        className="link-container"
      >
        <span className="hover-text">Our Projects</span>
      </a>
      <a
        href="#"
        className="link-container"
      >
        <span className="hover-text">Contact</span>
      </a>
    </div>
  </div>
</div>


        </nav>
    );
};

export default NavBarComponent;