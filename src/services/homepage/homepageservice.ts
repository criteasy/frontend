import { useEffect, useState } from "react"
import { CategoryProductLists, seperatedCategoryProductLists } from "../../types/categoryproductlist";
import { HomepageInitData } from "../../types/initialdata";
import { Product } from "../../types/product";
import {  API } from "../api"
import { useCategoryListService } from "../products/products";

const useHomepageApi = () => {
    const [homepageData, setHomepageData] = useState({} as HomepageInitData);
    useEffect(()=>{
        API.get("catalog/").then((resp: any) => {
            setHomepageData(resp.data);
        })

    },[])

    return homepageData
}



const filterAndArrangeCategoryProductList = (categoryProductList: CategoryProductLists) => {
    const arrangedProductList = {} as seperatedCategoryProductLists;
    categoryProductList.products.forEach(product => {
        if (!arrangedProductList[product.categoryName]){
            arrangedProductList[product.categoryName] = {};
        }
        arrangedProductList[product.categoryName][product.subcategoryName] = product.products.slice(0,4);
    });
    return arrangedProductList
}

export const useHomepageService = (): [
    Product[], 
    seperatedCategoryProductLists,
    Product[],
    React.Dispatch<React.SetStateAction<Product[]>>,
    React.Dispatch<React.SetStateAction<seperatedCategoryProductLists>>,
    React.Dispatch<React.SetStateAction<Product[]>>,
]  => 
{
    const initialData:HomepageInitData = useHomepageApi();
    const [trendingData, setTrendingData] = useState([] as Product[])
    const [catogorywiseProductList, setCatogorywiseProductList] = useState({} as seperatedCategoryProductLists)
    const [recommendedData, setRecommendedData] = useState([] as Product[])

    // console.log("called")

    useEffect(()=>{
        if (initialData.trending) {
            setTrendingData(initialData.trending);
            setCatogorywiseProductList(filterAndArrangeCategoryProductList(initialData.categoryWiseTopProducts));
            setRecommendedData(initialData.recommended);
        }
    },[initialData])
   
    return [trendingData,catogorywiseProductList, recommendedData, setTrendingData, setCatogorywiseProductList, setRecommendedData]
}