import Loading from '@/components/Loading/Loading';
import { Suspense } from 'react';
import Cover from '@/components/Cover/Cover';
import { Metadata } from 'next';
import Videos from '@/components/VideoPlayer/Videos';
import { serverClient } from '../_trpc/serverClient';

export const metadata: Metadata = {
  title: 'Vidext | Videos',

};
export default async function EmptyVideos() {
    const videos = await serverClient.getVideos();

    return (
      <main
        className={`w-screen ${
          videos?.length ? 'h-full' : 'h-screen'
        } bg-[#F5FAF4]`}
      >
        <Cover />
        <section className='container mx-auto'>
          <h2 className='text-2xl drop-shadow-[2px_2px_3px_rgba(0,_0,_0,_0.45)] text-black leading-[3.2rem] my-4 md:my-6'>
            <strong>Explore</strong> awesome videos
          </h2>
          <div>
            <Suspense fallback={<Loading />} >
              <Videos videos={videos} />
            </Suspense>
          </div>
        </section>
      </main>
    );
  }