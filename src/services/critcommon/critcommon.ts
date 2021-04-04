import { useContext, useEffect, useState } from "react";
import { SearchContext } from '../../screen/maincontainer/maincontainer';

export const useDefaultStates = ()=> {
    const searchContext = useContext(SearchContext);
    useEffect(()=>{
        searchContext.setShowSearch(true);
    },[])
}

export const useGlobalCategory = ():[string[], (category:string)=>void] => {
    const [globalCategory, setGlobalCategory] = useState(["/"]);
    return [globalCategory, (category)=>setGlobalCategory([...globalCategory, category])];

}