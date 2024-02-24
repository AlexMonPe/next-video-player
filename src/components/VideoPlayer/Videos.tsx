'use client';
import React from 'react';
import VideoModal from './VideoModal';
import { serverClient } from '@/app/_trpc/serverClient';
import EmptyVideos from '../EmptyVideos/EmptyVideos';

type VideosProps = {
  videos: Awaited<ReturnType<(typeof serverClient)['getVideos']>>;
};

const Videos = ({ videos }: VideosProps) => {
  return (
    <>
      {videos && videos?.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20'>
          {videos?.map((video, index) => {
            return <VideoModal key={index} video={video} />;
          })}
        </div>
      ) : (
        <EmptyVideos />
      )}
    </>
  );
};

export default Videos;
