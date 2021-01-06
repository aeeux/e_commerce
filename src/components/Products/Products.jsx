import React from 'react';
import Grid from '@material-ui/core/Grid';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.' },
    { id: 2, name: 'Macbook', description: 'Apple macbook.' },
];

const Products = () => {
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product />
                </Grid>                
            ))}

        </Grid>
    </main>
}

export default Products;