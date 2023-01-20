import {
  Box,
  Button,
  Container,
  Stack,
  styled,
  IconButton,
  Slide,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { Search as SearchIcon, Menu as MenuIcon } from "@mui/icons-material/";
import useScrollTrigger from "@mui/material/useScrollTrigger";

interface ShowOnScrollDownProps {
  children: React.ReactElement;
}
function ShowOnScrollDown({ children }: ShowOnScrollDownProps) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  return (
    <Slide appear={false} direction="down" in={trigger}>
      {children}
    </Slide>
  );
}

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

export default function StickyNavbar() {
  return (
    <>
      <ShowOnScrollDown>
        <AppBar
          elevation={0}
          position="fixed"
          sx={{ top: 0, bgcolor: "black" }}
        >
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
              <MenuItem color="inherit" sx={{ fontWeight: "400" }}>
                login
              </MenuItem>
              <MenuItem variant="contained" color="primary">
                Sign up
              </MenuItem>
              <MenuItem variant="contained" color="success">
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
      </ShowOnScrollDown>
    </>
  );
}
