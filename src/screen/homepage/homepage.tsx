import React, { useContext } from 'react'
import './homepage.scss'
import { ProductCard } from '../../component/productcard/productcard'
import { Search } from '../../component/search/search';
import {CategoryProductCard } from '../../component/categoryproductcard/categoryproductcard'
import { useFixSearchBarToTop } from '../../hooks/homepage/homepagehooks';
import { useHomepageService } from '../../services/homepage/homepageservice';
import { SearchContext } from '../maincontainer/maincontainer';
import { Link } from 'react-router-dom';

export const Homepage = () => {
    const searchContext = useContext(SearchContext);
    const ref = useFixSearchBarToTop();
    const [trendingData, catogorywiseProductList, recommendedData, 
        ] = useHomepageService()
    return <React.Fragment>
        <div className='crit-home-jumbotron'>
            <div className='crit-search-bar-bg' ref={ref}>
                <div className='categories-menu'>
                    <Link to='/'><div className={searchContext.selectedCategory === 'All Categories' ? 'active' : ''} onClick={() => searchContext.selectCategory('All Categories')}>All</div></Link>
                    {searchContext.categories.slice(0,5).map((category:string[]) =>
                        <Link to={`/crit/${category[1]}`} key={category[1]}><div className={searchContext.selectedCategory === category[1] ? 'active' : ''} onClick={() => searchContext.selectCategory(category[1])}>{category[1]}</div></Link>
                    )}
                </div>
                <div className="crit-search-grp">
                    <Search/>
                </div>

            </div>
            </div>
        <div className='card-container'>
            <div className="product-container">
                <div className="header">
                    Todays Trending
                </div>         
                <div className="body">
                    {trendingData.map((eachTrendingData,index) => 
                        <Link to={`/crit/${eachTrendingData.subcategory}/${eachTrendingData.entid}`}  key={index}><ProductCard {...eachTrendingData} /></Link>
                    )}
                </div>           
            </div>
            {Object.keys(catogorywiseProductList).filter(category => 
                Object.keys(catogorywiseProductList[category]).
                    some(subcategory=>catogorywiseProductList[category][subcategory].length>0))
                        .map(category=>
                <div className="product-container category-wise" key={category}>
                    <div className="header">
                        <Link to={`/crit/${category}`}>{category}</Link>
                    </div>         
                    <div className="body">
                        {
                            Object.keys(catogorywiseProductList[category]).map(subcategory => 
                                // <Link to={`/crit/${category}`} > 
                                    <CategoryProductCard subCategoryName={subcategory} productList={catogorywiseProductList[category][subcategory]} key={subcategory}/>
                                // </Link>
                        )}
                    </div>
                </div>
            )}
            <div className="product-container">
                <div className="header">
                    Recommended
                </div>         
                <div className="body">
                    {recommendedData.map((eachRecommendedData,index) => 
                        <Link to={`/crit/${eachRecommendedData.subcategory}/${eachRecommendedData.entid}`}  key={index}>
                            <ProductCard {...eachRecommendedData}/>
                        </Link>
                    )}
                </div>           
            </div>            
        </div>
    </React.Fragment>

}



