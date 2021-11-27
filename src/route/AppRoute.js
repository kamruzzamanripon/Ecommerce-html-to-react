import React,{Fragment} from 'react'
import { Routes, Route } from "react-router-dom";
import CartPage from '../pages/CartPage';
import CategoryPage from '../pages/CategoryPage';
import CheckOutPage from '../pages/CheckOutPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import SingleProductPage from '../pages/SingleProductPage';
import SubCategoryPage from '../pages/SubCategoryPage';
import SubCategoryUnderSubCategoryPage from '../pages/SubCategoryUnderSubCategoryPage';


function AppRoute() {
    return (
        <Fragment>
             <Routes>
                <Route  path="/" element={<HomePage  key={Date.now()} />} />
                <Route  path="/singleProduct/:productName" element={<SingleProductPage />} />
                <Route  path="/:categoryName" element={<CategoryPage />} />
                <Route  path="/:categoryName/:subCategoryName" element={<SubCategoryPage />} />
                <Route  path="/:categoryName/:subCategoryName/:subCategoryName" element={<SubCategoryUnderSubCategoryPage />} />
                <Route  path="/cart" element={<CartPage />} />
                <Route  path="/checkout" element={<CheckOutPage />} />

                <Route path="/*" element={<NotFoundPage/> } />
            </Routes>
        </Fragment>
    )
}

export default AppRoute
