'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  return (
    <header className='bg-[#F5FAF4] w-full h-20 z-30 top-0 fixed '>
      <nav className='container mx-auto h-full flex justify-between items-center text-white'>
        <Link href={'/'} className='hidden sm:block'>
          <Image
            src='/images/logos/vidext-logo.png'
            alt='Vidext logo'
            height={70}
            width={210}
          />
        </Link>
        <Link href={'/'} className='block sm:hidden'>
          <Image
            src='/images/logos/logo.png'
            alt='Vidext logo'
            height={70}
            width={70}
          />
        </Link>
        {pathname !== '/' && (
          <Link
            href='/'
            className='text-white px-8 py-3 border-2 border-[#F5FAF4] bg-gradient-to-r from-green-700 via-green-800 to-emerald-900 hover:scale-110 duration-700 cursor-pointer font-bold drop-shadow-xl rounded-xl'
          >
            Home
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
