import React, { useContext, useEffect } from 'react';
import { SubCategoryBar } from '../../component/subcategorybar/subcategorybar';
import { CategoryProduct } from '../../component/products/categoryproduct/categoryproduct';
import { useDefaultStates } from '../../services/critcommon/critcommon'
import './crit.scss';
export const Crit = ({match}:{match:any}) => {
    // set default states
    useDefaultStates()

    // return crit category page UI
    return <React.Fragment>
        
        <div className="crit-container">
            <SubCategoryBar category={match.params.category}></SubCategoryBar>
            <CategoryProduct category={match.params.category}></CategoryProduct>
        </div>
    </React.Fragment>
}


