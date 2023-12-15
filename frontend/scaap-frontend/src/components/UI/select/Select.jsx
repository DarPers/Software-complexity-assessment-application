import React from "react";

const Select = ({options, defaultValue, value, setValue}) => {

    return (
        <select
        value={value}
        onChange={event => setValue(event.target.value)}>
            <option disabled value={defaultValue}>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.value}
                </option>)
            }
        </select>
    )
}

export default Select;