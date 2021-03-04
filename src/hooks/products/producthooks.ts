import { useProductsApi } from '../../services/products/products'
import { Product } from '../../types/product';


export const useProductHook = (category:string): Product[]=>{
    const product = useProductsApi(category);
    return product
}