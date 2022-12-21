import React from "react";
import Product from'./Product';
export default class ProductsList extends React.Component{
    render()
    {
        var productNodes=this.props.products.map(product=>(
            <Product ID={product.ID} ProductName={product.ProductName} Quantity={product.Quantity} Price={product.Price}>
            </Product>
        ));
    
    return(
        <>
            <table>
              <thead>
                <tr>
                   <th>ID</th>
                   <th>Product Name</th>
                   <th>Quantity</th>
                   <th>Price</th>
                </tr>
            </thead>
         <tbody>
            {productNodes}
         </tbody>
          </table>
        </>
    );
    }
}