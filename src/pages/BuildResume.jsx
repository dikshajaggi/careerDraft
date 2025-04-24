import React from 'react'
import { templates } from '../static/templateData';
import { Link } from 'react-router-dom';

const BuildResume = () => {

  const handleTemplateSelect = (templateId) => {
    console.log("Selected Template:", templateId);
  };

  return (
     <div className="mb-12 px-4 max-w-6xl mx-auto dark:bg-dark-bg">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 mt-2">Resume Builder</h1>
      <p className="text-center text-gray-600 mb-8 dark:text-dark-text">
        Choose one template of your choice and start editing to create your resume in minutes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="cursor-pointer group"
            onClick={() => handleTemplateSelect(template.id)}
          >
            <div className="overflow-hidden rounded-lg shadow-md">
             <Link to = {`/build-resume/${template.id}`}>
              <img
                  src={template.image}
                  alt={template.name}
                  className="w-full max-w-xs md:max-w-sm h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
             </Link>
            </div>
            <p className="text-center mt-2 font-medium text-gray-800">{template.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BuildResume
