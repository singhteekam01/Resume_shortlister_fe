import React, { useState } from 'react';
import {Button, Col, Form, Input, Row, Spin} from 'antd';

const Index = ({ errorMessage = '', topResumes = [] }) => {
  const [resumes, setResumes] = useState(topResumes);
  const [error, setError] = useState(errorMessage);
  const [loading, setLoading]= useState(false)

  const handleSubmit = async (values) => {

    try {
      setLoading(true)
      const response = await fetch('http://127.0.0.1:8000/evaluate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(values),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setLoading(false)
      const data = await response.json();
      setResumes(data.top_resumes);
      setError('');
    } catch (error) {
      setLoading(false)
      console.error('There was a problem with the fetch operation:', error);
      setError('Failed to fetch top resumes');
    }
  };

  return (
    <Spin spinning={loading}>
    <div className="form-container">
      <h1>Resume Evaluator</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Form requiredMark={false} initialValues={{top_k:5}} layout="vertical"  onFinish={handleSubmit} >
       <Row gutter={24} className='w-100'>
        <Col xs={24} md={12} >
        <Form.Item label="Skillset*" name={"skillset"} rules={[{
          required:true,
          message:"Please enter skillset"
        }]}>  
          <Input placeholder='Skillset (comma-separated):' style={{width:"100%"}} />
        </Form.Item>
        </Col>
        <Col xs={24} md={12}>
        <Form.Item  name="top_k" label="Top K Resumes*" rules={[{
          required:true,
          message:"Please enter number of resumes."
        }]} >
          <Input min={1} type="number" placeholder='Top K Resumes (integer):'/>
        </Form.Item>
        </Col>
       <Col>
       <Button loading={loading} type="primary" htmlType="submit">Evaluate</Button></Col>
       </Row>
       
        
      </Form>

      {resumes.length > 0 &&(
        <table>
          <thead>
            <tr>
              <th>Filename</th>
              <th>Matching Percentage</th>
              <th>Matching Keywords</th>
              <th>Non-Matching Keywords</th>
              <th>Emails</th>
              <th>Name</th>
              <th>Phone</th>
              <th style={{ display: 'none' }}>File Path</th>
            </tr>
          </thead>
          <tbody>
            {resumes.map((resume, index) => (
              <tr key={index}>
                <td>
                  <a href={`/show_resume/${resume.filename}`} target="_blank" rel="noopener noreferrer">
                    {resume.filename}
                  </a>
                </td>
                <td>{resume.matching_percentage}%</td>
                <td>{resume.matching_keywords}</td>
                <td>{resume.non_matching_keywords || 'None'}</td>
                <td>{resume.emails}</td>
                <td>{resume.name}</td>
                <td>{resume.phone}</td>
                <td style={{ display: 'none' }}>{resume.file_path}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </Spin>
  );
};

export default Index;
