import React,{Fragment} from 'react'
import { Routes, Route } from "react-router-dom";

import HomePage from '../pages/HomePage';
import SingleProductPage from '../pages/SingleProductPage';


function AppRoute() {
    return (
        <Fragment>
             <Routes>
                <Route  path="/" element={<HomePage  key={Date.now()} />} />
                {/* <Route  path="/"  render={(props) => <HomePage {...props} key={Date.now()}/>} /> */}
                <Route  path="/singleProduct/:productName" element={<SingleProductPage />} />

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
