import {InputGroup} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import axios from 'axios';
import './form.scss'

export default function SelectOrigins({input, input: {name}, meta: {touched, error, active}}) {

    const [origins, setOrigins] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/products-origins`)
            .then((res) => {
                setOrigins(res.data.items.reduce((acc, current) => {
                    acc.push(current);
                    return acc
                }, []))
            })
    }, []);

    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>{name}</InputGroup.Text>
                </InputGroup.Prepend>
                <select {...input} name="origin">
                    <option value="" disabled={true}>Select the origin</option>
                    {
                        origins.map((origin, index) => (
                            <option key={index} value={origin.value}>
                                {origin.displayName}
                            </option>
                        ))
                    }
                </select>
            </InputGroup>
            {!active && touched && error && <span className='error-message'>{error}</span>}
        </>
    )
}
