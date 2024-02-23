'use client';
import React from 'react';
import { trpc } from '../../app/_trpc/client';
import VideoModal from './VideoModal';

const Videos = () => {
  const videos = trpc.getVideos.useQuery();
  return (
    <>
      {videos.data && videos.data?.length > 0
        ? videos.data?.map((video, index) => {
            return <VideoModal key={index} video={video} />;
          })
        : <div>No videos available.</div>}
    </>
  );
};

export default Videos;
