import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-white shadow dark:bg-[#282a36]'>
      <div className='w-full container mx-auto p-4 md:px-6 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <Link
            href='https://library.kku.ac.th/elementor-158/enlib/?fbclid=IwAR2HMQPWD0C0jplTRgHFC8LF6SWonvr-i1minfSyj6y-gy4JZ8m1uC6AmzY'
            target='_blank'
            className='flex items-center mb-4 sm:mb-0  hover:scale-105 ease-in duration-200'>
            <Image src='/assets/LogoKKU.svg' width={50} height={0} alt='Logo' />
            <span className='m-6 self-center text-2xl font-semibold whitespace-nowrap sm:text-3xl md:text-4xl dark:text-white'>
              LIBRARY
            </span>
          </Link>
          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
            <li>
              <Link href='#' className='mr-4 hover:underline md:mr-6'>
                About
              </Link>
            </li>
            <li>
              <Link
                href='https://pdp.kku.ac.th/policy/680656708694016000?lang=th'
                target='_blank'
                className='mr-4 hover:underline md:mr-6 hover:text-[red]'>
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                href='https://www.facebook.com/kkuenglib'
                target='_blank'
                className='hover:underline hover:text-[blue]'>
                Facebook
              </Link>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023{''}
          <Link
            href='https://library.kku.ac.th/elementor-158/enlib/?fbclid=IwAR2HMQPWD0C0jplTRgHFC8LF6SWonvr-i1minfSyj6y-gy4JZ8m1uC6AmzY'
            target='_blank'
            className='hover:underline'>
            KKUL™ สำนักหอสมุด
          </Link>
          . All Rights Reserved. Icons by{''}
          <Link href='https://storyset.com/' target='_blank' className='hover:underline'>
            {''}
            Storyset.
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
