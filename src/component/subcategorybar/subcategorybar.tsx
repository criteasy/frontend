import React from 'react';
import { useSubCategoryListService } from '../../services/products/products';
import './subcategorybar.scss';
export const SubCategoryBar = ({category}: {category: string}) => { 

    const subcategories = (useSubCategoryListService(category)).slice(0,7)



    return <React.Fragment>
        <div className="crit-sub-category-bar">
            <ul>
                <li key={category}><a href={category}><b>{category[0].toUpperCase()+category.slice(1)} Store</b></a></li>
                {
                    subcategories.map((subcategory)=><li key={subcategory}><a href={subcategory}>{subcategory}</a></li>)
                }
                <li><a href={category}>See more...</a></li>
            </ul>
        </div>
    </React.Fragment>
}
