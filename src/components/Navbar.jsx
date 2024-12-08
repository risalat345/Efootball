import React from 'react'

const Navbar = () => {
  return (
    <div className='mb-5'>
      <nav className='bg-black top-0 fixed px-14 py-3  w-full left-0'>
        <ul className='flex justify-between font-bold'>
          <li className= ' hover:text-yellow-400 cursor-pointer'>Your Profile</li>
          <li className='hover:text-yellow-400 cursor-pointer'>Match Schedule</li>
          <li className='hover:text-yellow-400 cursor-pointer'>Point Tabel</li>
          <li className='hover:text-yellow-400 cursor-pointer'>Rule</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
