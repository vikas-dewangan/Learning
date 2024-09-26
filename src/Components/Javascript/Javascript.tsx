import { Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "../../Components/common.module.css";
import CodeSnippet from "../common/codeSnippet";

const JsTutorial = () => {
    return (
        <>
            <Grid container className={classes.mainContainer}>
                <Grid item textAlign="center" width="inherit">
                    <Typography className={classes.header}>JavaScript</Typography>
                </Grid>
                <Grid item className={classes.mainItem}>
                    <Typography className={classes.title}>Introduction</Typography>
                    <Grid>
                        <Typography className={classes.description}>
                            JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive (e.g., having complex animations, clickable buttons, popup menus, etc.)
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item className={classes.mainItem}>
                    <Typography className={classes.title}>What is JavaScript</Typography>
                    <Grid>
                        <Typography className={classes.description}>
                            vaScript was initially created to “make web pages alive”.
                            The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.
                            Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.
                            In this aspect, JavaScript is very different from another language called Java.
                        </Typography>
                        <Typography className={classes.description}>
                            Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine.

                            The browser has an embedded engine sometimes called a “JavaScript virtual machine”.
                            <br />
                            Different engines have different “codenames”. For example:
                            <ul>
                                <li> <Link to="https://en.wikipedia.org/wiki/V8_(JavaScript_engine)">V8</Link> – in Chrome, Opera and Edge.</li>
                                <li><Link to="https://en.wikipedia.org/wiki/SpiderMonkey">SpiderMonkey</Link>– in Firefox.</li>
                                <li>…There are other codenames like “Chakra” for IE, “JavaScriptCore”, “Nitro” and “SquirrelFish” for Safari, etc.</li>
                            </ul>
                        </Typography>
                    </Grid>

                    <Grid item className={classes.mainItem}>
                        <Typography className={classes.title}>Syntax</Typography>
                        <Grid>

                            <Paper elevation={3} sx={{
                                width: {
                                    sm: "100%",
                                    md: "70%"
                                },
                                height: "50%",
                                padding:"2%"
                            }}>
                                <Typography className={classes.description}>
                                    // Variable declaration <br />
                                    let c, d, e;<br />
                                    // Assign value to the variable<br />
                                    c = 5;<br />
                                    // Computer value of variables<br />
                                    d = c;<br />
                                    e = c/d;
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default JsTutorial;
