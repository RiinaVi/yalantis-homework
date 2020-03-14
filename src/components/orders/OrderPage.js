import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {Col, Container, Spinner, Table} from "react-bootstrap";
import OrderPageItem from "./OrderPageItem";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentOrder, getLoadingStatus} from "../../store/selectors";
import {setCurrentOrder} from "../../store/actions/ordersActions";
import './orders.scss'

export default function OrderPage() {

    let {orderId} = useParams();
    const currentOrder = useSelector(getCurrentOrder);
    const dispatch = useDispatch();
    const loadingStatus = useSelector(getLoadingStatus);

    useEffect(() => {
        dispatch(setCurrentOrder(orderId));
    }, [orderId, dispatch]);

    return (
        <div>
            {loadingStatus &&
            <Spinner id='orders-spin' animation="border" role="status" variant="secondary"/>
            }
            {!loadingStatus && Object.keys(currentOrder).length &&
            <Container>
                <Col>
                    <Table striped bordered hover size="sm">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            Object.values(currentOrder.pieces).map(item => {
                                return <OrderPageItem piece={item} key={item.id}/>
                            })
                        }
                        </tbody>
                        <tfoot>
                        <tr>
                            <td className={'totalLabel'} colSpan={3}>Order total:</td>
                            <td>
                                $
                                {
                                    currentOrder.pieces.reduce((acc, piece) => {
                                        return acc + piece.product.price * piece.count
                                    }, 0)
                                }
                            </td>
                        </tr>
                        </tfoot>
                    </Table>
                </Col>
            </Container>
            }
        </div>
    )
}
