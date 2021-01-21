import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Head from "next/head";
import Link from "../src/Link";
import Main from "../src/components/Main";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Scott Anderson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="lg" justify="center">
        <Box my={4}>
          <Main />
        </Box>
      </Container>
    </div>
  );
}
