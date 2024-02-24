const Loading = () => {
  //Create array with 9 keys
  const placeholderCards = [...Array(9).keys()];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-20'>
      {placeholderCards.map((_, index) => (
        <div
          key={index}
          className='h-60 bg-gray-300 animate-pulse rounded-md h-'
        ></div>
      ))}
    </div>
  );
};

export default Loading;
