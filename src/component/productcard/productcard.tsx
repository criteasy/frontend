import React, { memo } from 'react';
import './productcard.scss';
import { BsStarFill } from 'react-icons/bs';
import { Product } from '../../types/product';
export const ProductCard = memo(({ename, imageurl, reviewcount, rating}: Product) => {
    return <React.Fragment>
        <div className="crit-card-background">
            <div className="crit-card-header">{ename}</div>
            <div className="crit-card-body"><img alt="not found" src={imageurl}/></div>
            <div className="crit-card-footer backdrod-blur"><div className="card-footer-action">{reviewcount} Reviews</div>
            <div className="card-footer-action"><span>{rating}/5 </span> <span><BsStarFill/></span></div></div>
        </div>
    </React.Fragment>
});


