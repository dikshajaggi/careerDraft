import React, { useContext } from 'react'
import { handleUpload } from '../utils/ButtonFunctions';
import { MainContext } from '../utils/MainContext';

const Button = ({text, file, setIsLoading}) => {
  const {setAnalyzed, setAnalysedResult} = useContext(MainContext)

  const handleClick = () => {
    if (text === "Analyze Resume") {
      alert("Please select a resume to analyze.");
      return;
    }
  }

  return (
    <button onClick={ file ? () => handleUpload(file, setAnalyzed, setAnalysedResult, setIsLoading )  : handleClick} className='rounded-lg bg-primary dark:bg-primary-dark text-white text-lg font-semibold  px-6 py-3 cursor-pointer hover:bg-primary-hover'>
      {text}
    </button>
  )
}

export default Button
