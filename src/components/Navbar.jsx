import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { TbLocationFilled } from 'react-icons/tb';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNav = useCallback(() => {
    setNav(!nav);
  }, [nav]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    return () => window.removeEventListener('scroll', handleShadow);
  }, []);

  return (
    mounted && (
      <div
        className={
          shadow ? 'fixed w-full h-100 shadow-xl bg-[white] z-[9999]' : 'fixed w-full h-100 bg-[white] z-[9999]'
        }>
        <div
          className='flex justify-between items-center w-full h-full px-2 2xl:px-16 dark:bg-[#202020]
'>
          <div className=' p-4'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Link href='/'>
                <Image
                  className='hover:scale-105 ease-in duration-200'
                  src='/assets/LogoKKU.svg'
                  width={50}
                  height={120}
                  style={{ inset: '10px', width: 'auto', height: 'auto' }}
                  alt='Logo'
                />
              </Link>
              <span style={{ marginLeft: '20px' }} className='lg:text-xl md:text-l  dark:text-[#fcfcfc]'>
                ENGINEER LIBRARY
              </span>
            </div>
          </div>

          <div className='ml-auto'>
            <ul className='hidden md:flex p-10'>
              <Link href='/#map'>
                <li className='ml-12 font-semibold text-md tracking-widest uppercase hover:border-b hover:scale-105 ease-in duration-200 hover:text-[#f9a826] dark:text-[#fcfcfc]'>
                  Admin
                </li>
              </Link>
              <ul className='ml-12 font-semibold text-md tracking-widest hover:border-b hover:scale-105 ease-in duration-200'>
                <li>
                  <Link legacyBehavior href='/#book'>
                    <Link
                      href='/book'
                      className='hover:text-[#f9a826] flex items-center hover:scale-105 ease-in duration-200 dark:text-[#fcfcfc]'>
                      BOOK <IoMdArrowDropdown />
                    </Link>
                  </Link>
                  <ul className='dropdown p-4'>
                    <li>
                      <Link href='/'>Booking List</Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <Link href='/#map'>
                <li className='ml-12 font-semibold text-md tracking-widest uppercase hover:border-b hover:scale-105 ease-in duration-200 hover:text-[#f9a826] dark:text-[#fcfcfc]'>
                  Map
                </li>
              </Link>
              <div className=''></div>
            </ul>
            <div onClick={handleNav} className='md:hidden p-6'>
              <AiOutlineMenu size={25} className='dark:text-white' />
            </div>
          </div>
          {/*============ DARKMODE BUTTON ADDED HERE!! ============= */}
          <div className='hidden md:flex pr-10'>
            <ThemeSwitcher />
          </div>
          {/*============ DARKMODE ADDED HERE!! ============= */}

          {/*============ M ADD ICON HERE !! ============= */}
          <Image
            src='/assets/LogoKKU.svg'
            alt='Logo'
            width={50}
            height={50}
            className='rounded-full shadow-lg shadow-[#707172] cursor-pointer hidden md:flex '
            style={{ width: '70px', height: '70px' }}
          />
          {/*============ M ADD ICON HERE !! ============= */}
        </div>

        <div
          className={
            nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/60 ease-in duration-500 z-999999999' : ''
          }>
          {/* ***************** Navbar for MOBILE ***************** */}
          <div
            className={
              nav
                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45] h-screen bg-[white] p-10 ease-in duration-500 dark:bg-[#1d1d24]'
                : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45] h-screen bg-[white] p-10 ease-in duration-500 dark:bg-gray-900'
            }>
            <div>
              <div className='flex w-full items-center justify-between'>
                <Image src='/assets/LogoKKU.svg' width={50} height={120} alt='Logo' />
                <ThemeSwitcher />
                <div
                  onClick={handleNav}
                  className='rounded-full shadow-lg shadow-gray-300 p-2 cursor-pointer bg-[#efefef]'>
                  <AiOutlineClose size={20} />
                </div>
              </div>
              <div className='border-b border-gray-300 my-4 dark:text-[#efefef]'>
                <p className='w-[85%] md:w-[90%] py-4 uppercase text-lg'>Let&apos;s Book a room !</p>
              </div>
            </div>
            <div>
              <ul className='uppercase'>
                <Link href='/#book'>
                  <li onClick={() => setNav(false)} className='text-md py-4 hover:text-[#f9a826] dark:text-[#efefef]'>
                    Book here
                  </li>
                </Link>
                <Link href='/'>
                  <li onClick={() => setNav(false)} className='text-md py-4 hover:text-[#f9a826] dark:text-[#efefef]'>
                    Booking list
                  </li>
                </Link>
                <Link href='/#map'>
                  <li onClick={() => setNav(false)} className='text-md py-4 hover:text-[#f9a826] dark:text-[#efefef]'>
                    Map
                  </li>
                </Link>
              </ul>
            </div>
            <div className='pt-80 my-1'>
              <p className='uppercase tracking-widest text-[black] dark:text-[#efefef]'>Our Contacts</p>
              <div className='flex items-center justify-between my-3 w-full sm:w-[100%] dark:text-white'>
                <Link href='https://www.facebook.com/kkuenglib' target='_blank'>
                  <div
                    className='rounded-full shadow-lg shadow-[#325380] p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                    title='Facebook Page'>
                    <FaFacebook />
                  </div>
                </Link>

                <div
                  className={`rounded-full shadow-lg shadow-[#325380] p-3 cursor-pointer hover:scale-105 ease-in duration-300 ${
                    isCopied ? 'flex justify-center items-center' : ''
                  }`}
                  title='Phone Number'
                  onClick={() => {
                    handleCopy('043-009700');
                  }}>
                  <BsFillTelephoneFill />
                  {isCopied && <div className='text-xs text-[#218a21] ml-4 dark:text-white'>Number copied</div>}
                </div>

                <Link href='https://kku.world/wp7md' target='_blank'>
                  <div
                    className='rounded-full shadow-lg shadow-[#325380] p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                    title='Official Website For More Information'>
                    <TbLocationFilled />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Navbar;
