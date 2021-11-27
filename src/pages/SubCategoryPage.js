import React,{Fragment} from 'react'

import Header from '../components/common/Header'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import NewsLetterModal from '../components/common/responsiveAndOtherComponents/NewsLetterModal'
import QuickViewModal from '../components/common/responsiveAndOtherComponents/QuickViewModal'
import SubCategoryProduct from '../components/SubCategoryProduct'
import Footer from '../components/common/Footer'

function SubCategoryPage() {
    return (
        <Fragment>
             {/* Header */}
             <Header allCategoryMenu='false'/>
            {/* Header /- */}

            {/* Page Introduction Wrapper */}
            <PageIntroductionWrapper
                 title="Sub Category Product Info"
                 linkOne="Home"
                 linkTwo="Sub-Category"
            />
            {/* Page Introduction Wrapper /- */}


            <SubCategoryProduct/>

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

export default SubCategoryPage
