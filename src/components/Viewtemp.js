import React from 'react'
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { BsCheckSquare } from 'react-icons/bs'; // Import the checklist icon
import Button from "react-bootstrap/esm/Button";


function Viewtemp() {
  return (
    <div>
    <div> <Table striped bordered hover size="sm">
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
      </tr>
    </thead>
    <tbody>
        <tr>
          {/* <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></td> */}
         <td></td>

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
        <tr>
          {/* <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></td> */}
           <td></td>

          <td>x</td>
          <td> x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          
        </tr>
    </tbody>
    <tbody>
        <tr>
          {/* <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></td> */}
          <td></td>
<td>x</td>
          <td> x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
         

        </tr>
    </tbody>
    <tbody>
        <tr>
          {/* <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></td> */}
          <td></td>
<td>x</td>
          <td> x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>

        </tr>
    </tbody>
    <tbody>
        <tr>
          {/* <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></td> */}
          <td></td>
<td>x</td>
          <td> x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
         
        </tr>
    </tbody>
    <tbody>
        <tr>
          {/* <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></td> */}
          <td></td>
<td>x</td>
          <td> x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
         
        </tr>
    </tbody>
  </Table></div>
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>  

  <Link to="/addfile">
            <Button variant="warning" type="submit">
              Close
            </Button>
          </Link>
          </div>
  </div>
  )
}

export default Viewtemp