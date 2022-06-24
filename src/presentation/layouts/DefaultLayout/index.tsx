import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          mt: 5,
        }}
        maxWidth="md"
      >
        {children}
      </Container>
    </>
  );
};

export default DefaultLayout;
