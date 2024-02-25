import { VideoPlayerProps } from '@/types/videos';
import React, { forwardRef } from 'react';

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
        onEnded={handlePlay}
      ></video>
    );
  }
);

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
