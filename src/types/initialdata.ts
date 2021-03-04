import { Product } from "./product";
import { CategoryProductLists } from "./categoryproductlist";

export interface Category {
    categoryName: string;
    categoryMapping: string;
    subcategoryMapping: string;
}

export interface HomepageInitData {
    categories: Category [];
    trending: Product [];
    categoryWiseTopProducts: CategoryProductLists;
    recommended: Product [];

    
}