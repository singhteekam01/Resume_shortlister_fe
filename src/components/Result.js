import React from 'react';

const Result = ({ topK, message, tableRows }) => {
  return (
    <div>
      <h1>Ranked Resumes (Top {topK})</h1>
      {message ? (
        <p>{message}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Filename</th>
              <th>Matching Percentage</th>
              <th>Matching Keywords</th>
              <th>Non-Matching Keywords</th>
              <th>Emails</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, index) => (
              <tr key={index}>
                <td>{row.filename}</td>
                <td>{row.matching_percentage}%</td>
                <td>{row.matching_keywords}</td>
                <td>{row.non_matching_keywords}</td>
                <td>{row.emails}</td>
                <td>{row.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Result;
