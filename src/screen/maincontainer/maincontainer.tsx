import React, { memo, useState, Suspense } from "react";
import { Route } from "react-router-dom";
import { TopNavbar } from "../../component/topnavbar/topnavbar";
import { Footer } from '../../component/footer/footer';
import { useCategoryListService } from "../../services/products/products";
import { useGlobalCategory } from "../../services/critcommon/critcommon";
import { css } from "aphrodite";
import {cs} from '../../css'
const Homepage = React.lazy(() => import('../homepage/homepage'));
const ProductDetails = React.lazy(() => import('../productdetails/productdetails'));
const Crit = React.lazy(() => import('../crit/crit'));



export const SearchContext = React.createContext({} as any);

export const Maincontainer = memo(({ match }: { match: any }) => {
    const [selectedCategory, selectCategory] = useState("All Categories");
    const [showSearch, setShowSearch] = useState(false)
    const [categories] = useCategoryListService();
    const [globalCategory, setGlobalCategory] = useGlobalCategory()

    return <SearchContext.Provider value={{ categories, selectedCategory, selectCategory, showSearch, setShowSearch, globalCategory, setGlobalCategory }}>
        <TopNavbar></TopNavbar>
        <div className={css(cs.width100p)}>
            <Suspense fallback={<div>loading...</div>}>
                <Route exact path={`${match.path}`} component={Homepage} />
                <Route exact path={`${match.path}/:category`} component={Crit} />
                <Route path={`${match.path}/:category/:id`} component={ProductDetails} />
            </Suspense>

        </div>
        {/* <Footer /> */}
    </SearchContext.Provider>
})

