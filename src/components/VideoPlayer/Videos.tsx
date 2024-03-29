import React from 'react';
import VideoModal from './VideoModal';
import EmptyVideos from '../EmptyVideos/EmptyVideos';
import { VideosProps } from '@/types/videos';

const Videos = ({ videos }: VideosProps) => {
  return (
    <>
      {videos && videos?.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20'>
          {videos?.map((video, index) => {
            return <VideoModal key={`video-${index}`} video={video} />;
          })}
        </div>
      ) : (
        <EmptyVideos />
      )}
    </>
  );
};

export default Videos;
