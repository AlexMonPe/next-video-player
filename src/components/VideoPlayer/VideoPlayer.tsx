import React, { Dispatch, SetStateAction, forwardRef } from 'react';

interface VideoPlayerProps {
  src: string;
  id: number;
  incrementPlayCount?: (videoId: number, currentPlayCount: number, setPlaycount: any) => void;
  playcount?: number;
  setPlaycount?: Dispatch<SetStateAction<number | null>>
}

const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(
  ({ id, src, incrementPlayCount, playcount, setPlaycount }, ref) => {

    //Increment play count via useIncrementPlayCount
    const handlePlay = () => {
      if (incrementPlayCount) {
        incrementPlayCount(id, playcount ?? 1, setPlaycount);
      }
    };

    return (
      <video
        slot='media'
        preload='auto'
        ref={ref}
        src={src}
        muted
        className='h-full w-full'
        onPlay={handlePlay}
      ></video>
    );
  }
);

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
