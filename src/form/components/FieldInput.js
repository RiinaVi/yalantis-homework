import React from "react";
import FormControl from "react-bootstrap/FormControl";
import {InputGroup} from "react-bootstrap";

export default function FieldInput({input, input: {name, value, onChange}, meta: {touched, error, active}, type, placeholder}) {
    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>{name}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    isInvalid={!active && touched && error}
                    {...input}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}/>
            </InputGroup>
            {!active && touched && error && <span className='error-message'>{error}</span>}
        </>
    )
}
