

import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CardMedia from "@mui/material/CardMedia";



import { UseItemContext } from "../../context/IitemContext/UseItemContext"

function Cart() {
  const { selectedItem } = UseItemContext();
  const [ items,setItems] = React.useState(selectedItem)


  return (
<>

    { 
      selectedItem.length !== 0 ?
      (
        items.map((item)=>{
         return(
          <Paper key={item.id} >
          <MenuList sx={{display:"flex", marginTop:3}}>
            <MenuItem>
              <CardMedia
               component="img"
               alt="green iguana"
               height="70"
               image={item.image}>
               
              </CardMedia>
              <Typography variant="inherit">{item.title}</Typography>
              <Typography variant="inherit">{item.price}</Typography>
              </MenuItem>
          </MenuList>
        </Paper>
         )
        })
      )
      :
      (
        <h1>No items found</h1>
      )


    }
 
  </>
  );
}

export default Cart;