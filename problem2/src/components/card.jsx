import axios from 'axios';
import React from 'react'

const card = () => {
    axios.get('');
  return (
    <>
      <div className="  text-xl text-[#ff3a3a] font-bold  bg-gray-400 rounded-lg p-6 ml-6  w-fit mt-4 flex flex-col">
        <div className="">Product name</div>

        <div className="">Ratings</div>
        <div className="">Price</div>
        <div className="">Availabilty</div>

      </div>
    </>
  );
}

export default card
