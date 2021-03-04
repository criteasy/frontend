import React, {memo, useState} from "react";
import {  Route } from "react-router-dom";
import { TopNavbar } from "../../component/topnavbar/topnavbar";
import {Homepage} from "../homepage/homepage";
import { Crit } from "../crit/crit";
import  "./maincontainer.scss";
import { Footer } from '../../component/footer/footer';
import { useCategoryListService } from "../../services/products/products";


export const SearchContext = React.createContext({} as any);

export const Maincontainer = memo(({match}:{match:any})=>{
    const [selectedCategory, selectCategory] = useState("All Categories");
    const [showSearch, setShowSearch] = useState(true)
    const [categories] = useCategoryListService();

    return <SearchContext.Provider value={{categories, selectedCategory, selectCategory, showSearch, setShowSearch}}>
            <TopNavbar></TopNavbar>
            <div className="main-container">
                <Route exact path={`${match.path}/`} component={Homepage} />
                <Route exact path={`${match.path}/:category`} component={Crit} />
            </div>
            <Footer/>
        </SearchContext.Provider>
})

