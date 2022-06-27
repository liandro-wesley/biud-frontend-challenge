import * as React from "react";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  Button,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "@presentation/contexts/global-context";

const pages = [
  {
    to: "/my-posts",
    label: "Minhas publicações",
  },
  {
    to: "/my-categories",
    label: "Minhas categorias",
  },
];

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { storage } = useGlobalContext();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      style={{
        backgroundColor: "#FFF",
        display: `${pathname === "/signin" ? "none" : "inherit"}`,
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Button
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(`/`);
                  }}
                  sx={{
                    color: `${pathname === "/" ? "#D81656" : "#374151"}`,
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  Feed
                </Button>
              </MenuItem>
              {pages.map((page) => (
                <MenuItem key={page.label}>
                  <Button
                    key={page.label}
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate(`${page.to}`);
                    }}
                    sx={{
                      color: `${pathname === page.to ? "red" : "#374151"}`,
                      display: "block",
                      textDecoration: "none",
                    }}
                  >
                    {page.label}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 1 }}
          >
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate(`/`);
              }}
              sx={{
                color: `${pathname === "/" ? "#D81656" : "#374151"}`,
                display: "block",
                textDecoration: "none",
              }}
            >
              Feed
            </Button>
            {storage.get("token") !== null &&
              pages.map((page) => (
                <Button
                  key={page.label}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(`${page.to}`);
                  }}
                  sx={{
                    color: `${pathname === page.to ? "#D81656" : "#374151"}`,
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  {page.label}
                </Button>
              ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Configurações do perfil">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={
                    storage.get("userProperties") !== null
                      ? storage.get("userProperties").userProperties.name
                      : ""
                  }
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {storage.get("token") !== null && (
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    storage.remove("token");
                    storage.remove("userProperties");
                    navigate("/signin");
                  }}
                >
                  <Typography textAlign="center">Deslogar</Typography>
                </MenuItem>
              )}

              {storage.get("token") === null && (
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    navigate("/signin");
                  }}
                >
                  <Typography textAlign="center">Logar</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
