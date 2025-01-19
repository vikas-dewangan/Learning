import React from "react";
import { Paper, Typography } from "@mui/material";

const CodeSnippet = ({ description, code }:any) => {
  return (
    <Paper elevation={2} style={{ padding: 16, margin: 16, backgroundColor: "#f5f5f5" }}>
      <Typography variant="body1" style={{ marginBottom: 8 }}>
        {description}
      </Typography>
      <pre style={{ backgroundColor: "#333", color: "#fff", padding: 12, borderRadius: 4 }}>
        <code>{code}</code>
      </pre>
    </Paper>
  );
};

export default CodeSnippet;
