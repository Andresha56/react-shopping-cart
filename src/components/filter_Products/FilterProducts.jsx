import * as React from "react";

import Paper from "@mui/material/Paper";

import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";


export default function FilterProducts() {
  return (

      <Stack direction="row" spacing={2}  sx={{display:"inline"}}>
        <Paper>
        <Container>
          <MenuList>
            <MenuItem>All</MenuItem>
            <MenuItem>Men</MenuItem>
            <MenuItem>Women</MenuItem>
          </MenuList>
        </Container>
        </Paper>
      </Stack>

  );
}
