import React, {useContext} from "react";
import CartPageItem from "./CartPageItem";
import {Table} from 'react-bootstrap';
import './cartPage.scss';
import {CartContext} from "../../../providers/CartProvider";

import {connect} from "react-redux";

function CartPage(props) {
    // const {cartSum, productsInCart} = useContext(CartContext);

    let cartSum = Object.values(props.productsInCart).reduce((acc, item)=>{
        return acc+=item.price;
    },0);

    return (
        <div className={'tableContainer'}>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                {
                    Object.values(props.productsInCart).map(item => {
                        return <CartPageItem item={item} key={item.id}/>
                    })
                }
                <tr>
                    <td className={'totalLabel'} colSpan={'4'}>Total:</td>
                    <td>
                        {
                            cartSum
                        }$
                    </td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        productsInCart: state.products
    }
};

export default connect(mapStateToProps)(CartPage);
