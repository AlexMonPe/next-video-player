import Videos from '../components/VideoPlayer/Videos';

export default function Home() {
  return (
    <main className='w-screen h-full bg-[#F5FAF4]'>
      <div
        style={{
          backgroundImage: `url(/images/backgrounds/lake-bg.webp)`,
          backgroundPosition: 'center center',
        }}
        className='min-h-[45rem] h-[45rem] w-screen bg-cover bg-no-repeat relative flex justify-center items-center'
      >
        <div className='absolute text-black inset-0 w-full h-full bg-[#0000003b] z-10'></div>
        <div className='container mx-auto text-white w-full h-full z-20 flex justify-center items-end pb-14 '>
          <h1 className='text-5xl drop-shadow-[0px_3px_2px_rgba(0,_0,_0,_0.45)] leading-[3.2rem]'>
            <strong>Find a new way</strong> to enjoy nature with{' '}
            <strong>Vidext</strong>
          </h1>
        </div>
      </div>
      <div className='container mx-auto'>
        <h2 className='text-2xl drop-shadow-[0px_2px_6px_rgba(0,_0,_0,_0.45)] text-black leading-[3.2rem] my-8'>
          <strong>Explore</strong> nature videos
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-20'>
          <Videos />
        </div>
      </div>
    </main>
  );
}
