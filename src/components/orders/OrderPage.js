import React, {useEffect, useState} from "react";
import './orders.scss'
import {useParams} from "react-router-dom";
import axios from "axios";
import {Col, Container, Spinner, Table} from "react-bootstrap";
import OrderPageItem from "./OrderPageItem";

export default function OrderPage() {

    let {orderId} = useParams();
    const [data, setData] = useState(null);
    const [loadingStatus, setLoadingStatus] = useState(true);

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.REACT_APP_API_KEY
        }
    };

    useEffect(() => {
        setLoadingStatus(true);
        axios.get(`${process.env.REACT_APP_API_URL}/orders/${orderId}`,
            config)
            .then(res => {
                    setData(res.data);
                    setLoadingStatus(false);
                }
            )
    }, [orderId]);

    return (
        <div>
            {!loadingStatus &&
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
                            Object.values(data.pieces).map(item => {
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
                                    data.pieces.reduce((acc, piece) => {
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
            {loadingStatus &&
            <Spinner id='orders-spin' animation="border" role="status" variant="secondary"/>
            }
        </div>
    )
}
