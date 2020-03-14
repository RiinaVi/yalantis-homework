import React, {useEffect} from "react";
import {Container, Spinner, Table} from "react-bootstrap";
import OrdersHistoryPageItem from "./OrdersHistoryPageItem";
import {useDispatch, useSelector} from "react-redux";
import {getAllOrders, getLoadingStatus} from "../../store/selectors";
import {setAllOrders} from "../../store/actions/ordersActions";
import './orders.scss'

export default function OrdersHistoryPage() {

    const dispatch = useDispatch();
    const orders = useSelector(getAllOrders);
    const loadingOrders = useSelector(getLoadingStatus);

    useEffect(() => {
        dispatch(setAllOrders(null));
    }, [dispatch]);

    return (
        <div>
            <h3>ORDERS HISTORY</h3>
            <Container>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Products</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {!loadingOrders && Object.values(orders).map((item, index) => {
                        return <OrdersHistoryPageItem key={index} index={index} order={item}/>
                    })}
                    </tbody>
                </Table>
            </Container>
            {loadingOrders &&
            <Spinner id='orders-spin' animation="border" role="status" variant="secondary"/>
            }
        </div>
    )
}
