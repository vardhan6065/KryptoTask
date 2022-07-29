import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import classes from './CartItem.module.css';


//Template modified From material UI to display each item in the cart  
export default function CartItem(props) {


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
          
        </Box>
      </Box>
    </Card>
    </div>
  );
}
