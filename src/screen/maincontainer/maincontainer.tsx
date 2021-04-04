import React, { memo, useState } from "react";
import { Route } from "react-router-dom";
import { TopNavbar } from "../../component/topnavbar/topnavbar";
import { Homepage } from "../homepage/homepage";
import { ProductDetails } from "../productdetails/productdetails"

import { Crit } from "../crit/crit";
import "./maincontainer.scss";
import { Footer } from '../../component/footer/footer';
import { useCategoryListService } from "../../services/products/products";
import { useGlobalCategory } from "../../services/critcommon/critcommon";


export const SearchContext = React.createContext({} as any);

export const Maincontainer = memo(({ match }: { match: any }) => {
    const [selectedCategory, selectCategory] = useState("All Categories");
    const [showSearch, setShowSearch] = useState(false)
    const [categories] = useCategoryListService();
    const [globalCategory, setGlobalCategory] = useGlobalCategory()

    return <SearchContext.Provider value={{ categories, selectedCategory, selectCategory, showSearch, setShowSearch, globalCategory, setGlobalCategory }}>
        <TopNavbar></TopNavbar>
        <div className="main-container">
            <Route exact path={`${match.path}`} component={Homepage} />
            <Route exact path={`${match.path}/:category`} component={Crit} />
            <Route path={`${match.path}/:category/:id`} component={ProductDetails} />

        </div>
        <Footer />
    </SearchContext.Provider>
})

