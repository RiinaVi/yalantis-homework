import {InputGroup} from "react-bootstrap";
import React from "react";
import {useSelector} from "react-redux";
import {getOrigins} from "../../store/selectors";
import './form.scss'

export default function SelectOrigins({input, input: {name}, meta: {touched, error, active}}) {

    const origins = useSelector(getOrigins);

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
