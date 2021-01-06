import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconBotton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'
import classes from '*.module.css';

const Product = () => {
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={product.name} />
            
        </Card>
    )
}

export default Product
