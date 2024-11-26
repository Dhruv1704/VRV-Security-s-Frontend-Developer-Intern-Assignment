import './App.css';
import Admin from "./Components/Admin";
import Navbar from "./Components/Navbar";
import AddModal from "./Components/AddModal";
import {useState} from "react";
import EditModal from "./Components/EditModal";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    const [displayAddModal, setDisplayAddModal] = useState(false)
    const [displayEditModal, setDisplayEditModal] = useState(false)
    const [editRowId, setEditRowId] = useState()
    const localRows = JSON.parse(localStorage.getItem("rows"));
    const defaultRow = localRows===null?[
        {id: "1", name: "Dhruv", creation_date: "2023-11-20", role: "Admin", permissions: ["Delete", "Read", "Write"], status: "Active"},
        {id: "2", name: "VRV", creation_date: "2023-11-24", role: "Admin", permissions: ["Delete","Write"], status: "Active"},
        {id: "3", name: "Rohan", creation_date: "2023-11-22", role: "User", permissions: ["Read","Write"], status: "Active"},
        {id: "4", name: "Rahul", creation_date: "2023-11-21", role: "User", permissions: ["Write"], status: "Active"},
        {id: "5", name: "John", creation_date: "2023-11-30", role: "User", permissions: ["Write"], status: "Inactive"},
    ]:localRows;
    const [rows, setRows] = useState(defaultRow);
  return (
      <>
        <Navbar/>
        <Admin setDisplayModal={setDisplayAddModal} rows={rows} setRows={setRows} setDisplayEditModal={setDisplayEditModal} setEditRowId={setEditRowId}/>
          <AddModal displayAddModal={displayAddModal} setDisplayAddModal={setDisplayAddModal} rows={rows} setRows={setRows}/>
          <EditModal displayEditModal={displayEditModal} setDisplayEditModal={setDisplayEditModal} rows={rows} editRowId={editRowId} setRows={setRows}/>
          <ToastContainer/>
      </>
  );
}

export default App;
