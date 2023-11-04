import React, { useState } from 'react';
import '../Style/WordCount.css'



function WordCount() {
  const [file, setFile] = useState(null);
   const [query, setQuery] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('pdfFile', file);

    fetch('http://localhost:3000/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        let result =JSON.parse(data)
        setQuery(result.message)
        console.log(result.message);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='MainContainer'>
      <h1>PDF File Upload</h1>
      <div className='filePlace'>
      <label> 📄 Select File 📁 </label>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      </div>
      <button onClick={handleUpload}>Upload PDF</button>
      <p>Total Count Of word 📰 : {query}</p>
    </div>
    
  );
}

export default WordCount;