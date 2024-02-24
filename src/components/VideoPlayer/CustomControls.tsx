import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlayButton,
  MediaMuteButton,
  MediaPipButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaFullscreenButton,
} from 'media-chrome/dist/react';

import { ReactNode } from 'react';

type CustomControlsProps = {
  children: ReactNode;
};
export const CustomControls = ({ children }: CustomControlsProps) => {
  return (
    <MediaController className='h-full'>
      {children}
      <MediaControlBar className='bg-gradient-to-r from-green-700 via-green-800 to-emerald-900'>
        <MediaPlayButton>
          <svg
            slot='play'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M 21.457031 9.773438 L 5.109375 0.335938 C 4.328125 -0.113281 3.320312 -0.113281 2.546875 0.335938 C 1.753906 0.792969 1.261719 1.644531 1.261719 2.558594 L 1.261719 21.433594 C 1.261719 22.347656 1.753906 23.199219 2.539062 23.652344 C 2.929688 23.878906 3.375 24 3.828125 24 C 4.277344 24 4.722656 23.878906 5.109375 23.65625 L 21.457031 14.21875 C 22.246094 13.761719 22.738281 12.910156 22.738281 11.996094 C 22.738281 11.085938 22.246094 10.234375 21.457031 9.773438 Z M 20.230469 12.097656 L 3.882812 21.535156 C 3.847656 21.554688 3.808594 21.554688 3.769531 21.53125 C 3.734375 21.511719 3.710938 21.472656 3.710938 21.433594 L 3.710938 2.558594 C 3.710938 2.515625 3.734375 2.480469 3.769531 2.460938 C 3.785156 2.449219 3.804688 2.445312 3.828125 2.445312 C 3.847656 2.445312 3.867188 2.449219 3.882812 2.460938 L 20.226562 11.894531 C 20.265625 11.914062 20.289062 11.953125 20.289062 11.996094 C 20.289062 12.039062 20.265625 12.074219 20.230469 12.097656 Z M 20.230469 12.097656 ' />
          </svg>
          <svg
            slot='pause'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M 8.75 0 L 1.847656 0 C 1.265625 0 0.796875 0.46875 0.796875 1.046875 L 0.796875 22.949219 C 0.796875 23.53125 1.265625 24 1.847656 24 L 8.75 24 C 9.332031 24 9.800781 23.53125 9.800781 22.949219 L 9.800781 1.046875 C 9.800781 0.46875 9.332031 0 8.75 0 Z M 7.703125 21.902344 L 2.894531 21.902344 L 2.894531 2.097656 L 7.703125 2.097656 Z M 7.703125 21.902344 ' />
            <path d='M 22.152344 0 L 15.25 0 C 14.671875 0 14.199219 0.46875 14.199219 1.046875 L 14.199219 22.949219 C 14.199219 23.53125 14.671875 24 15.25 24 L 22.152344 24 C 22.730469 24 23.203125 23.53125 23.203125 22.949219 L 23.203125 1.046875 C 23.203125 0.46875 22.730469 0 22.152344 0 Z M 21.105469 21.902344 L 16.296875 21.902344 L 16.296875 2.097656 L 21.105469 2.097656 Z M 21.105469 21.902344 ' />
          </svg>
        </MediaPlayButton>
        <div className='hidden lg:block'>
          <MediaSeekBackwardButton></MediaSeekBackwardButton>
          <MediaSeekForwardButton></MediaSeekForwardButton>
        </div>
        <MediaTimeRange></MediaTimeRange>
        <MediaTimeDisplay showDuration></MediaTimeDisplay>
        <MediaMuteButton></MediaMuteButton>
        <MediaVolumeRange></MediaVolumeRange>
        <MediaController audio autohide='3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='#A5CEA0'
          >
            <path d='M3,9H7L12,4V20L7,15H3V9M16.5,12C16.5,10.23 15.48,8.71 14,7.97V16.03C15.48,15.29 16.5,13.77 16.5,12M19,12C19,9.24 17.26,6.97 14.97,6.03V17.97C17.26,17.03 19,14.76 19,12Z' />
          </svg>
        </MediaController>
        <div className='hidden md:block'>
          <MediaPipButton></MediaPipButton>
        </div>
        <MediaFullscreenButton>
          <svg
            slot='icon'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='#A5CEA0'
          >
            <path d='M14,14H20V20H14V14M4,4H10V10H4V4M14,4H20V10H14V4M4,14H10V20H4V14Z' />
          </svg>
        </MediaFullscreenButton>
      </MediaControlBar>
    </MediaController>
  );
};
