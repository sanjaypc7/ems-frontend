import "./App.css";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Addfile from "./components/Addfile";
import Viewtemp from "./components/Viewtemp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Admin />} />
        <Route path="add" element={<Add />} />
        <Route path="edit" element={<Edit />} />
        <Route path="addfile" element={<Addfile/>} />
        <Route path="viewtemp" element={<Viewtemp/>} />


      </Routes>
    </div>
  );
}

export default App;
