import { serverClient } from '@/app/_trpc/serverClient';
import { ReactNode, Dispatch, SetStateAction } from 'react';

export interface CustomControlsProps {
  children: ReactNode;
};

export interface VideoCardProps {
  video: Awaited<ReturnType<(typeof serverClient)['getVideos']>>[number];
  isFavorited: boolean;
  setIsFavorited: Dispatch<SetStateAction<boolean>>;
  playcount: number | null;
}

export type VideoModalProps = {
  video: Awaited<ReturnType<(typeof serverClient)['getVideos']>>[number];
};

export type VideosProps = {
  videos: Awaited<ReturnType<(typeof serverClient)['getVideos']>>;
};

export interface VideoPlayerProps {
  src: string;
  id: number;
  incrementPlayCount?: (
    videoId: number,
    currentPlayCount: number,
    setPlaycount: any
  ) => void;
  playcount?: number | null;
  setPlaycount?: Dispatch<SetStateAction<number | null>>;
}

export interface FavoriteIconProps {
  videoId: number;
  isFavorited: boolean;
  setIsFavorited: Dispatch<SetStateAction<boolean>>;
};
