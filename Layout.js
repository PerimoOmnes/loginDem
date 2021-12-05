import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from "@material-ui/core";
export default function Layout(props) {

  return (
      <div>
            <CssBaseline />
            <Container>
                {props.children}
            </Container>
      </div>
  );
}