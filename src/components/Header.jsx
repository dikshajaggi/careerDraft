import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className="p-4 sticky top-0 z-50 bg-white flex justify-between items-center">
        <Link to="/"><h1 className='text-primary font-bold text-2xl'>CareerDraft</h1></Link>
        <button className='rounded-lg bg-primary text-white text-lg font-semibold  px-4 py-1 cursor-pointer hover:bg-primary-hover text-[16px]'>
          Log In
        </button>
      </header>
    </>
  )
}

export default Header
