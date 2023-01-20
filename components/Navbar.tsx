import {
  Box,
  Button,
  Container,
  Stack,
  styled,
  IconButton,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { Search as SearchIcon, Menu as MenuIcon } from "@mui/icons-material/";
import { useState } from "react";
import LoginModal from "./LoginModal";

const Menu = styled(Box)({
  borderBottom: "2px solid black",
  display: "flex",
  gap: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: 3,
});

const MenuItem = styled(Button)({
  fontWeight: 700,
  fontSize: "12px",
});

const Logo = styled(Box)({
  fontWeight: 900,
  fontSize: "34px",
  cursor: "pointer",
});
const LogoDesc = styled(Box)({
  fontWeight: 600,
  fontSize: "10px",
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <AppBar color="transparent" elevation={0} position="static">
        <Container>
          <Menu>
            <Stack direction="row" alignItems="center" gap={1} flex={1}>
              <Logo>CodingNotes</Logo>
              <Stack alignItems="start" sx={{ textTransform: "uppercase" }}>
                <LogoDesc>The Blog</LogoDesc>
                <LogoDesc> of codingstrade</LogoDesc>
              </Stack>
            </Stack>
            <MenuItem color="inherit">book</MenuItem>
            <MenuItem color="inherit">videos</MenuItem>
            <MenuItem color="inherit">reviews</MenuItem>
            <MenuItem
              color="inherit"
              sx={{ fontWeight: "400" }}
              onClick={handleOpen}
            >
              login
            </MenuItem>
            <MenuItem variant="outlined" color="primary">
              Sign up
            </MenuItem>
            <MenuItem variant="outlined" color="success">
              create
            </MenuItem>
            <IconButton color="inherit" size="small">
              <SearchIcon fontSize="large" />
            </IconButton>
            <IconButton color="inherit" size="small">
              <MenuIcon fontSize="large" />
            </IconButton>
          </Menu>
        </Container>
      </AppBar>
      <LoginModal open={open} handleClose={handleClose} />
    </>
  );
}
