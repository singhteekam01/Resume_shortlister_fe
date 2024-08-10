import React from 'react';
import './App.css';  // Import the CSS file
import ShowResume from './components/ShowResume';
import Result from './components/Result';
import Index from './components/Index';

const App = () => {
  const dummyData = {
    skillset: '',
    topK: 5,
    errorMessage: '',
    topResumes: [],
    message: '',
    tableRows: [],
  };

  return (
    <div className="App">
      <div className="container">
        <Index
          initialSkillset={dummyData.skillset}
          initialTopK={dummyData.topK}
          errorMessage={dummyData.errorMessage}
          topResumes={dummyData.topResumes}
        />
        <Result topK={dummyData.topK} message={dummyData.message} tableRows={dummyData.tableRows} />
        <ShowResume filename="example.docx" />
      </div>
    </div>
  );
};

export default App;
