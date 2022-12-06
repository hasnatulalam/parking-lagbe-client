import "./AllParkingSpace.css";
import { DataGrid } from "@mui/x-data-grid";
import { hotelColumns,  } from "../../Pages/datatablesource";
import { Link, useLocation } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const AllParkingSpace = () => {
 
  const [list, setList] = useState([]);
  

 
  
   const { data, loading, error } = useFetch("http://localhost:9000/api/parking/AllParkings");  
 

    useEffect(() => {
    setList(data);
   
  }, [data]);  


  const handleDelete = async (id) => {
      try {
       await axios.delete(`http://localhost:9000/api/parking/AllParkings/delete/${id}`);
       setList(list.filter((item) => item._id !== id)); 
      
    } catch (err) {}   
   
  }; 

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
          
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
     
      <DataGrid
        className="datagrid"
        rows={list}
        columns={hotelColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
         getRowId={(row) => row._id} 
      />
    </div>
  );
};

export default AllParkingSpace;