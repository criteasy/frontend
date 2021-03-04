import React from 'react';
import './storeinfo.scss';
import { BsStarFill } from 'react-icons/bs';

export const StoreInfo = ({category, items, totalreviews}:{category: string, items: number, totalreviews: number}) => {

    return <React.Fragment>
        <div className="crit-product-footer">
            <div className="crit-footer-info-container">{category} Store</div> 

            <div className="crit-footer-info-container">
                <div className="crit-info-description"><span><b>{items}</b> Items</span></div>
                
            </div>
            
            <div className="crit-footer-info-container">
                <div><BsStarFill/></div> 
                <div className="crit-info-description"><span><b>{totalreviews}</b> Reviews</span></div>
            </div>
        </div>
    </React.Fragment>

}