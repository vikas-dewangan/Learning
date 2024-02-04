import { Grid, Paper, Typography } from "@mui/material";
import classes from "../../Components/common.module.css";
import CodeSnippet from "../common/codeSnippet";

function ReactTutorial() {
  return (
    <Grid container className={classes.mainContainer}>
      <Grid item textAlign="center" width="inherit">
        <Typography className={classes.header}>React</Typography>
      </Grid>
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>Quick Start</Typography>
        <Grid>
          <Typography className={classes.description}>
            Welcome to the React documentation! This page will give you an
            introduction to the 80% of React concepts that you will use on a
            daily basis.
          </Typography>
          <Paper
            elevation={3}
            style={{ padding: 16, margin: 16 }}
            sx={{ backgroundColor: "#e8e8e8" , width:{
              sm:"100%",
              md:"50%"
            }}}
          >
            <Grid>
              <Typography sx={{ lineHeight: 0, fontSize: "17px" }}>
                You will learn:
              </Typography>
              <ul style={{ fontSize: "15px" }}>
                <li>How to create and nest components</li>
                <li>How to add markup and styles</li>
                <li>How to display data</li>
                <li>How to render conditions and lists</li>
                <li>How to respond to events and update the screen</li>
                <li>How to share data between components</li>
              </ul>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>
          Creating and nesting components
        </Typography>
        <Grid>
          <Typography className={classes.description}>
            React apps are made out of components. A component is a piece of the
            UI (user interface) that has its own logic and appearance. A
            component can be as small as a button, or as large as an entire
            page.
          </Typography>
          <CodeSnippet
            description={`React components are JavaScript functions that return markup:`}
            code={`function MyButton() {
  return (
    <button>I'm a button</button>
  );
}`}
          />
          <CodeSnippet
            description={`Now that you’ve declared MyButton, you can nest it into another component:`}
            code={`export default function MyApp() {
    return (
        <div>
          <h1>Welcome to my app</h1>
            <MyButton />
          </div>
        );
  }`}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ReactTutorial;
