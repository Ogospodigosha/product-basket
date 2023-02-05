import axios from "axios";
import {ProductType} from "../features/productList/productReducer";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
})

export const productsApi = {
    getProducts() {
        return instance.get<Array<ProductType>>('items')
    }
}