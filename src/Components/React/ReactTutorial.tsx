import React, { useState } from "react";
import { Grid, Paper, Typography, Button, TextField } from "@mui/material";
import classes from "../../Components/common/common.module.css";
import CodeSnippet from "../common/CodeSnippet";

function ReactTutorial() {
  const [clicks, setClicks] = useState(0);
  const [tasks, setTasks] = useState<any>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  return (
    <Grid container className={classes.mainContainer}>
      {/* Header */}
      <Grid item textAlign="center" width="inherit">
        <Typography className={classes.header}>React Complete Tutorial</Typography>
      </Grid>

      {/* Introduction */}
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>What is React?</Typography>
        <Typography className={classes.description}>
          React is a JavaScript library for building user interfaces. It lets
          you compose complex UIs from small, isolated pieces of code called
          components.
        </Typography>
      </Grid>

      {/* Components Section */}
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>Components</Typography>
        <Typography className={classes.description}>
          React apps are made out of components. Components can be defined as
          JavaScript functions that return JSX (JavaScript XML).
        </Typography>
        <CodeSnippet
          description="Example of a simple React component:"
          code={`function Greeting() {
  return <h1>Hello, React!</h1>;
}`}
        />
      </Grid>

      {/* Props Section */}
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>Props</Typography>
        <Typography className={classes.description}>
          Props are arguments passed into React components. They let you pass
          data from a parent to a child component.
        </Typography>
        <CodeSnippet
          description="Example of using props:"
          code={`function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Welcome name="Alice" />;
}`}
        />
      </Grid>

      {/* State Section */}
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>State</Typography>
        <Typography className={classes.description}>
          State is a built-in React object used to manage data within a
          component. When state changes, React re-renders the component.
        </Typography>
        <CodeSnippet
          description="Example of using state:"
          code={`import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}
        />
        <Paper elevation={3} style={{ padding: 16, margin: 16, textAlign: "center" }}>
          <Button variant="contained" onClick={() => setClicks(clicks + 1)}>
            Click Me
          </Button>
          <Typography style={{ marginTop: 8 }}>
            Button clicked {clicks} times!
          </Typography>
        </Paper>
      </Grid>

      {/* Conditional Rendering */}
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>Conditional Rendering</Typography>
        <Typography className={classes.description}>
          React lets you render components or elements based on conditions.
        </Typography>
        <CodeSnippet
          description="Example of conditional rendering:"
          code={`function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>;
}`}
        />
      </Grid>

      {/* Lists and Keys */}
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>Rendering Lists</Typography>
        <Typography className={classes.description}>
          Use the `map()` method to render lists in React. Remember to use
          unique keys for better performance.
        </Typography>
        <CodeSnippet
          description="Example of rendering a list:"
          code={`function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
}`}
        />
        <Paper elevation={3} style={{ padding: 16, margin: 16, textAlign: "center" }}>
          <TextField
            label="New Task"
            variant="outlined"
            size="small"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            style={{ marginRight: 8 }}
          />
          <Button variant="contained" onClick={addTask}>
            Add Task
          </Button>
          <Typography variant="h6" style={{ margin: "16px 0" }}>
            Task List:
          </Typography>
          <ul>
            {tasks.map((task:any, index:any) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </Paper>
      </Grid>

      {/* Lifting State Up */}
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>Lifting State Up</Typography>
        <Typography className={classes.description}>
          To share data between components, you can lift the state up to their
          closest common parent.
        </Typography>
        <CodeSnippet
          description="Example of lifting state up:"
          code={`function TemperatureInput({ temperature, onTemperatureChange }) {
  return (
    <input
      type="text"
      value={temperature}
      onChange={(e) => onTemperatureChange(e.target.value)}
    />
  );
}

function Calculator() {
  const [temperature, setTemperature] = useState("");

  return (
    <div>
      <TemperatureInput
        temperature={temperature}
        onTemperatureChange={setTemperature}
      />
      <p>The temperature is {temperature}°C.</p>
    </div>
  );
}`}
        />
      </Grid>
    </Grid>
  );
}

export default ReactTutorial;
