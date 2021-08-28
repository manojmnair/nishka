import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './../../assets/logo.png'


function Header() {
  return (
      <header className='flex flex-col sm:flex-row m-0 justify-between items-center h-auto pt-2 mb-2 sticky top-0 z-50 fixed animated 
      scrolled: !view.atTopOfPage' >

      <div className="w-24 mx-5">
                  <Link to="/">
        <img src={Logo}   alt=""/>
                    </Link>

    </div>
    <div>
    <nav className={"absolute flex flex-row top-full w-full left-0 z-20 md:static md:w-auto md:flex"}>
                                    <ul className="md:flex-row md:flex">
          <li className="list-none md:mr-5 flex w-full text-base uppercase hover:text-blue-500 cursor-pointer
                pt-2.5 px-2.5">
            <Link to="/">
              Home
            </Link>
          </li>
        </ul>
        <ul className="md:flex-row md:flex">
          <li className="list-none md:mr-5 flex w-full text-base uppercase hover:text-blue-500 cursor-pointer
                pt-2.5 px-2.5">
            <Link to="/dashboard">
              Dashboard
            </Link>
          </li>
        </ul>
        <ul className="md:flex-row md:flex">
          <li className="list-none md:mr-5 flex w-full text-base uppercase hover:text-blue-500 cursor-pointer
                pt-2.5 px-2.5">
            <Link to="/trade">
              Trade
            </Link>
          </li>
        </ul>


                <ul className="md:flex-row md:flex">
          <li className="list-none md:mr-5 flex w-full text-base uppercase hover:text-blue-500 cursor-pointer
                pt-2.5 px-2.5">
            <Link to="/networks">
              Networks
            </Link>
          </li>
        </ul>

        
                                <ul className="md:flex-row md:flex">
          <li className="list-none md:mr-5 flex w-full text-base uppercase hover:text-blue-500 cursor-pointer
                pt-2.5 px-2.5">
            <Link to="/profile">
              Profile
            </Link>
          </li>
        </ul>
                                <ul className="md:flex-row md:flex">
          <li className="mr-5 bg-blue-400 p-2 px-4 rounded-full transition-all hover:bg-blue-500">
            <Link to="/networks">
              Launch App
            </Link>
          </li>
        </ul>
      </nav>
    
    </div>
        </header>
  );
}

export default Header;
