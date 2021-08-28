import React from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon, ChartBarIcon } from '@heroicons/react/solid'


function Sidebar() {
  return (


  <div className="bg-gray-300 text-gray w-64 flex-none mt-5 ">

    <nav>
      <ul>
        <li className="active:bg-blue-500 flex"><HomeIcon className="h-5 w-5 text-blue-500 inline-block"/><div className="space-x-4 ml-1 p-1 hover:text-blue-500 hidden md:block cursor-pointer"><Link to="/dashboard">Dash</Link></div></li>
        <li className="active:bg-blue-500 flex"><ChartBarIcon className="h-5 w-5 text-blue-500 inline-block"/><div className="space-x-4 ml-1 p-1 hover:text-blue-500 hidden md:block cursor-pointer"><Link to="/market">Market</Link></div></li>
        <li className="active:bg-blue-500 flex"><ChartBarIcon className="h-5 w-5 text-blue-500 inline-block"/><div className="space-x-4 ml-1 p-1 hover:text-blue-500 hidden md:block cursor-pointer"><Link to="/market1">Market1</Link></div></li>
        <li><Link to="/market2">Market2</Link></li>
      </ul>
    </nav>
  </div>

  );
}

export default Sidebar;

