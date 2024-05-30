import React from 'react'

const Accepting = () => {
  return (
    <>
      <div className=" px-[120px] mt-10  flex ">
        <div className="">
          <label
            className="text-xl text-[#ff3a3a] font-bold  bg-white rounded-lg p-3"
            for="companies"
          >
            Companies:
          </label>
          <select name="companies">
            <option
              className="text-[#ff3a3a] font-bold  bg-white rounded-lg border-[1px] border-[#000]"
              value="AMZ"
            >
              AMZ
            </option>
            <option
              className="text-[#ff3a3a] font-bold  bg-white rounded-lg border-[1px] border-[#000]"
              value="FLP"
            >
              FLP
            </option>
            <option
              className="text-[#ff3a3a] font-bold  bg-white rounded-lg border-[1px] border-[#000]"
              value="SNP"
            >
              SNP
            </option>
            <option
              className="text-[#ff3a3a] font-bold  bg-white rounded-lg border-[1px] border-[#000]"
              value="MYN"
            >
              MYN
            </option>
            <option
              className="text-[#ff3a3a] font-bold  bg-white rounded-lg border-[1px] border-[#000]"
              value="AZO"
            >
              AZO
            </option>
          </select>
        </div>
        <div className="">
          <label
            className="text-xl text-[#ff3a3a] font-bold  bg-white rounded-lg p-3"
            for="companies"
          >
            Companies:
          </label>
          <select name="companies">
            <option
              className="text-[#ff3a3a] font-bold  bg-white rounded-lg border-[1px] border-[#000]"
              value="AMZ"
            >
              AMZ
            </option>
            <option
              className="text-[#ff3a3a] font-bold  bg-white rounded-lg border-[1px] border-[#000]"
              value="FLP"
            >
              FLP
            </option>
            <option
              className="text-[#ff3a3a] font-bold  bg-white rounded-lg border-[1px] border-[#000]"
              value="SNP"
            >
              SNP
            </option>
            <option
              className="text-[#ff3a3a] font-bold  bg-white rounded-lg border-[1px] border-[#000]"
              value="MYN"
            >
              MYN
            </option>
            <option
              className="text-[#ff3a3a] font-bold  bg-white rounded-lg border-[1px] border-[#000]"
              value="AZO"
            >
              AZO
            </option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Accepting
