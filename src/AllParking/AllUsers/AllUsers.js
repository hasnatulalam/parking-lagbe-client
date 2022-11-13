import "./AllUsers.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../Pages/datatablesource";
import { Link, useLocation } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const AllUsers = () => {
  const location = useLocation();
   const path = location.pathname.split("/")[1]; 
  
  const { data, loading, error } = useFetch("http://localhost:9000/api/users/getallusers");
 

 /*   useEffect(() => {
    setList("http://localhost:9000/api/users/getallusers");
   
  }, [data]);  */


  const handleDelete = async (id) => {
     /* try {
       await axios.delete(`http://localhost:9000/api/users/deleteuser/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {}   */
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
         getRowId={(row) => row._id} 
      />
    </div>
  );
};

export default AllUsers;