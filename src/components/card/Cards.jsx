import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useContext} from "react";
import { productsList } from "../../context/Context";
import { UseItemContext } from "../../context/IitemContext/UseItemContext";

function Cards() {
  const { API_response } = useContext(productsList);

  const { setItemSelected } = UseItemContext();
  
  // ----------------handel---cart-----------------
  const handelCartItems = (items) => {
    setItemSelected(items);
  };

  return (
    <Container sx={{ marginTop: "30px" }}>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        alignItems="center"
        justifyContent="center"
      >
        {API_response.langth !== 0 ? (
          API_response.map((items) => {
            const { id, title, price, description, image } = items;
            return (
              <Grid item key={id}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={image}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      component="div"
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <Typography> {title} </Typography>

                      <Typography>{Math.floor(price)}-/</Typography>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {description.slice(0, 100) + "..."}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => {
                        handelCartItems(items);
                      }}
                    >
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })
        ) : (
          <h1>Loading</h1>
        )}
      </Grid>
    </Container>
  );
}

export default Cards;
