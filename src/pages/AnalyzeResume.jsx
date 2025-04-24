/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import useLoading from "../hooks/useLoading";
import resumeloader from "../assets/resumegif.gif"
import { MainContext } from "../utils/MainContext";
import AnalysisResult from "../components/AnalysisResult";


const AnalyzeResume = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useLoading(false)
  const {analyzed, setAnalyzed} = useContext(MainContext)

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  useEffect(() => {
      setIsLoading(false)
      setAnalyzed(false)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-10 dark:bg-dark-bg dark:text-dark-text">
      {(!analyzed && !isLoading) && <>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Analyze Your Resume</h1>
        <p className="text-light-text text-center max-w-lg mb-6 dark:text-dark-text">
          Upload your resume in PDF format, and our AI will analyze it for ATS compatibility, readability, and optimization tips.
        </p>
        <label className="w-full md:w-1/2 h-40 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary transition mb-6">
          <input type="file" accept=".pdf" className="hidden" onChange={handleFileChange} />
          <span className="mt-2 text-gray-600 dark:text-dark-text">Click or Drag & Drop to Upload Resume</span>
        </label>
        {file && <p className="mt-4 text-primary font-medium">Selected File: {file.name}</p>}
        {file?.name ? <Button text="Analyze Resume" file= {file} setIsLoading={setIsLoading} /> : <Button text="Analyze Resume" />}
      </>}


      {(analyzed && !isLoading) && <AnalysisResult />}


      {isLoading && <>
        <h4 className="font-bold text-lg">Analyzing your resume</h4>

        <img src={resumeloader} alt="resume loader gif" className = "w-[200px]" />
        </>}
    </div>
  );
};

export default AnalyzeResume;
