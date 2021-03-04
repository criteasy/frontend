import { Product } from "./product";

export interface seperatedCategoryProductLists {
    [key:string]: {[key:string]:Product []}
}

export interface CategoryProductLists {
    products: [{
        categoryName: string,
        subcategoryName: string, 
        products: Product[]
    }]
}
