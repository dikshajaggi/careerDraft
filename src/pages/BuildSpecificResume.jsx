import React, { useState } from 'react'
import TemplateOne from '../components/TemplateOne'
import ResumeBuilderForm from '../components/ResumeBuilderForm'
import { sampleResumeData } from '../static/sampleResumeData';
import { useParams } from 'react-router-dom';

const BuildSpecificResume = () => {
    const {id} = useParams()
    const [resumeData, setResumeData] = useState(sampleResumeData);

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className='mb-4 dark:bg-dark-bg'>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Resume Builder</h1>
        
        {/* Print Button */}
        <div className="text-center mb-4">
            <button
            onClick={handlePrint}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-hover transition cursor-pointer"
            >
            Print Resume
            </button>
        </div>

        <div className="flex flex-col justify-evenly items-start sm:flex-row gap-4">
            <ResumeBuilderForm onChange={setResumeData} />
            {id === "template1" && <TemplateOne data={resumeData} />}

        </div>
        </div>
    )
}

export default BuildSpecificResume
