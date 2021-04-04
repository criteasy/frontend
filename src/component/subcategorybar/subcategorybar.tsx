import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../screen/maincontainer/maincontainer';
import { useSubCategoryListService } from '../../services/products/products';
import './subcategorybar.scss';
import {BsArrowLeft} from 'react-icons/all'
export const SubCategoryBar = ({category}: {category: string}) => { 

    const subcategories = (useSubCategoryListService(category)).slice(0,7)
    const searchContext = useContext(SearchContext);

    return <React.Fragment>
        <div className="crit-sub-category-bar">
            <ul>
                <li key={category}><Link to={category}><b>{category[0].toUpperCase()+category.slice(1)} Store</b></Link></li>
                {
                    subcategories.map((subcategory)=><li key={subcategory} onClick={()=>searchContext.setGlobalCategory(subcategory)}><Link to={subcategory}>{subcategory}</Link></li>)
                }
                {searchContext.globalCategory.length > 0 ?<li><Link to={searchContext.globalCategory[searchContext.globalCategory.length-2]}><b><BsArrowLeft/></b></Link></li>:""}

                
            </ul>
        </div>
    </React.Fragment>
}
