import React, { useContext } from 'react';
import './search.scss';
import { BsCaretDownFill } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { SearchContext } from '../../screen/maincontainer/maincontainer';
import { Link } from 'react-router-dom';

export const Search = () => {
    const searchContext = useContext(SearchContext);
    return <React.Fragment>
        <div className="search-container">
            <div className="categories-menu">
                <span> <span>{searchContext.selectedCategory}</span><BsCaretDownFill/></span>
                <div className="dropdown-content backdrop-blur">
                    <a onClick={() => searchContext.selectCategory("All Categories")}>All Categories</a>
                    {
                        searchContext.categories.map((category: string[]) =>
                            <Link key={category[1]} to={`/crit/${category[1]}`}  
                            onClick={() => searchContext.selectCategory(category[1]) || searchContext.setGlobalCategory(category[1])}>
                                {category[1]}
                            </Link>
                        )
                    }
                </div>
            </div>
            <div className="search-input">
                <input type="text" placeholder="Search here....."/>
                <button><BsSearch></BsSearch></button>
            </div>
        </div>
    </React.Fragment>
}