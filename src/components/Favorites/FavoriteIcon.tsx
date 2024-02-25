'use client'
import { FavoriteIconProps } from '@/types/videos';
import React, { useEffect } from 'react';
import { GrFavorite } from 'react-icons/gr';
import { MdOutlineFavorite } from 'react-icons/md';

const FavoriteIcon = ({ videoId,isFavorited, setIsFavorited }: FavoriteIconProps) => {

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorited(favorites.includes(videoId));
  }, [videoId,isFavorited, setIsFavorited]);

  //Function to add and remove favorites using localstorage
  const toggleFavorite = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favorites.includes(videoId)) {
      localStorage.setItem(
        'favorites',
        JSON.stringify(favorites.filter((id: number) => id !== videoId))
      );
      setIsFavorited(false);
    } else {
      localStorage.setItem(
        'favorites',
        JSON.stringify([...favorites, videoId])
      );
      setIsFavorited(true);
    }
  };

  return (
    <>
      {isFavorited ? (
        <MdOutlineFavorite
          size={24}
          className='cursor-pointer hover:scale-110 duration-500 '
          onClick={toggleFavorite}
        />
      ) : (
        <GrFavorite
          size={24}
          className='cursor-pointer hover:scale-110 duration-500'
          onClick={toggleFavorite}
        />
      )}
    </>
  );
};

export default FavoriteIcon;
