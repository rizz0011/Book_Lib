import React, { useContext, useState } from "react";
import { Box } from "@mui/system";
import { students } from "../../App";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";





const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
};

function AddTodo( {closeModal}) {
  const {data, setData} = useContext(students);
  const [state, setState] = useState({
    studentName:'',
    courseName:'',
    bookName:'',
    authorName:'',
    issueDate:''
  })


  console.log("state",state)
  console.log("date",data)
const handleChange = (e) => {
  const name = e.target.name
  const value = e.target.value
  setState({...state, [name]: value})
}

const handleSave = () => {
  setData([...data, {data:state}])
  closeModal && closeModal()
 
}

  return (
    <Box sx={{ ...style }}>
      <Card>
        <CardHeader title={<Typography>Add Your Book List</Typography>} />
        <Divider />
        <CardContent>
          <Grid container spacing={1}>
            <Grid item sm={6}>
              <Input
                sx={{ border: "1px solid grey", p: "3px", borderRadius: "2px" }}
                disableUnderline
                placeholder="Student Name"
                fullWidth
                variant="outlined"
                size="small"
                name='studentName'
                value={state?.studentName}
                onChange={handleChange}
              />
            </Grid>

            <Grid item sm={6}>
              <Input
                sx={{ border: "1px solid grey", p: "3px", borderRadius: "2px" }}
                disableUnderline
                placeholder="Course Name"
                fullWidth
                variant="outlined"
                size="small"
                name='courseName'
                value={state?.courseName}
                onChange={handleChange}
              />
            </Grid>

            <Grid item sm={6}>
              <Input
                sx={{ border: "1px solid grey", p: "3px", borderRadius: "2px" }}
                disableUnderline
                placeholder="Book Name"
                fullWidth
                variant="outlined"
                size="small"
                name='bookName'
                value={state?.bookName}
                onChange={handleChange}
              />
            </Grid>

            <Grid item sm={6}>
              <Input
                sx={{ border: "1px solid grey", p: "3px", borderRadius: "2px" }}
                disableUnderline
                placeholder="Author Name"
                fullWidth
                variant="outlined"
                size="small"
                name='authorName'
                value={state?.authorName}
                onChange={handleChange}
              />
            </Grid>

            <Grid item sm={6}>
              <Input
                sx={{ border: "1px solid grey", p: "3px", borderRadius: "2px" }}
                disableUnderline
                placeholder="Issue Date"
                fullWidth
                variant="outlined"
                size="small"
                name='issueDate'
                value={state?.issueDate}
                onChange={handleChange}
              />
            </Grid>
           
            <Grid item sm={12}>
              <Button
              variant="contained"
              size='small'
              onClick={handleSave}
              >
            Save</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

{/* <BookDetail data={data}/> */}

    </Box>
  );
}

export default AddTodo;
