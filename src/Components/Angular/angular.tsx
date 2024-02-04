import { Grid, Typography } from '@mui/material';
import classes from '../../Components/common.module.css';

function AngularTutorial() {
  return (
    <Grid container className={classes.mainContainer}>
      <Grid item textAlign="center" width="inherit">
        <Typography className={classes.header}>
          Angular
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.title}>
          Your text goes here
        </Typography>
      </Grid>
    </Grid>
  );
}

export default AngularTutorial;
