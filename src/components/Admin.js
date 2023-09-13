import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { RiFileExcel2Fill } from 'react-icons/ri'; // Import the Excel file icon
import { BsCheckSquare } from 'react-icons/bs'; // Import the checklist icon
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Admin() {const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const[data,setData]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:8081/ems')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err));
  })
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };
  // const [allEmployees, setAllEmployees] = useState([]);

  // const fetchData = async () => {
  //   const result = await axios.get("http://localhost:8000/get-all-employees");
  //   setAllEmployees(result.data.employees);
  // };

  // useEffect(() => {
  //   fetchData();
  // });

  // // handleDelete
  // const handleDelete = async (id) => {
  //   const result = await axios.delete(
  //     `http://localhost:8000/delete-employee/${id}`
  //   );
  //   alert((await result).data.message);
  //   fetchData();
  // };
  return (
    <div className="container mt-2">
    <h1 className="mb-5 text-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16">
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
      </svg> &nbsp;
      Material Management System <br /> <br />
     
      </h1>
      <h1 className="mb-5 text-center"><i class="fa-solid fa-list"></i> &nbsp; Material List</h1>
<div> 
        <div>
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        <Link to="/add">
        <button className="btn btn-info me-5">
            <i className="fa-solid fa-plus" aria-hidden="true"></i> </button>  
            </Link> 
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/addfile">
          <button className="btn btn-info me-5">
            <i className="fa-solid fa-arrow-up-from-bracket" aria-hidden="true"></i>
            &nbsp;
          </button>
        </Link>
      </div>
      
      
      </div>
      <br></br>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
          <th><BsCheckSquare /></th> {/* Add the checklist icon */}
            <th>Material ID</th>
            <th>Material Category</th>
            <th>Short Des</th>
            <th>Long Des</th>
            <th>Size1</th>
            <th>Size2</th>
            <th>Size3</th>
            <th>Pressure Class</th>
            <th>Sch1</th>
            <th>Sch2</th>
            <th>Sch3</th>
            <th>Thk1</th>
            <th>Thk2</th>
            <th>Thk3</th>
            <th>End Connection1</th>
            <th>End Connection2</th>
            <th>Spec1</th>
            <th>Spec2</th>
            <th>Spec3</th>
            <th>Spec4</th>
            <th>Spec5</th>
            <th>Unit Weight</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              {/* <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></td> */}
             <td><BsCheckSquare /></td>

              <td><input type="text" class="search-input" /></td>
              <td><input type="text" class="search-input" /></td>
              <td><input type="text" class="search-input" /></td>
              <td><input type="text" class="search-input" /></td>
              <td><input type="text" class="search-input" /></td>
              <td><input type="text" class="search-input" /></td>
              <td><input type="text" class="search-input" /></td>
              <td><input type="text" class="search-input" /></td>
              <td><input type="text" class="search-input" /></td>
              <td><input type="text" class="search-input" /></td>
              <td><input type="text" class="search-input" /></td>
              <td><input type="text" class="search-input" /></td>
              <td><input type="text" class="search-input" /></td>
              <td><input type="text" class="search-input" /></td>
              <td><input type="text" class="search-input" /></td>
              <td><input type="text" class="search-input" /></td>
              <td><input type="text" class="search-input" /></td>
              <td><input type="text" class="search-input" /></td>
              <td><input type="text" class="search-input" /></td>
              <td><input type="text" class="search-input" /></td>
              <td><input type="text" class="search-input" /></td>
              <td><input type="text" class="search-input" /></td>
              <td>
</td>

            </tr>
        </tbody>
        <tbody>
          {data.map((ems,index)=>{
            return<tr key={index}>
              {/* <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></td> */}
               <td><BsCheckSquare /></td>

              <td>{ems.material_id}</td>
              <td> {ems.material_cat}</td>
              <td>{ems.short_description}</td>
              <td>{ems.long_description}</td>
              <td>{ems.size1}</td>
              <td>{ems.size2}</td>
              <td>{ems.size3}</td>
              <td>{ems.pressure_class}</td>
              <td>{ems.schedule1}</td>
              <td>{ems.schedule2}</td>
              <td>{ems.schedule3}</td>
              <td>{ems.thickness1}</td>
              <td>{ems.thickness2}</td>
              <td>{ems.thickness3}</td>
              <td>{ems.end_connection1}</td>
              <td>{ems.end_connection2}</td>
              <td>{ems.spec1}</td>
              <td>{ems.spec2}</td>
              <td>{ems.spec3}</td>
              <td>{ems.spec4}</td>
              <td>{ems.spec5}</td>
              <td>{ems.unit_weight}</td>
              <td>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Link to={"edit/"} className="btn btn-primary me-3">
      <i className="fa-solid fa-pen-to-square"></i>
    </Link>
    <button
      type="button"
      className="btn btn-danger"
      // onClick={(e) => handleDelete()}
    >
      <i className="fa-solid fa-trash"></i>
    </button>
  </div>
</td>

            </tr>
             })}
        </tbody>
              </Table>
      <td>
  
  </td>

    </div>
    
  );
}

export default Admin;
