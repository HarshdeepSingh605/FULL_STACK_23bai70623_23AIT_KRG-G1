import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [output, setOutput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setOutput(`Form Data: ${JSON.stringify(formData, null, 2)}`);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="form-container">
      <h1>React Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="console-box">
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default App;