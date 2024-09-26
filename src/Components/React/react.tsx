import { Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "../../Components/common.module.css";
import CodeSnippet from "../common/codeSnippet";

function ReactTutorial() {
  return (
    <>
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
              sx={{
                backgroundColor: "#e8e8e8", width: {
                  sm: "100%",
                  md: "50%"
                }
              }}
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
}`} />


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
            <Typography className={classes.description}>
              <br />
              Notice that {`<MyButton/>`} starts with a capital letter. That’s how you know it’s a React component. React component names must always start with a capital letter, while HTML tags must be lowercase.
            </Typography>
            <CodeSnippet
              description={`Have a look at the result:`}
              code={`function MyButton() {
                return (
                  <button>
                    I'm a button
                  </button>
                );
              }
              
              export default function MyApp() {
                return (
                  <div>
                    <h1>Welcome to my app</h1>
                    <MyButton />
                  </div>
                );
              }`}
            />
            <Paper elevation={1} style={{ padding: 16, margin: 16 }} sx={{ width: { sm: "100%", md: "80%" } }}>
              <Paper elevation={3} style={{ padding: 16, margin: 16 }} sx={{
                width: {
                  sm: "100%",
                  md: "90%"
                }
              }}>
                <Typography variant="h6" style={{ fontWeight: 600 }}>Welcome to my app<br /><button>I'm a button</button></Typography>
              </Paper>
            </Paper>
            <Typography className={classes.description}>
              <br />
              The export default keywords specify the main component in the file. If you’re not familiar with some piece of JavaScript syntax, <Link to="https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export" className={classes.linkdesign} target="_blank">MDN</Link> and <Link to="https://javascript.info/import-export" className={classes.linkdesign} target="_blank">javascript.info</Link> have great references.
            </Typography>
          </Grid>
        </Grid>


        <Grid item className={classes.mainItem}>
          <Typography className={classes.title}>Writing markup with JSX </Typography>
          <Grid>
            <Typography className={classes.description}>The markup syntax you’ve seen above is called JSX. It is optional, but most React projects use JSX for its convenience. All of the tools we recommend for local development support JSX out of the box.

              JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags.
            </Typography>
            <CodeSnippet
              description={`You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:`}
              code={`function AboutPage() {
                return (
                  <>
                    <h1>About</h1>
                    <p>Hello there.<br />How do you do?</p>
                  </>
                );
              }`}
            />
            <Typography className={classes.description}>If you have a lot of HTML to port to JSX, you can use an online converter.</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ReactTutorial;
