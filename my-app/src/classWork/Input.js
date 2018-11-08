import React  from 'react'
import PropTypes  from 'prop-types'

const Input = ({type, min, max, value, name, placeholder, handler}) => {
    return (
        <label>
            <div>{name}</div>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                min={min}
                max={max}
                onChange={handler}
            />
        </label>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    handler: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number
}

export default Input