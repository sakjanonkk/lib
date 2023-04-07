import Image from 'next/image';
import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';

const LibrabyImg = ({ socialImg, caption }) => {
  return (
    <div className='relative z-5'>
      <Image src={socialImg} alt={caption || 'Image'} className='w-full h-full layout' width={500} height={500} />
      <div className='flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 rounded-[100%] hover:bg-black/20 group  dark:text-white'>
        <p className='text-gray-300 hidden group-hover:block dark:text-white'>
          <FaLocationArrow size={30} className='z-10' />
        </p>
      </div>
    </div>
  );
};

export default LibrabyImg;
