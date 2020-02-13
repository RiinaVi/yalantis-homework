import {
    composeValidators,
    combineValidators,
    isRequired,
    hasLengthBetween,
    matchesPattern
} from 'revalidate';

export const productFormValidator = combineValidators({
    name: composeValidators(
        isRequired,
        hasLengthBetween(3, 20)
    )('Name'),
    price: composeValidators(
        isRequired,
        matchesPattern(/^[1-9]+[\\d]*$/)({
            message: 'Price must be a positive number',
        })
    )('Price'),
    origin: isRequired('Origin')
});
