import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from 'react';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import {Route, Navigate, useNavigate} from 'react-router-dom';

export function EditPriceList() {
  const { id } = useParams();
  const [serviceList, setServiceList] = useState(null);

  useEffect (() => {

      fetch(`https://63d139433f08e4a8ff933a88.mockapi.io/ledApi/${id}`, {
        method: 'GET',
      })
          .then((response) => response.json())
          .then((data) => setServiceList(data));

}, []);

return(
  <div>

  { serviceList ? <EditPrices serviceList={serviceList}/>: "Loading..." }
  
  </div>
)

}

function EditPrices({serviceList, setServiceList}){
  const [price, setPrice] = useState("");
// const {handleSubmit, handleChange} = useFormik({
//   initialValues: {
//     price : serviceList.price,
//   },
//   validationSchema: serviceList.ValidationSchema,
//   onSubmit: (updatedServiceList) => {
//     editServiceList(updatedServiceList);
//   },
// });
const navigate = useNavigate();

const editServiceList = (updatedServiceList)=>{

  fetch(`https://63d139433f08e4a8ff933a88.mockapi.io/ledApi/${serviceList.id}`,{

  method: "PUT",
  body: JSON.stringify(updatedServiceList),
  headers: { "Content-Type": "application/json" },
}).then(() => navigate("/"))
  };
  return (

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      className='container forms'
    >
      <h4 className='form-label'>Enter Price</h4>
      <TextField  id="outlined-basic" label="price" price="price" variant="outlined"  onChange={(event) => setPrice(event.target.value)}/>
      <Button variant="contained" type='submit' onClick={editServiceList}>Update</Button>
    </Box>

  );
}




