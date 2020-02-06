import React from "react";
import {useSelector} from 'react-redux'
import {getCartSum, getProductsInCart} from "../../../store/selectors";
import CartPageItem from "./CartPageItem";
import {Table} from 'react-bootstrap';
import './cartPage.scss';

export default function CartPage() {
    const cartSum = useSelector(getCartSum);
    const productsInCart = useSelector(getProductsInCart);

    return (
        <div className={'tableContainer'}>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th colSpan={3}>Product</th>
                    <th>Price</th>
                    <th width={150}>Quantity</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                {
                    Object.values(productsInCart).map(item => {
                        return <CartPageItem item={item} key={item.id}/>
                    })
                }
                </tbody>
                <tfoot>
                <tr>
                    <td className={'totalLabel'} colSpan={5}>Cart subtotal:</td>
                    <td>
                        ${cartSum}
                    </td>
                </tr>
                </tfoot>
            </Table>
        </div>
    );
}

