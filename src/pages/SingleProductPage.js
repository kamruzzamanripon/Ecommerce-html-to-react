import React,{Fragment} from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import DummySelectBox from '../components/common/responsiveAndOtherComponents/DummySelectBox'
import ResponsiveSearch from '../components/common/responsiveAndOtherComponents/ResponsiveSearch'
import NewsLetterModal from '../components/common/responsiveAndOtherComponents/NewsLetterModal'
import QuickViewModal from '../components/common/responsiveAndOtherComponents/QuickViewModal'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import SingleProduct from '../components/SingleProduct'

function SingleProductPage() {
    return (
        <Fragment>
            
            {/* Header */}
            <Header allCategoryMenu='false'/>
            {/* Header /- */}

            {/* Page Introduction Wrapper */}
            <PageIntroductionWrapper/>
            {/* Page Introduction Wrapper /- */}

            {/* Single-Product-Full-Width-Page */}
            <SingleProduct/>
            {/* Single-Product-Full-Width-Page /- */}

            {/* Dummy Selectbox */}
            <DummySelectBox/>
            {/* Dummy Selectbox /- */}

             {/* Responsive-Search */}
            <ResponsiveSearch/>
            {/* Responsive-Search /- */}

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
