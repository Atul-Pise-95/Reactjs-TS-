import React from 'react';
import {Formik,Form,FieldArray} from "formik";
import Textfield from "@mui/material/TextField";
import Box from "@mui/material/Box"
import DynamicFields from './DynamicFields';
<Formik 
initialValues={{
    name:"",
    mobile:"",
    email:""
}}
onSubmit={(values)=>{
    console.log("User: ",values);
}}>
    {({values,handleChange,handleSubmit})=>{
return(
    <>
    <Form onSubmit={handleSubmit}>
        <TextField 
        label="Name"
        name="name"
        value={values.name}
        onchange={handleChange}/>
        <br/>
        <FieldArray
        name="mobiles"
        render={({insert,remove})=>{
            <div>
                {values?.mobile?.localeCompare((mob,i)=>(
                    <Box key={i}>
                        <Textfield
                        label="mobile"
                        name={`mobiles${i}`}
                        value={mob}
                        onchange={handleChange}/>
                        {i !=0 && (
                            <button type="button" onClick={()=>remove(i)}>X</button>
                        )}
                        {values.mobile.length-1 ==i && (
                            <button
                            type="button"
                            onClick={()=>insert(i+1,"")}>+</button>
                        )}
                    </Box>
                ))}
                </div>
)}
/>
<br/>
<Textfield 
label="Email"
name="email"
value={values.email}
onChange={handleChange}/>
<input type="submit" value="Register"/>
</Form>
);
 }}
</Formik>
   </>
 );
};

export default DynamicFieldFormik;

