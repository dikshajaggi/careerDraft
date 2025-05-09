import React from 'react'

const TemplateOne = ({ data }) => {
    return (
        <div className="print-content print:w-[794px] print:h-[1123px] print:overflow-hidden print:break-after-page bg-white text-black px-8 py-10 max-w-3xl mx-auto shadow-lg font-sans">
          {/* Header Section - Centered */}
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">{data.about.name}</h1>
            <p className="text-xl text-gray-700">{data.about.title}</p>
           
            
            {/* Inline contact details */}
            <div className="mt-4 text-sm text-gray-600 flex flex-wrap justify-center gap-4 border-b border-t">
              <span>{data.about.contact.email}</span>
              <span>{data.about.contact.phone}</span>
              <span>{data.about.contact.location}</span>
            </div>

            <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">{data.about.summary}</p>
          </header>
    
          {/* Skills Section */}
          <section className="mb-5">
            <h2 className="text-xl font-semibold text-gray-800 border-b mb-2">Skills</h2>
            <ul className="flex flex-wrap gap-2">
              {data.skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-gray-200 text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
    
          {/* Experience Section */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 border-b mb-2">Experience</h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-3">
                <h3 className="text-md font-semibold text-gray-900">{exp.role} @ {exp.company}</h3>
                <p className="text-sm text-gray-600 italic">{exp.duration}</p>
                <p className="text-sm text-gray-700 mt-1">{exp.details}</p>
              </div>
            ))}
          </section>
    
          {/* Projects Section */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 border-b mb-2">Projects</h2>
            {data.projects.map((project, index) => (
              <div key={index} className="mb-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline"
                >
                  {project.name}
                </a>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
            ))}
          </section>
    
          {/* Education Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 border-b mb-2">Education</h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-2">
                <h3 className="text-md font-medium text-gray-900">{edu.degree}</h3>
                <p className="text-sm text-gray-700">{edu.institution}</p>
                <p className="text-sm text-gray-600 italic">{edu.duration}</p>
              </div>
            ))}
          </section>
        </div>
      );
    };
    
  export default TemplateOne;