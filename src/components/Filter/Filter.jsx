import PropTypes from 'prop-types';

import { FormTitle, SeacrhInput } from "./Filter.styled";

export const Filter = ({value, onChange}) => {
    return (
        <FormTitle> Find contacts by name
            <SeacrhInput 
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
            />
        </FormTitle>
    )
};

Filter.propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func,
};