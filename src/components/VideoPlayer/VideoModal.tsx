'use client'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import VideoCard from './VideoCard';
import VideoPlayer from './VideoPlayer';
import { useState } from 'react';
import FavoriteIcon from '../Favorites/FavoriteIcon';
import { CustomControls } from './CustomControls';
import { useIncrementPlayCount } from '@/hooks/useIncrementPlayCount';
import { serverClient } from '@/app/_trpc/serverClient';

type VideoModalProps = {
  video: Awaited<ReturnType<typeof serverClient['getVideos']>>[number];
};

export const VideoModal = ({ video }: VideoModalProps) => {

  const [playcount, setPlaycount] = useState<number | null>(video.playcount);
  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  //Custom hook to increment playcount calling
  const { incrementPlayCount } = useIncrementPlayCount();

  return (
    <Dialog>
      <DialogTrigger>
        <VideoCard
          video={video}
          isFavorited={isFavorited}
          setIsFavorited={setIsFavorited}
          playcount={playcount}
        />
      </DialogTrigger>
      <DialogContent className='p-0 border-0 overflow-hidden min-w-[80%] lg:min-w-[60%] gap-0 text-white rounded-lg'>
        <div className='w-full relative rounded-lg overflow-hidden'>
          <CustomControls>
            <VideoPlayer
              src={video.url ?? ''}
              incrementPlayCount={incrementPlayCount}
              id={video.id}
              playcount={video.playcount ?? 0}
              setPlaycount={setPlaycount}
            />
          </CustomControls>
          <div className='absolute inset-0 w-full h-1/2 bg-gradient-to-t from-transparent via-[#00000057] to-[#000000c4]'></div>
          <DialogHeader className=''>
            <DialogTitle className='absolute top-4 left-4 flex flex-col gap-2'>
              <p className="text-sm sm:text-lg">{video.title}</p>
              <div className='flex flex-col'>
                <span className='text-sm font-normal hidden md:block w-5/6 lg:text-base'>{video.description}</span>
                <span className='text-sm font-normal text-left lg:text-base'>{playcount} Views</span>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className='absolute top-3 right-14'>
            <FavoriteIcon
              videoId={video.id}
              isFavorited={isFavorited}
              setIsFavorited={setIsFavorited}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default VideoModal;
