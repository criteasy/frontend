import React, { useContext, useEffect } from 'react';
import { SubCategoryBar } from '../../component/subcategorybar/subcategorybar';
import { CategoryProduct } from '../../component/products/categoryproduct/categoryproduct';
import './crit.scss';
import { SearchContext } from '../maincontainer/maincontainer';
export const Crit = ({match}:{match:any}) => {
    const searchContext = useContext(SearchContext);
    useEffect(()=>{
        searchContext.setShowSearch(true);
    },[])
    return <React.Fragment>
        
        <div className="crit-container">
            <SubCategoryBar category={match.params.category}></SubCategoryBar>
            {
                    <CategoryProduct category={match.params.category}></CategoryProduct>
            }
        </div>
    </React.Fragment>
}


