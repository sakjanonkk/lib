import React, { useMemo, useState } from 'react';
import { BsFillMoonFill, BsSun } from 'react-icons/bs';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = useMemo(() => {
    if (!mounted) return null;
    return theme === 'system' ? systemTheme : theme;
  }, [mounted, systemTheme, theme]);

  return currentTheme === 'dark' ? (
    <BsSun className='w-5 h-5 dark:text-[white]' role='button' onClick={() => setTheme('light')} />
  ) : (
    <BsFillMoonFill className='w-5 h-5' role='button' onClick={() => setTheme('dark')} />
  );
};

export default ThemeSwitcher;
