import React,{Fragment} from 'react'
import CategoryIntroComponent from './categorySubcateroryComponents/CategoryIntroComponent'
import CategoryLeftComponent from './categorySubcateroryComponents/CategoryLeftComponent'
import Pagination from './categorySubcateroryComponents/Pagination'
import RightComponent from './categorySubcateroryComponents/RightComponent'

function CategoryProduct() {
    
    return (
        <Fragment>
            {/* Shop-Page */}
            <div className="page-shop u-s-p-t-80">
                <div className="container">
                
                {/* Shop-Intro */}
                <CategoryIntroComponent/>
                {/* Shop-Intro /- */}


                <div className="row">

                    {/* Shop-Left-Side-Bar-Wrapper */}
                    <CategoryLeftComponent/>
                    {/* Shop-Left-Side-Bar-Wrapper /- */}



                    {/* Shop-Right-Wrapper */}
                    <RightComponent/>
                    {/* Shop-Right-Wrapper /- */}


                    {/* Shop-Pagination */}
                    <Pagination/>
                    {/* Shop-Pagination /- */}
                </div>
                </div>
            </div>
            {/* Shop-Page /- */}

     
        </Fragment>
    )
}

export default CategoryProduct
