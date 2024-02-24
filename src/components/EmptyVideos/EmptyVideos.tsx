import { MdErrorOutline } from 'react-icons/md';

const EmptyVideos = () => {
  return (
    <div className='py-4 px-10 bg-red-700 text-white rounded-lg w-fit flex items-center gap-3'>
      {' '}
      <MdErrorOutline size={24} />{' '}
      <span>No videos are available, run the project again to auto-run the seed</span>
    </div>
  );
};

export default EmptyVideos;
