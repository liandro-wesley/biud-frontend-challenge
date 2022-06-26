import * as React from "react";
import CustomMuiLink from "@presentation/components/CustomMuiLink";
import {
  Box,
  Fade,
  Typography,
  Button,
  TextField,
  CssBaseline,
  Container,
  CircularProgress,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { isEmail } from "@presentation/helpers/validators";
import { useAuthentication } from "../../context";

export default function Form() {
  const { authenticate, loading } = useAuthentication();
  const [email, setEmail] = React.useState({
    value: "",
    error: false,
    valid: false,
  });

  const [password, setPassword] = React.useState({
    value: "",
    error: false,
    valid: false,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.valid && password.valid) {
      authenticate({
        email: email.value,
        password: password.value,
      });
    }
  };

  return (
    <Fade in>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 30,
          }}
        >
          {!loading && (
            <CustomMuiLink
              style={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "#000",
                textDecoration: "none",
                marginBottom: "2rem",
              }}
              to="/"
            >
              <ArrowBack />
              Voltar para o feed
            </CustomMuiLink>
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {loading && (
              <CircularProgress
                size={50}
                sx={{
                  mt: 20,
                }}
              />
            )}
            {!loading && (
              <>
                <Typography component="h1" variant="h5">
                  Entrar
                </Typography>

                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    disabled={loading}
                    id="email"
                    label="E-mail"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    error={!email.error && email.value.length >= 3}
                    helperText="Insira um email válido"
                    value={email.value}
                    onChange={({ target }) => {
                      setEmail({
                        value: target.value,
                        error: isEmail(target.value),
                        valid: isEmail(target.value),
                      });
                    }}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    disabled={loading}
                    name="password"
                    label="Senha"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password.value}
                    error={!password.error && password.value.length >= 3}
                    helperText="Insira uma senha"
                    onChange={({ target }) => {
                      setPassword({
                        value: target.value,
                        error: target.value.length >= 6,
                        valid: target.value.length >= 6,
                      });
                    }}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    color="primary"
                    variant="contained"
                    disabled={loading}
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Entar
                  </Button>
                  {!loading && (
                    <CustomMuiLink
                      style={{
                        display: "block",
                        marginTop: 20,
                        textAlign: "center",
                        color: "#d81656",
                      }}
                      to="/signup"
                    >
                      Não possui conta? Cadastre-se!
                    </CustomMuiLink>
                  )}
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Fade>
  );
}
