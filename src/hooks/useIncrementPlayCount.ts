import { trpc } from '@/app/_trpc/client';
import { Dispatch, SetStateAction } from 'react';

/**
 * Custom hook that will be executed when video is onLoad and increments 1 into video playcount
 * @returns incrementPlayCount function to update number of video views
 */

export const useIncrementPlayCount = () => {
  // Generate mutate function to update playcount video
  const incrementViewCount = trpc.incrementPlayCount.useMutation();
  const incrementPlayCount = (
    videoId: number,
    currentPlayCount: number | null,
    setPlaycount: Dispatch<SetStateAction<number>>
  ) => {
    const updatedPlaycount = currentPlayCount ? currentPlayCount + 1 : 1;
    incrementViewCount.mutate({ id: videoId, playcount: updatedPlaycount });
    setPlaycount(updatedPlaycount);
  };
  return { incrementPlayCount };
};
