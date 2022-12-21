import React from "react";
export default class Product extends React.Component{
    render()
    {
        return(
            <tr>
                <td>{this.props.ID}</td>
                <td>{this.props.ProductName}</td>
                <td>{this.props.Quantity}</td>
                <td>{this.props.Price}</td>
            </tr>
        );
    }
}