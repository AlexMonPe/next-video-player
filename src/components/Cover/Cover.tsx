const Cover = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/images/backgrounds/water-bridge.webp)`,
        backgroundPosition: 'center center',
      }}
      className='h-[35rem] 2xl:h-[45rem] w-screen bg-cover bg-no-repeat relative flex justify-center items-center'
    >
      <div className='absolute text-black inset-0 w-full h-full bg-[#0000003b] z-10'></div>
      <div className='container mx-auto text-white w-full h-full z-20 flex justify-center items-end pb-14 '>
        <h1 className='text-5xl drop-shadow-[2px_6px_2px_rgba(0,_0,_0,_0.75)] leading-[3.2rem]'>
           Generate <strong>amazing videos</strong>{' '}
        </h1>
      </div>
    </div>
  );
};

export default Cover;
