import React,{Fragment} from 'react'
import { Routes, Route } from "react-router-dom";
import CategoryPage from '../pages/CategoryPage';

import HomePage from '../pages/HomePage';
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

                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                        </main>
                    }
                    />
            </Routes>
        </Fragment>
    )
}

export default AppRoute
