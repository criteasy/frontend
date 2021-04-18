import { useContext } from "react";
import { useState, useEffect } from "react";
import { SearchContext } from "../../screen/maincontainer/maincontainer";
import { Category } from "../../types/initialdata";
import { Product } from "../../types/product";
import {  API } from "../api"
const cat = ["Electronics"];
const subcat = ["Mobiles"];
export const useProductsApi = (category: string) => {
    const [productData, setproductData] = useState([] as Product[]);
    const searchContext = useContext(SearchContext)
    
    useEffect(()=>{
        API.get("/entities",cat.includes(category) ? {
            params:{
                category: category
            }
        }: {
            params:{
                subcategory: category
            }
        }).then((resp: any) => {
            setproductData(resp.data);
        })

    },[category])

    return productData
}

export const useSubCategoryListService = (category: string): string[] => {
    const [subCategories, setSubCategory] = useState([] as string[]);
    useEffect(()=>{
        API.get(`categories/${category}`).then(({data}: {data: string[]}) => {
            setSubCategory(data);
        });
    },[category]);
    return subCategories;
}


export const useCategoryListService = (updateCategoriesList?: boolean): [string[][], (categoriesList: Category[])=>void] => {
    const [categories, setCategory] = useState( [] as string[][]);

    useEffect(()=>{
        if (!updateCategoriesList){
            API.get('categories/').then(({data}: {data: string[]}) => {
                const mappedData = data.map((d)=>[d,d]);
                setCategory(mappedData);
            });
        }
    },[]);
    const updateCategories = (categoriesList: Category[])=>{
        setCategory(
            categoriesList.reduce((categoryReduced, category) => 
                (categoryReduced.length > 0 && categoryReduced[categoryReduced.length-1][0]===category.categoryMapping) ?
                categoryReduced : categoryReduced.concat([[category.categoryMapping, category.categoryName]]), [] as string[][])
        );

    };
    

    return [categories, updateCategories];
}