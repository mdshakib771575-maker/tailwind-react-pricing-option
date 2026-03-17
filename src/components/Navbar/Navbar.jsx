import React from 'react';
import Link from './Link';
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
const Navbar = () => {
    return (
        <nav>
            <ul className='flex'>
                {
                   navLinks.map(raout => <Link raout = {raout}></Link>)
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

        </nav>
    );
};

export default Navbar;