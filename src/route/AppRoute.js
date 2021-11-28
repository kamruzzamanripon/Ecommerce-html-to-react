import React,{Fragment} from 'react'
import { Routes, Route } from "react-router-dom";
import AboutPage from '../pages/AboutPage';
import CartPage from '../pages/CartPage';
import CategoryPage from '../pages/CategoryPage';
import CheckOutPage from '../pages/CheckOutPage';
import ContactPage from '../pages/ContactPage';
import NewArrivalsPage from '../pages/NewArrivalsPage';
import DirectoryPage from '../pages/DirectoryPage';
import FaqPage from '../pages/FaqPage';
import HomePage from '../pages/HomePage';
import LoginRegisterPage from '../pages/LoginRegisterPage';
import LostPasswordPage from '../pages/LostPasswordPage';
import NotFoundPage from '../pages/NotFoundPage';
import SearchResultPage from '../pages/SearchResultPage';
import SingleProductPage from '../pages/SingleProductPage';
import SubCategoryPage from '../pages/SubCategoryPage';
import SubCategoryUnderSubCategoryPage from '../pages/SubCategoryUnderSubCategoryPage';
import TermsAndConditionsPage from '../pages/TermsAndConditionsPage';
import TrackOrderPage from '../pages/TrackOrderPage';
import WhishListPage from '../pages/WhishListPage';
import ExclusiveDealsPage from '../pages/ExclusiveDealsPage';
import FlashDealsPage from '../pages/FlashDealsPage';
import SuperSalePage from '../pages/SuperSalePage';


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
                <Route  path="/wishlist" element={<WhishListPage />} />
                <Route  path="/search-result" element={<SearchResultPage />} />
                <Route  path="/login" element={<LoginRegisterPage />} />
                <Route  path="/lost-password" element={<LostPasswordPage />} />

                <Route  path="/new-arrivals" element={<NewArrivalsPage />} />
                <Route  path="/exclusive-deals" element={<ExclusiveDealsPage />} />
                <Route  path="/flash-deals" element={<FlashDealsPage />} />
                <Route  path="/super-sale" element={<SuperSalePage />} />

                <Route  path="/directory" element={<DirectoryPage />} />
                <Route  path="/terms-conditions" element={<TermsAndConditionsPage />} />
                <Route  path="/track-order" element={<TrackOrderPage />} />
                <Route  path="/faq" element={<FaqPage />} />
                <Route  path="/about" element={<AboutPage />} />
                <Route  path="/contact" element={<ContactPage />} />

                <Route path="/*" element={<NotFoundPage/> } />
            </Routes>
        </Fragment>
    )
}

export default AppRoute
