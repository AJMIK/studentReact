import { Grid, Typography, TextField, Button } from '@material-ui/core'
import React from 'react'

export default function Student() {
    return (
        <div>
           <Grid container>
           <Grid item xs={12} sm={12} md={12}>
               </Grid>
               <Grid item xs={12} sm={12} md={12}>
                   <Typography>STUDENT DETAILS</Typography>
                   <TextField
                   type="text"
                   variant="outlined"
                   label="Name"
                   margin="normal"
                   fullWidth
                   required
                   />
                   <TextField
                   type="text"
                   variant="outlined"
                   label="Admission No"
                   fullWidth
                   required
                   margin="normal"
                   />
                   <TextField
                   type="text"
                   variant="outlined"
                   label="Roll No"
                   fullWidth
                   required
                   margin="normal"
                   />
                   <TextField
                   type="text"
                   variant="outlined"
                   label="College"
                   fullWidth
                   required
                   margin="normal"
                   />
                   <TextField
                   type="date"
                   variant="outlined"
                   fullWidth
                   required
                   label="DOB"
                   margin="normal"
                   />
                   <TextField
                   type="number"
                   variant="outlined"
                   label="PhNo"
                   fullWidth
                   required
                   margin="normal"
                   />
                   <TextField
                   type="text"
                   variant="outlined"
                   label="Email"
                   fullWidth
                   required
                   margin="normal"
                   />
                   <TextField
                   type="password"
                   variant="outlined"
                   label="Password"
                   fullWidth
                   required
                   margin="normal"
                   />
                   <TextField
                   type="password"
                   variant="outlined"
                   label="Confirm Password"
                   fullWidth
                   required
                   margin="normal"
                   />
                   <Button
                   type="submit"
                   variant="contained"
                   color="secondary"
                   >
                     SUBMIT
                   </Button>
               </Grid>
               <Grid item xs={12} sm={12} md={12}>
               </Grid>
               </Grid> 
        </div>
    )
}

