import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://cdn.dribbble.com/users/4845608/screenshots/12471444/media/eaa1865f53a253e9c1f40a63fba94136.jpg?compress=1&resize=1280x720' },
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://cdn.dribbble.com/users/4845608/screenshots/12471444/media/eaa1865f53a253e9c1f40a63fba94136.jpg?compress=1&resize=1280x720' },
];

const Products = () => {
    return (

    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>                
            ))}

        </Grid>
    </main>

    )
}

export default Products;