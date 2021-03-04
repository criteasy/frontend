import React, {memo} from 'react';
import './compactproductcard.scss';
import { BsStarFill } from 'react-icons/bs';
import { Product } from '../../types/product';
export const CompactProductCard = memo(({ename, imageurl, reviewcount, rating}: Product) => {
    return <React.Fragment>
        <div className="compact-crit-card-background">
            <div className="compact-crit-header">{ename}</div>
            <div className="compact-crit-body"><img alt="not found" src={imageurl || "../asset/imgcomingsoon.png"}/></div>
            <div className="compact-crit-footer backdrod-blur"><div className="compact-footer-action">{reviewcount} Reviews</div>
            <div className="compact-footer-action"><span>{rating}/5 </span> <span><BsStarFill/></span></div></div>
        </div>
    </React.Fragment>
})


