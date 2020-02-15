import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Container, Spinner, Table} from "react-bootstrap";
import OrdersHistoryPageItem from "./OrdersHistoryPageItem";
import './orders.scss'
import {useDispatch, useSelector} from "react-redux";
import {getAllOrders} from "../../store/selectors";
import {setAllOrders} from "../../store/actions/ordersActions";

export default function OrdersHistoryPage() {

    const [loadingOrders, setLoadingOrders] = useState(false);
    const dispatch = useDispatch();
    const orders = useSelector(getAllOrders);

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.REACT_APP_API_KEY
        }
    };

    useEffect(() => {
        setLoadingOrders(true);
        axios.get(`${process.env.REACT_APP_API_URL}/orders`,
            config)
            .then(res => {
                    dispatch(setAllOrders(res.data.items));
                    setLoadingOrders(false);
                }
            )
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
