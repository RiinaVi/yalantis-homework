import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Container, Spinner, Table} from "react-bootstrap";
import OrdersHistoryPageItem from "./OrdersHistoryPageItem";
import './orders.scss'

export default function OrdersHistoryPage() {

    const [loadingOrders, setLoadingOrders] = useState(false);
    const [orders, setOrders] = useState([]);

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
                    setOrders(res.data.items);
                    setLoadingOrders(false);
                }
            )
    }, []);

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
