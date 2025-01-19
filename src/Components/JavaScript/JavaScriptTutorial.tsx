import React, { useState } from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
import classes from "../../Components/common/common.module.css";
import CodeSnippet from "./CodeSnippet";

function JavaScriptTutorial() {
  const [showCode, setShowCode] = useState(false);

  return (
    <Grid container className={classes.mainContainer}>
      {/* Header */}
      <Grid item textAlign="center" width="inherit">
        <Typography className={classes.header}>JavaScript Complete Tutorial</Typography>
      </Grid>

      {/* Introduction */}
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>What is JavaScript?</Typography>
        <Typography className={classes.description}>
          JavaScript is a versatile programming language that allows you to
          create dynamically updating content, control multimedia, animate
          images, and much more. It is an essential technology of web
          development, alongside HTML and CSS.
        </Typography>
      </Grid>

      {/* Variables */}
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>Variables</Typography>
        <Typography className={classes.description}>
          Variables are containers for storing data values. In JavaScript, you
          can declare variables using `var`, `let`, or `const`.
        </Typography>
        <CodeSnippet
          description="Examples of variable declarations:"
          code={`var x = 5; // Function-scoped
let y = 10; // Block-scoped
const z = 15; // Block-scoped and cannot be reassigned`}
        />
      </Grid>

      {/* Functions */}
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>Functions</Typography>
        <Typography className={classes.description}>
          Functions are blocks of code designed to perform a specific task.
          They are executed when called.
        </Typography>
        <CodeSnippet
          description="Example of a function declaration and usage:"
          code={`function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Alice")); // Output: Hello, Alice!`}
        />
      </Grid>

      {/* Arrays */}
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>Arrays</Typography>
        <Typography className={classes.description}>
          Arrays are used to store multiple values in a single variable. You can
          use array methods to manipulate the data.
        </Typography>
        <CodeSnippet
          description="Example of an array and its methods:"
          code={`const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]); // Output: Banana

fruits.push("Date");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]`}
        />
      </Grid>

      {/* Objects */}
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>Objects</Typography>
        <Typography className={classes.description}>
          Objects are collections of key-value pairs. They are used to store
          structured data.
        </Typography>
        <CodeSnippet
          description="Example of an object:"
          code={`const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet: function () {
    return \`Hello, \${this.firstName} \${this.lastName}!\`;
  },
};

console.log(person.greet()); // Output: Hello, John Doe!`}
        />
      </Grid>

      {/* Loops */}
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>Loops</Typography>
        <Typography className={classes.description}>
          Loops are used to execute a block of code repeatedly. Common loops in
          JavaScript include `for`, `while`, and `forEach`.
        </Typography>
        <CodeSnippet
          description="Example of a for loop:"
          code={`for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0, 1, 2, 3, 4`}
        />
      </Grid>

      {/* Conditional Statements */}
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>Conditional Statements</Typography>
        <Typography className={classes.description}>
          Conditional statements are used to perform different actions based on
          different conditions.
        </Typography>
        <CodeSnippet
          description="Example of if-else statements:"
          code={`const age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}` }
        />
      </Grid>

      {/* Promises and Async/Await */}
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>Promises and Async/Await</Typography>
        <Typography className={classes.description}>
          Promises and async/await are used to handle asynchronous operations
          like fetching data from an API.
        </Typography>
        <CodeSnippet
          description="Example of using async/await:"
          code={`async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();`}
        />
      </Grid>

      {/* Toggle All Code */}
      <Grid item className={classes.mainItem}>
        <Button
          variant="contained"
          onClick={() => setShowCode(!showCode)}
          style={{ margin: "16px 0" }}
        >
          {showCode ? "Hide All Code" : "Show All Code"}
        </Button>
        {showCode && (
          <Paper elevation={3} style={{ padding: 16, marginTop: 16 }}>
            <Typography variant="body1" style={{ marginBottom: 8 }}>
              <strong>JavaScript Overview:</strong>
            </Typography>
            <CodeSnippet
              description="Here’s a complete JavaScript example combining variables, loops, and functions:"
              code={`const numbers = [1, 2, 3, 4, 5];

function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(\`Sum of array: \${sumArray(numbers)}\`); // Output: Sum of array: 15`}
            />
          </Paper>
        )}
      </Grid>
    </Grid>
  );
}

export default JavaScriptTutorial;
