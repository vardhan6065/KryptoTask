import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import classes from './CartItem.module.css';
import { useDispatch } from "react-redux";
import { uiActions } from '../store/ui-slice';

//Template modified From material UI to display each item in the cart  
export default function CartItem(props) {
  const dispatch=useDispatch();

  const AddItemHandler = () =>{
    dispatch(uiActions.addItem({
            id: props.id,
            price : props.price,
            image:props.image,
    }));
    console.log("yes executed");
  }
  const removeItemHandler = () =>{
    dispatch(uiActions.removeItem({
            id: props.id,
            price : props.price,
    }));
    console.log("yes executed");
  }

  return (
    <div classname={classes.item}>
        <Card sx={{ display: 'flex' }} >
      <CardMedia classname={classes.cards}
        component="img"
        sx={{ width: 100 }}
        image={props.image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            t-shirt for men: MEN
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {props.price}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {props.count}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <span onClick={AddItemHandler}>+</span>
            <span onClick={removeItemHandler}>-</span>
        </Box>
      </Box>
    </Card>
    </div>
  );
}
