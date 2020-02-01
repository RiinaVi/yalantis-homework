import React, {useContext} from "react";
import CartPageItem from "./CartPageItem";
import {Table} from 'react-bootstrap';
import './cartPage.scss';
import {CartContext} from "../../../providers/CartProvider";

export default function CartPage() {
    const {cartSum, productsInCart} = useContext(CartContext);

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
                    Object.values(productsInCart).map(item => {
                        return <CartPageItem item={item} key={item.id}/>
                    })
                }
                <tr>
                    <td className={'totalLabel'} colSpan={'4'}>Total:</td>
                    <td>
                        {cartSum}$
                    </td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
}
