import React from 'react';

const Button = ({ label }) => {
    return (
        <button className='btn'
        style = {{
            color: 'white',
            backgroundColor:'blue',
            borderRadius : '10px' ,
            padding : '10px 10px',
            border: 'none',
            fontSize: '16px'
        }}>
            {label}
        </button>
    )
};

export default Button;