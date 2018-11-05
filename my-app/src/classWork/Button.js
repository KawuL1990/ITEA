import React from 'react';

const Button = ( { func, value } ) => {
    return (
        <button onClick={func}>
            {value}
        </button>
    )
}

export default Button;