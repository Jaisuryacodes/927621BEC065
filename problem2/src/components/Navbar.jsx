import React from 'react'

const Navbar = () => {
  return (
    <div className="flex  bg-gray-400  justify-between align-middle items-center ">
      <div className="ml-14  text-xl text-[#ff3a3a] font-bold  bg-white rounded-lg p-3  ">
      
        Jaisurya8
      </div>
      <div className=" flex">
        <input
          className=" text-[#000] p-1 rounded-lg "
          type="search"
          placeholder=" 🔍 Search"
        />
      </div>
      <div className=" flex gap-3 p-3">
        <div className=" text-xl text-[#ff3a3a] font-bold  bg-white rounded-lg p-3      ">
          login/Register
        </div>
      </div>
    </div>
  );
}

export default Navbar
