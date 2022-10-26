import React from 'react'; 

export const Button = ({
    ariaLabel,
    href,
    target,
    text,
}) => {
    return (
        <button className='button'>
            <a href={href} aria-label={ariaLabel} target={target}>{text}</a>
        </button>
    )
}

export default Button;