import React,{Fragment, useEffect} from 'react'

import Header from '../components/common/Header'
import PageIntroductionWrapper from '../components/common/PageIntroductionWrapper'
import CustomDeal from '../components/CustomDeal'
import Footer from '../components/common/Footer'

function SuperSalePage() {

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
                title="Super Sale"
                linkOne="Home"
                linkTwo="New Arrivals"
            />
            {/* Page Introduction Wrapper /- */}


            <CustomDeal
                title="Super Sale Products"
                item='11 Items'
            />

                  
            {/* Footer */}
            <Footer/>
            {/* Footer /- */}
        </Fragment>
    )
}

export default SuperSalePage
