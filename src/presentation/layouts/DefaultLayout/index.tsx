import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Snackbar, Alert } from "@mui/material";
import { useNotification } from "@presentation/contexts/notification-context";
import FragmenStack from "@presentation/components/FragmentStack";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const { notification, setNotification } = useNotification();
  return (
    <>
      <Snackbar
        open={notification.open}
        onClose={() => {
          setNotification({
            message: "",
            open: false,
            type: "info",
          });
        }}
        autoHideDuration={6000}
      >
        <Alert sx={{ width: "100%" }} severity={notification.type}>
          {notification.message}
        </Alert>
      </Snackbar>
      <FragmenStack />
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
