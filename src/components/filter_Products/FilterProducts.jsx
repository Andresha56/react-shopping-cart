import React, { useContext, useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Cards from "../card/Cards";
import { productsList } from "../../context/Context";
import Grid from "@mui/material/Grid";

export default function FilterProducts() {
  const { API_response } = useContext(productsList);
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    setCategories(API_response)
  },[API_response])

  const handleFilterByCategory = (buttonText) => {
    if (buttonText.toLowerCase() === "all") {
      setCategories(API_response);
    } else if (buttonText.toLowerCase() === "mens") {
      const menClothes = API_response.filter(
        (items) => items.category === "men's clothing"
      );
      setCategories(menClothes);
    } else if (buttonText.toLowerCase() === "women") {
      const womenClothes = API_response.filter(
        (items) => items.category === "women's clothing"
      );
      setCategories(womenClothes);
    }
  };

  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          display: "flex",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <Paper sx={{width:"100%"}}>
          <Container sx={{ padding: "20px" }}>
            <Button
              width="100%"
              variant="outlined"
              sx={{ color: "black", border: "none" }}
              onClick={() => handleFilterByCategory("All")}
            >
              ALL
            </Button>
            <Button
              width="100%"
              variant="outlined"
              sx={{ color: "black", border: "none" }}
              onClick={() => handleFilterByCategory("Mens")}
            >
              Mens
            </Button>
            <Button
              width="100%"
              variant="outlined"
              sx={{ color: "black", border: "none" }}
              onClick={() => handleFilterByCategory("Women")}
            >
              Women
            </Button>
          </Container>
        </Paper>
      </Stack>


      <Container sx={{ marginTop: "30px" }}>
      <Grid
        container
        gap={3}
        alignItems="center"
        justifyContent="center"
      >
 

        {categories.length !== 0 ? (
        categories.map((productItems) => (
          <Cards
          item={productItems}
            key={productItems.id}
            image={productItems.image}
            description={productItems.description}
            price={productItems.price}
            title={productItems.title}
          />
        ))
      ) : (
        ""
      )}

      </Grid>
    </Container>

     
    </>
  );
}
