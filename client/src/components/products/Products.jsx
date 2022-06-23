import React, { useEffect } from 'react'
import ProductCard from '../productCard/ProductCard';
import { useSelector, connect } from 'react-redux';
import { getAllProducts } from '../../redux/actions/productsA';

function Products({ getAllProducts }) {
    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        getAllProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div>
            <h1>Products</h1>
            {products.map(e => {
                return (
                    <ProductCard
                        id={e.id}
                        key={e.id}
                        name={e.name}
                        price={e.price}
                        category={e.category}
                        image={e.image}
                        description={e.description}
                    />
                )
            })}
        </div>
    )
}


export default connect(null, { getAllProducts })(Products)