import React from 'react';
import LibrabyImg from './LibrabyImg';
import Link from 'next/link';

const Mapping = () => {
  const results = [
    {
      image: '/assets/md-thai-emblem_300x300.png',
      link: 'https://www.google.com/maps?ll=16.469542,102.830309&z=16&t=m&hl=th&gl=TH&mapclient=embed&cid=3251952549610997991',
    },
    {
      image: '/assets/AGKKU.png',
      link: 'https://www.google.com/maps/place/%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%94+%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B8%A9%E0%B8%95%E0%B8%A3%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C+%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/@16.4767097,102.8219102,15z/data=!4m14!1m7!3m6!1s0x31228a8e64e065a5:0xb613c7ef92c46936!2z4Lir4LmJ4Lit4LiH4Liq4Lih4Li44LiUIOC4hOC4k-C4sOC5gOC4geC4qeC4leC4o-C4qOC4suC4quC4leC4o-C5jCDguKHguKvguLLguKfguLTguJfguKLguLLguKXguLHguKLguILguK3guJnguYHguIHguYjguJk!8m2!3d16.4767097!4d102.8219102!16s%2Fg%2F12295xkh!3m5!1s0x31228a8e64e065a5:0xb613c7ef92c46936!8m2!3d16.4767097!4d102.8219102!16s%2Fg%2F12295xkh',
    },
    {
      image: '/assets/AMSKKU.png',
      link: 'https://www.facebook.com/amslibkku/?locale=th_TH',
    },
    {
      image: '/assets/ARCH_KKU_Logo.png',
      link: 'https://www.google.com/maps/place/%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%94%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%9B%E0%B8%B1%E0%B8%95%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C/@16.4718153,102.8218327,16z/data=!4m7!3m6!1s0x31228b3a9e53c81b:0x459dcdaa7bdc795e!8m2!3d16.4724442!4d102.8269119!15sClvguKfguLTguJfguKLguLLguKXguLHguKLguJvguIHguITguKPguK3guIfguJfguYnguK3guIfguJbguLTguYjguJkg4Lir4LmJ4Lit4LiH4Liq4Lih4Li44LiUkgESdW5pdmVyc2l0eV9saWJyYXJ54AEA!16s%2Fg%2F11g1ktbzdw?hl=th&coh=164777&entry=tt&shorturl=1',
    },
    {
      image: '/assets/DENTISTRY_KKU.png',
      link: 'https://www.facebook.com/kkudtlibrary/?locale=th_TH',
    },
    {
      image: '/assets/EDU_KKU_Symbo.png',
      link: 'https://www.facebook.com/profile.php?id=100064453671998&paipv=0&eav=AfbFFv7qKCkP8YyIq5c7NUtx2DWRyUubefI-3K3sOl18xkIpZS5FYnzyNw0qDIhp0l0',
    },
    {
      image: '/assets/Nursing_KKU_Thai_Symbol.png',
      link: 'https://www.google.com/maps/place/Faculty+of+Nursing,+Khon+Kaen+University/@16.469719,102.825133,17z/data=!4m6!3m5!1s0x31228a8a4e16e32b:0x502b8d824e68e4e4!8m2!3d16.4697188!4d102.8251325!16s%2Fg%2F122lq4vg?hl=en-GB',
    },
    {
      image: '/assets/Pharmaceutical_Science_KKU.png',
      link: 'https://pharm.kku.ac.th/psthai/index.php/site/internal_department',
    },
    {
      image: '/assets/Public_Heaalth_KKU.png',
      link: 'https://www.google.com/maps/place/%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%94%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%AA%E0%B8%B2%E0%B8%98%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C+%E0%B8%A1%E0%B8%82/@16.4713646,102.8249667,16.08z/data=!4m7!3m6!1s0x31228a8b005a9a5f:0xa6ed263f4d032c29!8m2!3d16.4703431!4d102.8257341!15sClvguKfguLTguJfguKLguLLguKXguLHguKLguJvguIHguITguKPguK3guIfguJfguYnguK3guIfguJbguLTguYjguJkg4Lir4LmJ4Lit4LiH4Liq4Lih4Li44LiUkgEHbGlicmFyeeABAA!16s%2Fg%2F11dxftxrrq?hl=th&coh=164777&entry=tt&shorturl=1',
    },
    {
      image: '/assets/VET_KKU_LOGO.svg.png',
      link: 'https://www.google.com/maps/search/%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%AA%E0%B8%B1%E0%B8%95%E0%B8%A7%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C++%E0%B8%A1%E0%B8%82/@16.479302,102.831346,15z?hl=en-GB',
    },
    {
      image: '/assets/COLA_KKU_Symbol.png',
      link: 'https://www.cola.kku.ac.th/cola/web/',
    },
    {
      image: '/assets/FIS_KKU_Symbol.png',
      link: 'https://www.facebook.com/Library.NKC/?locale=th_TH',
    },
  ];
  return (
    <div id='map' className='w-full md:h-screen p-2 flex items-center py-16 text-center dark:bg-[#282a36]'>
      <div className='max-w-[1240px] m-auto md-grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h2 className='uppercase dark:text-[white]'>
            Mapping to other <span className='text-[red]'>Library </span>
          </h2>
          <p className=' uppercase text-lg mt-4 hidden md:hidden'>Let&apos;s Check it Out</p>
        </div>
        <div className='circlehover z-1'>
          <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-7'>
            {results.map((result, index) => (
              <Link href='https://www.facebook.com/Library.NKC/?locale=th_TH' target='_blank' key={index}>
                <LibrabyImg socialImg={result.image} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mapping;
