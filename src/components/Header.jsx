import React from 'react'
import { Link } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../redux/themeSlice'

const Header = () => {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme.value)

  console.log(theme, "theme")
  return (
    <header className="p-4 sticky top-0 z-50 bg-white shadow-md dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <Link to="/">
          <h1 className="text-primary font-bold text-xl sm:text-2xl dark:text-primary-dark">CareerDraft</h1>
        </Link>

        <div className="flex items-center space-x-3">
          <button className="rounded-lg bg-primary text-white font-semibold px-4 py-2 text-sm sm:text-base hover:bg-primary-hover transition dark:bg-primary-dark">
            Log In
          </button>
          <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-500 transition cursor-pointer" onClick={() => dispatch(changeTheme())}>
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" /> }
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
