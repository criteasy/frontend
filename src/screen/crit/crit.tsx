import React from 'react';
import { SubCategoryBar } from '../../component/subcategorybar/subcategorybar';
import { CategoryProduct } from '../../component/products/categoryproduct/categoryproduct';
import './crit.scss';
export const Crit = ({match}:{match:any}) => {
    return <React.Fragment>
        
        <div className="crit-container">
            <SubCategoryBar category={match.params.category}></SubCategoryBar>
            {
                    <CategoryProduct category={match.params.category}></CategoryProduct>
            }
        </div>
    </React.Fragment>
}


