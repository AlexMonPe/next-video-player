'use client';
import React, { useEffect, useRef} from 'react';
import VideoPlayer from './VideoPlayer';
import FavoriteIcon from '../Favorites/FavoriteIcon';
import { HiOutlineArrowsPointingOut } from "react-icons/hi2";
import { VideoCardProps } from '@/types/videos';

const VideoCard = ({ video, isFavorited, setIsFavorited,playcount }: VideoCardProps) => {

  // Creates a reference to the video element to control playback
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Play and pause functions
  const playVideo = () => videoRef.current?.play();
  const pauseVideo = () => videoRef.current?.pause();

  // Check if the video is marked as favorite when loading the component
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorited(favorites.includes(video.id));
  }, [video.id, isFavorited, setIsFavorited]);

  return (
    <>
      {video.url ? (
        <>
          <div
            className='group relative overflow-hidden rounded-lg shadow-[0px_4px_25px_0px_rgba(0,0,0,0.15)] cursos-pointer'
            onMouseEnter={playVideo}
            onMouseLeave={pauseVideo}
          >
            <VideoPlayer src={video.url} ref={videoRef} id={video.id} />
            <div className='absolute text-black inset-0 cursor-pointer w-full h-full bg-[#00000037] opacity-0 group-hover:h-full group-hover:opacity-100 duration-700'></div>
            <div className='absolute top-3 right-3 opacity-0 group-hover:opacity-100 duration-700 text-white z-80'>
              <FavoriteIcon
                videoId={video.id}
                isFavorited={isFavorited}
                setIsFavorited={setIsFavorited}
              />
            </div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-700 text-white flex justify-center items-center '>
              <span className='bg-black/60 drop-shadow-lg rounded-full p-2 lg:p-3' aria-label="Expand video"><HiOutlineArrowsPointingOut size={24}/></span>
            </div>
            <div className='absolute top-3 left-3 opacity-0 group-hover:opacity-100 duration-700 text-white text-sm xl:text-base'>
              {playcount} Views
            </div>
            <div className='absolute bg-[#00000086]  bottom-0 inset-x-0 opacity-0 text-white group-hover:opacity-100 duration-700 text-sm xl:text-base p-3 xl:p-4 '>
              {video.title}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default VideoCard;
