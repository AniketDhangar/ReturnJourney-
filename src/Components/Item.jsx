
import React from 'react';

const Item = React.memo(({ item }) => {
  return (
    <div className="item w-[30%] h-[300px] flex flex-wrap justify-around items-center rounded-lg m-5 cursor-pointer bg-gray-400 hover:scale-[1.1]">
      <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
      <div>{item.title}</div>
      <div className='bg-white px-2 rounded-2xl'>${item.price}</div>
    </div>
  );
});

export default Item;