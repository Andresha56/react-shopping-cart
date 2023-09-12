import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import Container from "@mui/material/Container";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { UseSearchContext } from "../../context/searchContext/SearchContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar() {
  // -------------handel---search-----------
const {setSearchInput,searchInput}=UseSearchContext()
  const handelCartSearch = (event) => {
    
    setSearchInput(event.target.value)
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Link to="./">
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                color: "white",
                textDecoration: "none",
              }}
            >
              FoodCart
            </Typography>
          </Link>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={handelCartSearch}
              value={searchInput}
            />
          </Search>

          <Link to="/cart">
            <Button
              variant="outlined"
              sx={{
                background: "white",
                "&:hover": { backgroundColor: "white" },
              }}
              startIcon={<ShoppingCartIcon />}
            >
              Cart
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
