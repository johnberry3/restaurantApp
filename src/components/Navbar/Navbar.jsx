import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const DropdownLinks = [
  {
    id: 1,
    name: "Vegetables",
    links: "/#"
  },
  {
    id: 2,
    name: "Fruits",
    links: "/#"
  },
  {
    id: 3,
    name: "Grains",
    links: "/#"
  },
]

const NavLinks = [
  {
    id: 1,
    name: "Home",
    links: "/#"
  },
  {
    id: 2,
    name: "About",
    links: "/#"
  },
  {
    id: 3,
    name: "Contact",
    links: "/#"
  },
]

const Navbar = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="container flex items-center py-4 sm:py-3 justify-between">
         <h2 className="font-bold">Logo</h2>
         <div>
          <ul className="flex items-center gap-10 ">
            {NavLinks.map(({id, name, links})=>(
               <li key={id}>
                 <a  className="inline-block hover:text-primary font-semibold" href={links}>{name}</a>
               </li>
            ))}

            <li className="cursor-pointer group">
            <a  className="inline-block hover:text-primary font-semibold" href="/#">
              <div className="flex  items-center gap-2">
            Dropdown <span className="group-hover:rotate-180 transition"><FaCaretDown /></span>
            </div> 
            </a>
             {/* DROPDOWN COMPONENTS */}
              <div className="absolute z-[9999] hidden p-2 group-hover:block bg-white w-[200px] bg-white text-black shadow-md">
                 <ul>
                   {DropdownLinks.map((data)=>(
                     <li  key={data.id}>
                      <a href="" className="inline-block hover:text-primary font-semibold">{data.name}</a>
                      </li>
                   ))}
                 </ul>
              </div>
            </li>
            {/* Button section  */}
             <li>
               <button className="flex justify-center items-center gap-2 text-white bg-secondary p-3">
                <FaUser/> My Account
               </button>
             </li>
          </ul>
         </div>
      </div>
    </div>
  )
};

export default Navbar;
