import './categoryproductcard.scss';
import React, { memo } from 'react';
import { BsStarFill } from 'react-icons/bs';
import { Product } from '../../types/product';
import { Link } from 'react-router-dom';

export const CategoryProductCard = memo(({subCategoryName,productList}:{subCategoryName:string, productList:Product[]}) => 
<React.Fragment>
        {productList && productList.length > 0 ?
        <div className="crit-sub-category-background" key={subCategoryName}>
            <Link to={`/crit/${subCategoryName}`}>
                <div className="header">{subCategoryName}</div>
            </Link>
            <div className="body">
                {productList.map(eachProduct => 
                    <Link to={`/crit/${eachProduct.subcategory}/${eachProduct.entid}`}>
                        <div className="crit-sub-category-cards-background" key={eachProduct.entid}>
                            <div className="crit-card-header">{eachProduct.ename}</div>
                            <div className="crit-card-body"><img alt="not found" src={eachProduct.imageurl}/></div>
                            <div className="crit-card-footer backdrod-blur"><div className="card-footer-action">{eachProduct.reviewcount} Reviews</div>
                            <div className="card-footer-action"><span>{eachProduct.rating}/5 </span> <span><BsStarFill/></span></div></div>
                        </div>
                    </Link>
                )}
            </div>
        </div> : null
        }
</React.Fragment>
)