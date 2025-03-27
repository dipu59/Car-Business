import { ArrowBigDown, ChevronDown, DropletIcon, Search } from "lucide-react";

const Type = () => (
  <div className="flex md:mx-0 mx-3  items-center  relative pr-3">
    <label>
      <span className="flex text-[#9A9EA7] pb-1 text-sm">
        Type
      </span>
      <select className="outline-none font-semibold  appearance-none md:appearance-auto md:-ml-1 pb-3  md:pr-5 pr-52 right-0  ">
        <option value="Used Card" className=" select-text">Used Card</option>
        <option value="One">New Car </option>
        <option value="Two">Vangri Car</option>
        <option value="Three">Three</option>
      </select>
      <span className="absolute right-4 top-1/2 transform md:d-none  pointer-events-none text-gray-500">
      <ChevronDown className="size-4 font-bold  md:hidden"/>

      </span>

    </label>    
    <div className="absolute md:right-0  bottom-0 md:bottom-auto   md:h-9 h-[1px] w-[95%] items-center md:w-[1.5px] bg-[#EDE8E9]"></div>


  </div>
);
const Make = () => (
    <div className="flex md:mx-0 mx-3  items-center  relative pr-3">
    <label>
      <span className="flex pb-1 text-[#9A9EA7] text-sm">
        Make
      </span>
      <select className="outline-none font-semibold  appearance-none md:appearance-auto md:-ml-1 pb-3  md:pr-5 pr-52 right-0  ">
        <option value="Used Card" className=" select-text">Infiniti</option>
        <option value="One">One </option>
        <option value="Two">Two</option>
        <option value="Three">Three</option>
      </select>
      <span className="absolute right-4 top-1/2 transform md:d-none  pointer-events-none text-gray-500">
      <ChevronDown className="size-4 font-bold  md:hidden"/>

      </span>

    </label>    
    <div className="absolute md:right-0  bottom-0 md:bottom-auto   md:h-9 h-[1px] w-[95%] items-center md:w-[1.5px] bg-[#EDE8E9]"></div>


  </div>
);
const Years = () => (
  <div className="flex md:mx-0 mx-3  items-center  relative pr-3">
  <label>
    <select className="outline-none text-[#9A9EA7] font-semibold  appearance-none md:appearance-auto md:-ml-1 pb-3  md:pr-5 pr-52 right-0  ">
      <option value="Used Card">Year</option>
      <option value="2000">2000 </option>
      <option value="2016">2016</option>
      <option value="2025">2025</option>
    </select>
    <span className="absolute right-4 top-1/2 transform md:d-none  pointer-events-none text-gray-500">
    <ChevronDown className="size-4 font-bold  md:hidden"/>

    </span>

  </label>    
  <div className="absolute md:right-0  bottom-0 md:bottom-auto   md:h-9 h-[1px] w-[95%] items-center md:w-[1.5px] bg-[#EDE8E9]"></div>


</div>
);
const Model = () => (
  <div className="flex md:mx-0 mx-3  items-center  relative pr-3">
  <label>
    <select className="outline-none text-[#9A9EA7] font-semibold  appearance-none md:appearance-auto md:-ml-1 pb-3  md:pr-5 pr-52 right-0  ">
      <option value="Used Card" className=" ">Model</option>
      <option value="2000">M340i </option>
      <option value="2016">BMW M2</option>
      <option value="2025">Z4 M40</option>
    </select>
    <span className="absolute right-4 top-1/2 transform md:d-none  pointer-events-none text-gray-500">
    <ChevronDown className="size-4 font-bold  md:hidden"/>

    </span>

  </label>    
  <div className="absolute md:right-0  bottom-0 md:bottom-auto   md:h-9 h-[1px] w-[95%] items-center md:w-[1.5px] bg-[#EDE8E9]"></div>


</div>
);
const Price = () => (
  <div className="flex md:mx-0 mx-3  items-center  relative pr-3">
  <label>
    <select className="outline-none text-[#9A9EA7] font-semibold  appearance-none md:appearance-auto md:-ml-1 pb-3  md:pr-5 pr-52 right-0  ">
      <option value="Used Card">Price</option>
      <option value="2000">1400$ </option>
      <option value="2016">2000$</option>
      <option value="2025">5000$</option>
    </select>
    <span className="absolute right-4 top-1/2 transform md:d-none  pointer-events-none text-gray-500">
    <ChevronDown className="size-4 font-bold  md:hidden"/>

    </span>

  </label>    
  <div className="absolute md:right-0  bottom-0 md:bottom-auto   md:h-9 h-[1px] w-[95%] items-center md:w-[1.5px] bg-[#EDE8E9]"></div>


</div>
);


export  const Filters=()=>{
  return(
    <section>
      <h2 className="md:text-center mt-16 mx-3 text-left text-2xl md:text-4xl font-semibold">Which vehicles you are looking for? </h2>
      <div className="mt-5 md:flex space-y-2 md:space-y-0 justify-center py-3 shadow md:w-[820px] w-[95%] rounded-xl mx-auto gap-5">
    <Type/>
    <Make/>
    <Years/>
    <Model/>
    <Price/>
    <div className="flex items-center ">
      <div className="px-7  py-3 bg-[#7963F0] w-full justify-center mx-2 md:mx-0 rounded-lg  cursor-pointer flex items-center gap-1">
      <Search className="size-4 text-white"/>
      <button className=" text-white font-semibold cursor-pointer">Search</button>
      </div>
    </div>
      </div>
    </section>
  )
}