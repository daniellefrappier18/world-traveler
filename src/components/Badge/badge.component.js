import React from 'react'; 

export const Badge = ({type}) => {
    return (
        <div className={type === 'international' ? 'badge badge--international' : type === 'domestic' ? 'badge badge--domestic' : 'badge'}>
            <div className='badge__chip'></div>
            <p className="badge__content">{type}</p>
        </div>
    )
}