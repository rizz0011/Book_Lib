import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const root = {
  width: 350,
};

function NewEmployee({handleClose, data, setData}) {

    
    const [state, setState] = React.useState({
      id:new Date().getMilliseconds().toString(),
        name:'',
        designation:'',
        gender:'',
      })

      const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setState({...state, [name]: value})
      }

      const handleSave = () => {
        setData([...data, {data:state}])
        handleClose()
      }

console.log('state',state)
console.log('data',data)

  return (
    <Box sx={{ ...root }}>
      <Card>
        <CardHeader title={<Typography>Add New Employee</Typography>} />
        <Divider />
        <CardContent>
          <Grid container spacing={1}>
            <Grid item sm={12}>
              <TextField required fullWidth size="small" label="Name"  name="name" value={state?.name} onChange={handleChange}/>
            </Grid>
            <Grid item sm={12}>
              <TextField required fullWidth size="small" label="Designation" name="designation" value={state?.designation} onChange={handleChange}/>
            </Grid>

           

            <Grid item sm={12}>
              <FormControl fullWidth >
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="gender"
                  value={state?.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="Other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

          </Grid>
        </CardContent>
        <Divider/>
        <CardActions>
            <Button
            size="small"
            variant="contained"
            onClick={handleSave}>
                Save
            </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default NewEmployee;
