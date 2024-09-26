import React from 'react'
import { Grid, Paper, Typography } from "@mui/material";
import classes from "../../Components/common.module.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';

// const darkTheme = createTheme({
//     palette:{
//       mode: 'dark',
//     },
//   });

export default function Home() {
    
  return (
    
    <Grid >
        <Grid item textAlign="center" width="inherit">
        <Paper style={{width:"100%", height:"100%"}}>
          <Typography className={classes.header} variant='h4' >Be advance in what you know . . .</Typography>
            </Paper>
        </Grid>
    </Grid>
   
  )
}
