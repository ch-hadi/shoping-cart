import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { addToCart } from "../Cart/cartSlice";
import { useDispatch } from "react-redux";

export default function PCard({
  title,
  price,
  id,
  thumbnail,
  discountPercentage,
}) {
  const dispatch = useDispatch()
  const addtoCart = (id, discountPercentage,title , thumbnail) => {
  let newPrice = persentageCalculator(discountPercentage)
   dispatch(addToCart({
    id, newPrice,title,thumbnail
   }))
  };
  const persentageCalculator = (discountPercentage) => {
    let newPrice = (price-(discountPercentage/100)*price)
    return parseInt(newPrice)
  };
  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardMedia sx={{ height: 140 }} image={thumbnail} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <s>${price}</s> ${persentageCalculator(discountPercentage)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          onClick={() => addtoCart(id,discountPercentage,title , thumbnail)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
