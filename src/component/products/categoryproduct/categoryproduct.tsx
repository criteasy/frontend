import React from 'react';
import { Link } from 'react-router-dom';
import { useProductHook } from '../../../hooks/products/producthooks';
import { CompactProductCard } from '../../compactproductcard/compactproductcard'
import { StoreInfo } from '../../storeinfo/storeinfo';
import  './categoryproduct.scss';
export const CategoryProduct = ({category}:{category: string}) => {
    const inCategoryroduct = useProductHook(category)
    const totalItemCounts = 18614
    const totalReviewsCount = 129344
    return <React.Fragment>
        <div className="crit-products-list">
            <div className="crit-products">
                <div className="crit-products-container-heading">
                    Top Picks
                </div>
                <div className="crit-products-container-body">
                {
                    inCategoryroduct.map(eachInCategoryroduct => <Link to={"/crit/"+category+"/"+eachInCategoryroduct.entid} key={eachInCategoryroduct.entid}><CompactProductCard {...eachInCategoryroduct}></CompactProductCard></Link>)
                }
                </div>
            </div>

            <div className="crit-products">
                <div className="crit-products-container-heading">
                    More from Store
                </div>
                <div className="crit-products-container-body">
                {
                    inCategoryroduct.map(eachInCategoryroduct => <Link to={"/crit/"+category+"/"+eachInCategoryroduct.entid} key={eachInCategoryroduct.entid}><CompactProductCard key={eachInCategoryroduct.entid} {...eachInCategoryroduct}></CompactProductCard></Link>)
                }
                </div>
            </div>
            
        </div>
        <StoreInfo category={category.slice(0,1).toUpperCase()+category.slice(1,)} items={totalItemCounts} totalreviews={totalReviewsCount}/>
    </React.Fragment>

}