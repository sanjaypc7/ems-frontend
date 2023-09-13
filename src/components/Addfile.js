import React, { useState, useEffect } from "react";
import '../App.css';
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";





function Addfile() {const [selectedFile, setSelectedFile] = useState(null);
    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
      };


  return (
<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>  

      <div className="button-container">
  <label htmlFor="file-upload" className="btn btn-info me-2">
    <i className="fa fa-solid fa-arrow-up-from-bracket"></i>
    &nbsp;
    Upload File
   
    <input type="file" id="file-upload" accept=".xlsx,.xls" onChange={handleFileSelect} style={{ display: "none" }} />
  </label>
  {/* <Link to="/"></Link> */}
  <Link to="/viewtemp">
  <button className="btn btn-info me-5">
    <i className="fa fa-eye" aria-hidden="true"></i> View Template
  </button>
  </Link>
</div>



    </div>
  )
}

export default Addfile