import { Grid, Paper, Typography } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeTypes {
  code: string;
  description?: string;
  lang?: string;
  snapshot?:string;
  imgurl?:string;
}

function CodeSnippet(props: Readonly<CodeTypes>) {
  const { code, description, lang, snapshot, imgurl} = props;

  return (
    <Grid item>
      <Paper elevation={3} style={{ padding: 16, margin: 16}} sx={{width:{
              sm:"100%",
              md:"50%"
            }}}>
        {description && <Typography variant="body1" fontWeight={600}>{description}</Typography>}
        <SyntaxHighlighter language={lang ?? "javascript"} style={tomorrow}>
          {code}
        </SyntaxHighlighter>
        {snapshot && <img src={imgurl} alt="reference snapshot"/>}
      </Paper>
    </Grid>
  );
}

export default CodeSnippet;
