import React from 'react'; 
import { Badge } from '../Badge/badge.component';

export const Card = ({
    children,
    date,
    description,
    image,
    size,
    status,
    title, 
    type,
}) => {
    return (
        <div className={size === 'sm' ? 'card card--s' : 'card'}>
            <div className="card__image">
                <Badge type={type} />
                <img src={image} alt={title} />
            </div>
            <div className='card__content'>
                <p className='card__status'>{status}</p>
                <h2 className={size === 'sm' ? 'card__title card__title--s' : 'card__title'}>{title}</h2>
                <p className={size === 'sm' ? 'card__date card__date--s' : 'card__date'}>{date}</p>
                <p className={size === 'sm' ? 'card__description card__description--s' : 'card__description'}>{description}</p>
                {children && <div className='card__child'>{children}</div>}
            </div>
        </div>
    )
}

export default Card;