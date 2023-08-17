

import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CardMedia from "@mui/material/CardMedia";
import Box from '@mui/material/Box';
import { UseItemContext } from "../../context/IitemContext/UseItemContext"

function Cart() {
  const { selectedItem } = UseItemContext();
  
  const uniqueItems=selectedItem.filter((value,index)=>{
    return selectedItem.indexOf(value)===index;
  })
  

  const [items] = React.useState(uniqueItems)


  return (
<>

    { 
      items.length !== 0 ?
      (
        items.map((item)=>{
          const { id, title, price, image } = item
         return(
          <Paper key={id} >
          <MenuList sx={{display:"flex", marginTop:3 }}>
            <MenuItem sx={{width:"100%"}}>
              <Box>
              <CardMedia
               component="img"
               alt="green iguana"
               height="70"
               image={image}>
               
              </CardMedia>
              </Box>
              <Typography variant="inherit" sx={{margin:"0 40px"}}>{title}</Typography>
              <Typography variant="inherit">{Math.floor(price)}/-</Typography>
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