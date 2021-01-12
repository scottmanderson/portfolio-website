import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../src/Link";
import Main from "../src/components/Main";

export default function Index() {
  return (
    <Container maxWidth="lg" justify="center">
      <Box my={4}>
        <Main />
      </Box>
    </Container>
  );
}
