import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classes from './ProductCard.module.css';
import { useDispatch } from "react-redux";
import { uiActions } from '../store/ui-slice';

//If you navigate to the Products section you will find many products each of which is made up
// of these components
export default function ProductCard(props) {
    const dispatch=useDispatch();

  const AddItemHandler = () =>{
    dispatch(uiActions.addItem({
        
            id: props.id,
            price : props.price,
            image:props.image,
    }));
    console.log("yes executed");
  } 

  return (
    <Card sx={{ maxWidth: 340 ,maxHeight: 1000 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom className={classes.info}>
          <p>T-shirt For men</p>
          <p>{props.price}</p>
          <p className={classes.stars}>{props.stars}</p>
        </Typography>
        
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="small">❤</Button>
        <Button size="small" onClick={AddItemHandler}>Add to Cart</Button>
      </CardActions>
    </Card>
  );
}
