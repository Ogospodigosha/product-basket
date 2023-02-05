import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {productsApi} from "./api/api";
import {fetchProducts, ProductType} from "./features/productList/productReducer";
import {RootStateType} from "./app/store";


function App() {
    const dispatch = useDispatch<any>()
    const products = useSelector<RootStateType, ProductType[]>(state => state.products)
    console.log(products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div>
            adfsdf
        </div>
    );
}

export default App;
