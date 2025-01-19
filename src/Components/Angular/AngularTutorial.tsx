import React, { useState } from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
import classes from "../../Components/common/common.module.css";
import CodeSnippet from "./CodeSnippet";

function AngularTutorial() {
  const [showCode, setShowCode] = useState(false);

  return (
    <Grid container className={classes.mainContainer}>
      {/* Header */}
      <Grid item textAlign="center" width="inherit">
        <Typography className={classes.header}>Angular Complete Tutorial</Typography>
      </Grid>

      {/* Introduction */}
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>What is Angular?</Typography>
        <Typography className={classes.description}>
          Angular is a platform and framework for building single-page client
          applications using HTML and TypeScript. It is maintained by Google
          and provides robust tools for building scalable, enterprise-level
          applications.
        </Typography>
      </Grid>

      {/* Modules */}
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>Modules</Typography>
        <Typography className={classes.description}>
          Angular applications are modular, with every application having at
          least one module, the root module (`AppModule`). Modules group
          components, directives, pipes, and services.
        </Typography>
        <CodeSnippet
          description="Basic structure of an Angular module:"
          code={`import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}`}
        />
      </Grid>

      {/* Components */}
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>Components</Typography>
        <Typography className={classes.description}>
          Components are the building blocks of an Angular application. They
          control a portion of the UI and use templates to define how the
          content is displayed.
        </Typography>
        <CodeSnippet
          description="Basic structure of an Angular component:"
          code={`import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello, Angular!';
}`}
        />
      </Grid>

      {/* Templates */}
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>Templates</Typography>
        <Typography className={classes.description}>
          Templates define the HTML structure and content of a component. They
          use Angular's declarative syntax for binding data, handling events,
          and applying directives.
        </Typography>
        <CodeSnippet
          description="Example of a component template:"
          code={`<h1>{{ title }}</h1>
<button (click)="onClick()">Click Me</button>`}
        />
      </Grid>

      {/* Directives */}
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>Directives</Typography>
        <Typography className={classes.description}>
          Directives are instructions in the DOM. Angular provides three types
          of directives: structural (e.g., `*ngIf`, `*ngFor`), attribute (e.g.,
          `ngClass`, `ngStyle`), and custom directives.
        </Typography>
        <CodeSnippet
          description="Example of using *ngIf and *ngFor directives:"
          code={`<div *ngIf="isLoggedIn">
  <p>Welcome back!</p>
</div>

<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>`}
        />
      </Grid>

      {/* Services */}
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>Services</Typography>
        <Typography className={classes.description}>
          Services are used to share data and logic across components. They are
          typically injected into components using Angular's dependency
          injection system.
        </Typography>
        <CodeSnippet
          description="Creating and using a service:"
          code={`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getData() {
    return ['Item 1', 'Item 2', 'Item 3'];
  }
}

// Injecting the service into a component
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: '<ul><li *ngFor="let item of items">{{ item }}</li></ul>',
})
export class AppComponent {
  items: string[];

  constructor(private dataService: DataService) {
    this.items = this.dataService.getData();
  }
}`}
        />
      </Grid>

      {/* Routing */}
      <Grid item className={classes.mainItem}>
        <Typography className={classes.title}>Routing</Typography>
        <Typography className={classes.description}>
          Angular's `RouterModule` enables navigation between different views
          or pages in a single-page application.
        </Typography>
        <CodeSnippet
          description="Example of setting up routing:"
          code={`import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}`}
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
              <strong>Angular Overview:</strong>
            </Typography>
            <CodeSnippet
              description="Here's a consolidated Angular example:"
              code={`import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: '<h1>{{ title }}</h1>',
})
export class AppComponent {
  title = 'Welcome to Angular!';
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}`}
            />
          </Paper>
        )}
      </Grid>
    </Grid>
  );
}

export default AngularTutorial;
