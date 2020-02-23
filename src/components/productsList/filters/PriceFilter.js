import React, {useState} from "react";
import {Accordion, Card} from "react-bootstrap";
import {Slider} from "antd";
import 'antd/dist/antd.css';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {minPrice, maxPrice} from "../../../store/constants/filtersParameters";
import debounce from 'lodash.debounce';
import {useSelector} from "react-redux";
import {getFilters} from "../../../store/selectors";
import './filter.scss'

const debouncedFunction = debounce((applyPriceFilterHandler, [minPrice, maxPrice]) => {
    applyPriceFilterHandler([minPrice, maxPrice]);
}, 300);

export default function PriceFilter({applyPriceFilterHandler}) {

    const queryMinPrice = (useSelector(getFilters).minPrice);
    const queryMaxPrice = (useSelector(getFilters).maxPrice);

    const [minFilterPrice, setMinFilterPrice] = useState(parseInt(queryMinPrice) || minPrice);
    const [maxFilterPrice, setMaxFilterPrice] = useState(parseInt(queryMaxPrice) || maxPrice);

    const onPriceRangeChangeHandler = ([minFilterPrice, maxFilterPrice]) => {
        setMinFilterPrice(minFilterPrice);
        setMaxFilterPrice(maxFilterPrice);
        debouncedFunction(applyPriceFilterHandler, [minFilterPrice, maxFilterPrice]);
    };

    const onMinPriceInputChangeHandler = (e) => {
        setMinFilterPrice(parseInt(e.target.value));
        debouncedFunction(applyPriceFilterHandler, [minFilterPrice, maxFilterPrice])
    };

    const onMaxPriceInputChangeHandler = (e) => {
        setMaxFilterPrice(parseInt(e.target.value));
        debouncedFunction(applyPriceFilterHandler, [minFilterPrice, maxFilterPrice])
    };

    const marks = {
        0: '0',
        500: '$500',
        1000: '$1000'
    };

    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                    Price, $
                    <div className='arrow-up'>&#10094;</div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Min</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                value={minFilterPrice}
                                onChange={onMinPriceInputChangeHandler}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Max</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                value={maxFilterPrice}
                                onChange={onMaxPriceInputChangeHandler}
                            />
                        </InputGroup>
                        <Slider marks={marks} onChange={onPriceRangeChangeHandler}
                                value={[minFilterPrice, maxFilterPrice]} range min={minPrice} max={maxPrice}/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}
