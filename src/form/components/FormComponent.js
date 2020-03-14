import {Field, reduxForm, submit} from "redux-form";
import React from "react";
import FieldInput from "./FieldInput";
import SelectOrigins from "./SelectOrigins";
import {productFormValidator} from "../validators";
import {useDispatch} from "react-redux";

const FormComponent = () => {

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(submit('addProduct'));
    };

    return (
        <form onSubmit={submitHandler}>
            <Field
                name='name'
                component={FieldInput}
                type='text'
                placeholder='Type product name'
            />
            <Field
                name='price'
                component={FieldInput}
                type='number'
                placeholder='Type price'
            />
            <Field
                name='origin'
                component={SelectOrigins}
            />
        </form>
    )
};

export default reduxForm({
    form: 'addProduct',
    enableReinitialize: true,
    validate: productFormValidator,
})(FormComponent);


