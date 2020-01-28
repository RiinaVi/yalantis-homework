import React from "react";
import CartPageItem from "./CartPageItem";
import {Table} from 'react-bootstrap';
import './cartPage.scss';

export default function CartPage() {
    let productsList = localStorage.getItem('selectedItems') ?
        JSON.parse(localStorage.getItem('selectedItems')).items : null,
        productsSum = localStorage.getItem('selectedItems') ?
            JSON.parse(localStorage.getItem('selectedItems')).sum : 0;

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
                    productsList &&
                    productsList.map((item) => {
                        return (
                            <CartPageItem item={item}
                                          key={item.id}
                                          productsList={productsList}
                                          productsSum={productsSum}/>
                        );
                    })
                }
                <tr>
                    <td className={'totalLabel'} colSpan={'4'}>Total:</td>
                    <td>
                        {productsSum}$
                    </td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
}