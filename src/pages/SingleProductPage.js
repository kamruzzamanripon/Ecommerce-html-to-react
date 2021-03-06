import React,{Fragment, useEffect} from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import DummySelectBox from '../components/common/responsiveAndOtherComponents/DummySelectBox'
import NewsLetterModal from '../components/common/responsiveAndOtherComponents/NewsLetterModal'
import QuickViewModal from '../components/common/responsiveAndOtherComponents/QuickViewModal'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import SingleProduct from '../components/SingleProduct'

function SingleProductPage() {
    useEffect(()=>{
        window.scroll(0,0)
    })
    return (
        <Fragment>
            
            {/* Header */}
            <Header allCategoryMenu='false'/>
            {/* Header /- */}

            {/* Page Introduction Wrapper */}
            <PageIntroductionWrapper
                title="Single Page Product Details"
                linkOne="Home"
                linkTwo="Detail"
            />
            {/* Page Introduction Wrapper /- */}

            {/* Single-Product-Full-Width-Page */}
            <SingleProduct/>
            {/* Single-Product-Full-Width-Page /- */}

            {/* Dummy Selectbox */}
            <DummySelectBox/>
            {/* Dummy Selectbox /- */}

            {/* Newsletter-Modal */}
            <NewsLetterModal/>
            {/* Newsletter-Modal /- */}

            {/* Quick-view-Modal */}
            <QuickViewModal/>
            {/* Quick-view-Modal /- */}

            {/* Footer */}
            <Footer/>
            {/* Footer /- */}

        </Fragment>
    )
}

export default SingleProductPage
