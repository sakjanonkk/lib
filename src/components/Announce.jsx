import React, { useCallback, useState } from 'react';
import AnnounceTxt from './Announce';

const Announce = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const toggleAnnouncement = useCallback(() => {
    setShowAnnouncement(!showAnnouncement);
  }, [showAnnouncement]);

  return (
    <div className='container mx-auto'>
      <nav className='bg-gray-800 text-white p-4'>
        <h1 className='text-lg font-bold'>My Website</h1>
      </nav>

      {showAnnouncement && <AnnounceTxt />}

      <main className='p-4'>
        <h2>Welcome to my website</h2>
        <p>This is the main content of the website.</p>
        <button onClick={toggleAnnouncement}>Hide announcement</button>
      </main>
    </div>
  );
};

export default Announce;
