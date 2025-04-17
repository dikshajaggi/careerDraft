import React, { useState } from 'react';

const ResumeBuilderForm = ({ onChange }) => {
  const [formData, setFormData] = useState({
    about: {
      name: '',
      title: '',
      summary: '',
      contact: {
        email: '',
        phone: '',
        linkedIn: '',
      },
    },
    skills: [],
    experience: [
      { role: '', company: '', duration: '', details: '' },
    ],
    projects: [
      { name: '', link: '', description: '' },
    ],
    education: [
      { degree: '', institution: '', duration: '' },
    ],
  });

  const updateForm = (updated) => {
    setFormData(updated);
    if (onChange) onChange(updated);
  };

  const handleInputChange = (path, value) => {
    const updated = { ...formData };
    const keys = path.split('.');
    let temp = updated;
    for (let i = 0; i < keys.length - 1; i++) {
      temp = temp[keys[i]];
    }
    temp[keys[keys.length - 1]] = value;
    updateForm(updated);
  };

  const handleArrayChange = (section, index, key, value) => {
    const updated = { ...formData };
    updated[section][index][key] = value;
    updateForm(updated);
  };

  const addEntry = (section, template) => {
    const updated = { ...formData };
    updated[section].push({ ...template });
    updateForm(updated);
  };

  return (
    <form className="w-full max-w-2xl space-y-6 overflow-y-auto p-4 bg-white rounded shadow-md text-sm">
      <fieldset>
        <legend className="font-bold text-lg">About</legend>
        <input type="text" placeholder="Name" className="input" onChange={e => handleInputChange('about.name', e.target.value)} />
        <input type="text" placeholder="Title" className="input" onChange={e => handleInputChange('about.title', e.target.value)} />
        <textarea placeholder="Summary" className="input" onChange={e => handleInputChange('about.summary', e.target.value)} />
        <input type="email" placeholder="Email" className="input" onChange={e => handleInputChange('about.contact.email', e.target.value)} />
        <input type="text" placeholder="Phone" className="input" onChange={e => handleInputChange('about.contact.phone', e.target.value)} />
        <input type="text" placeholder="LinkedIn" className="input" onChange={e => handleInputChange('about.contact.linkedIn', e.target.value)} />
      </fieldset>

      <fieldset>
        <legend className="font-bold text-lg">Skills</legend>
        <input
          type="text"
          placeholder="Comma-separated skills"
          className="input"
          onChange={e => updateForm({ ...formData, skills: e.target.value.split(',').map(s => s.trim()) })}
        />
      </fieldset>

      <fieldset>
        <legend className="font-bold text-lg">Experience</legend>
        {formData.experience.map((exp, i) => (
          <div key={i} className="space-y-1 border-b pb-2">
            <input type="text" placeholder="Role" className="input" onChange={e => handleArrayChange('experience', i, 'role', e.target.value)} />
            <input type="text" placeholder="Company" className="input" onChange={e => handleArrayChange('experience', i, 'company', e.target.value)} />
            <input type="text" placeholder="Duration" className="input" onChange={e => handleArrayChange('experience', i, 'duration', e.target.value)} />
            <textarea placeholder="Details" className="input" onChange={e => handleArrayChange('experience', i, 'details', e.target.value)} />
          </div>
        ))}
        <button type="button" className="text-blue-600" onClick={() => addEntry('experience', { role: '', company: '', duration: '', details: '' })}>+ Add Experience</button>
      </fieldset>

      <fieldset>
        <legend className="font-bold text-lg">Projects</legend>
        {formData.projects.map((project, i) => (
          <div key={i} className="space-y-1 border-b pb-2">
            <input type="text" placeholder="Project Name" className="input" onChange={e => handleArrayChange('projects', i, 'name', e.target.value)} />
            <input type="url" placeholder="Project Link" className="input" onChange={e => handleArrayChange('projects', i, 'link', e.target.value)} />
            <textarea placeholder="Description" className="input" onChange={e => handleArrayChange('projects', i, 'description', e.target.value)} />
          </div>
        ))}
        <button type="button" className="text-blue-600" onClick={() => addEntry('projects', { name: '', link: '', description: '' })}>+ Add Project</button>
      </fieldset>

      <fieldset>
        <legend className="font-bold text-lg">Education</legend>
        {formData.education.map((edu, i) => (
          <div key={i} className="space-y-1 border-b pb-2">
            <input type="text" placeholder="Degree" className="input" onChange={e => handleArrayChange('education', i, 'degree', e.target.value)} />
            <input type="text" placeholder="Institution" className="input" onChange={e => handleArrayChange('education', i, 'institution', e.target.value)} />
            <input type="text" placeholder="Duration" className="input" onChange={e => handleArrayChange('education', i, 'duration', e.target.value)} />
          </div>
        ))}
        <button type="button" className="text-blue-600" onClick={() => addEntry('education', { degree: '', institution: '', duration: '' })}>+ Add Education</button>
      </fieldset>
    </form>
  );
};

export default ResumeBuilderForm;
