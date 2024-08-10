import React from 'react';

const ShowResume = ({ filename }) => {
  return (
    <div>
      <h1>Resume Viewer</h1>
      <p>Click the link below to open the resume in Microsoft Word:</p>
      <p>
        <a href={`ms-word:ofe|u|http://0.0.0.0:5000/${filename}`} target="_blank" rel="noopener noreferrer">
          {filename}
        </a>
      </p>
    </div>
  );
};

export default ShowResume;
