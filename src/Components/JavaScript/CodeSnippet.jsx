import React from "react";
import { Paper, Typography } from "@mui/material";

function CodeSnippet({ description, code }) {
  return (
    <Paper
      elevation={3}
      style={{
        padding: "16px",
        margin: "16px 0",
        backgroundColor: "#f4f4f4",
      }}
    >
      {/* Description Section */}
      {description && (
        <Typography
          style={{
            marginBottom: "8px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          {description}
        </Typography>
      )}

      {/* Code Section */}
      <pre
        style={{
          backgroundColor: "#282c34",
          color: "#f1f1f1",
          padding: "12px",
          borderRadius: "4px",
          fontSize: "14px",
          overflowX: "auto",
        }}
      >
        <code>{code}</code>
      </pre>
    </Paper>
  );
}

export default CodeSnippet;
