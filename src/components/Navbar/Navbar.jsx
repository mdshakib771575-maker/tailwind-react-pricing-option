import React, { useState } from 'react';
import Link from './Link';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];
const NavBar = () => {

  const [open, setOpen] = useState(false)
  return (
    <div className='flex justify-between mx-4 lg:mx-10'>

      <span className='flex gap-1.5' onClick={() => setOpen(!open)} >

        {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}

        <ul className={`md:hidden absolute duration-1000 bg-white shadow p-5
          ${open ? "top-9" : "-top-40"} `}>
          {
            navLinks.map(raout => <Link raout={raout}></Link>)
          }
        </ul>
        <h3>my navbar</h3>
      </span>
      <ul className='md:flex hidden'>
        {
          navLinks.map(raout => <Link raout={raout}></Link>)
        }
        {/* {
                   navLinks.map(raout => <li className='mr-10'> <a href={raout.path}>{raout.name}</a></li>)
                } */}

      </ul>
      {/* <ul className='flex'>
            <li className='mr-10'> <a href="/Home">Home</a></li>
            <li className='mr-10'> <a href="/About">About</a></li>
            <li className='mr-10'> <a href="/Blog">Blog</a></li>
           </ul>  */}
      <button>sing up</button>

    </div>
  );
};

export default NavBar;