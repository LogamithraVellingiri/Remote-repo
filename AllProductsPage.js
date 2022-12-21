import React from "react";
import ProductsList from "./ProductsList";
import ProductApi from "./Data/ProductApi";

export default class AllProductsPage extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={products: []};
    }
    componentDidMount()
    {
        this.setState({products:ProductApi.getAllProducts()});
    }
    render()
    {
        return(
            <>
            <h1>Products List</h1>
            <ProductsList products={this.state.products}/>
            </>
        );
    }
}