
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import { UseItemContext } from "../../context/IitemContext/UseItemContext";

function Cards({ image, title, description, price, item }) {
  const { setItemSelected } = UseItemContext();

  // ----------------handel---cart-----------------
  const handelCartItems = (items) => {
    setItemSelected(items);
  };

  return (



    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image={image}
      sx={{ objectFit: "contain" }}
    />
    <CardContent>
      <Typography> {title} </Typography>

      <Typography>{Math.floor(price)}-/</Typography>

      <Typography variant="body2" color="text.secondary">
        {description.slice(0,50)+"..."}
      </Typography>
    </CardContent>

    <CardActions>
      <Button
        size="small"
        variant="contained"
        onClick={() => {
          handelCartItems(item);
        }}
      >
        Add to Cart
      </Button>
    </CardActions>
  </Card>


   
  );
}

export default Cards;
