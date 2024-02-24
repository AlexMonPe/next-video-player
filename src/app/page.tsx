import Loading from '@/components/Loading/Loading';
import Videos from '../components/VideoPlayer/Videos';
import { serverClient } from './_trpc/serverClient';
import { Suspense } from 'react';
import Cover from '@/components/Cover/Cover';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vidext | Home',
};
export default async function Home() {
  const videos = await serverClient.getVideos();

  return (
      <div
      style={{
        backgroundImage: `url(/images/backgrounds/lake-landscape.webp)`,
        backgroundPosition: 'center center',
      }}
      className='min-h-screen  w-screen bg-cover bg-no-repeat relative flex justify-center items-center'
    >
      <div className='absolute text-black inset-0 w-full h-full bg-[#0000007a] z-10'></div>
      <div className='container mx-auto text-white w-full h-full z-20 flex flex-col gap-14 justify-center items-start pb-14 '>
        <h1 className='text-5xl drop-shadow-[2px_6px_2px_rgba(0,_0,_0,_0.75)] leading-[3.2rem]'>
          <strong>Find a new way</strong> to enjoy landscapes with{' '}
          <strong>Vidext</strong>
        </h1>
        <Link
          href='/videos'
          className='text-white text-xl px-8 py-3 border-2 border-[#F5FAF4] bg-gradient-to-r from-green-700 via-green-800 to-emerald-900 hover:scale-110 duration-700 cursor-pointer font-bold drop-shadow-xl rounded-full'
        >
          Watch Videos
        </Link>
      </div>
    </div>
  );
}
