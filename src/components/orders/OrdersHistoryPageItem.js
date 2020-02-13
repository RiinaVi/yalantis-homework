import React from "react";
import {Link} from "react-router-dom";
import {formatDate} from "../customFunctions";

export default function OrdersHistoryPageItem({order, index}) {

    const {id, createdAt, pieces} = order;
    return (
        <tr>
            <td><Link to={`/my-orders/${id}`}>#{index + 1}</Link></td>
            <td>{formatDate(createdAt)}</td>
            <td>
                {pieces.map(piece => {
                    return piece.product.name + ' x' + piece.count + '; '
                })}
            </td>
            <td>
                $
                {
                    pieces.reduce((acc, piece) => {
                        return acc + piece.product.price * piece.count
                    }, 0)
                }
            </td>
        </tr>
    );
}
