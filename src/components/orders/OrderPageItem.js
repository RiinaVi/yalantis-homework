import React from "react";
import {Link} from "react-router-dom";

export default function OrdersHistoryPageItem({piece}) {

    const {product, count} = piece;

    return (
        <tr>
            <td><Link to={`/product/${product.id}`}>{product.name}</Link></td>
            <td>{product.price}</td>
            <td>{count}</td>
            <td>
                $
                {product.price * count}
            </td>
        </tr>
    );
}
