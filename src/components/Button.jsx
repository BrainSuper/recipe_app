import React from 'react';

const Button = ({children, ...props}) => {
    return (
        <button {...props} className={'p-2 rounded-md border-2 border-black hover:bg-lime-500 hover:cursor-pointer'}>{children}</button>
    );
};

export default Button;