import React from "react";
import {useSelector} from 'react-redux'
import {getCartSum, getProductsInCart} from "../../../store/selectors";
import CartPageItem from "./CartPageItem";
import {Button, Table, Row, Container} from 'react-bootstrap';
import {Link} from "react-router-dom";
import useAddOrder from "./useAddOrder";
import './cartPage.scss';

export default function CartPage() {
    const cartSum = useSelector(getCartSum);
    const productsInCart = useSelector(getProductsInCart);

    const onAddOrder = useAddOrder();

    function addOrderHandler() {
        onAddOrder(productsInCart);
    }

    return (

        <div className={'tableContainer'}>
            {!cartSum ?
                <>
                    <h3>Cart is empty! See </h3>
                    <Link className='ordersLink' to={'/my-orders'}>Orders History</Link>
                </>
                :
                <Container>
                    <Row>
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
                    </Row>
                    <Row>
                        <Button id='confirm-order-button' onClick={() => {
                            addOrderHandler()
                        }}
                                variant='outline-success'>Confirm Order</Button>
                        <Link className='ordersLink' to={'/my-orders'}>Orders History</Link>
                    </Row>
                </Container>
            }
        </div>
    );
}

