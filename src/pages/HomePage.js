import React, {Fragment} from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import BannerImageViewMore from '../components/homeComponents/BannerImageViewMore'
import BannerLayer from '../components/homeComponents/BannerLayer'
import BooksAudible from '../components/homeComponents/BooksAudible'
import BrandSlider from '../components/homeComponents/BrandSlider'
import ConsumerElectronics from '../components/homeComponents/ConsumerElectronics'
import ContinueLink from '../components/homeComponents/ContinueLink'
import MainSlider from '../components/homeComponents/MainSlider'
import MenClothing from '../components/homeComponents/MenClothing'
import MenClothingTimingSection from '../components/homeComponents/MenClothingTimingSection'
import MobilesTablets from '../components/homeComponents/MobilesTablets'
import SitePriorities from '../components/homeComponents/SitePriorities'
import ToysHobbiesRobots from '../components/homeComponents/ToysHobbiesRobots'
import WomenClothing from '../components/homeComponents/WomenClothing'
import DummySelectBox from '../components/common/responsiveAndOtherComponents/DummySelectBox'
import ResponsiveSearch from '../components/common/responsiveAndOtherComponents/ResponsiveSearch'
import NewsLetterModal from '../components/common/responsiveAndOtherComponents/NewsLetterModal'
import QuickViewModal from '../components/common/responsiveAndOtherComponents/QuickViewModal'

function HomePage() {
    return (
        <Fragment>
            {/* app */}
     <div id="app">
        
        {/* Header */}
        <Header allCategoryMenu='true'/>
        {/* Header /- */}
       
        {/* Main-Slider */}
        <MainSlider/>
        {/* Main-Slider /- */}
        
        {/* Banner-Layer */}
        <BannerLayer/>
        {/* Banner-Layer /- */}
        
        {/* Men-Clothing */}
        <MenClothing/>
        
        {/* Men-Clothing-Timing-Section / HOT DEALS */}
        <MenClothingTimingSection/>
        {/* Men-Clothing-Timing-Section / HOT DEALS - */}
        
        {/* Banner-Image & View-more */}
        <BannerImageViewMore/>
        {/* Banner-Image & View-more /- */}
        {/* Men-Clothing /- */}
        
        {/* Women-Clothing */}
        <WomenClothing/>
        {/* Women-Clothing /- */}
        
        {/* Toys-Hobbies-&-Robots */}
        <ToysHobbiesRobots/>
        {/* Toys-Hobbies-&-Robots /- */}
       
        {/* Mobiles-&-Tablets */}
        <MobilesTablets/>
        {/* Mobiles-&-Tablets /- */}
        
        {/* Consumer-Electronics */}
        <ConsumerElectronics/>
        {/* Consumer-Electronics /- */}
       
        {/* Books-&-Audible */}
        <BooksAudible/>
        {/* Books-&-Audible /- */}
        
        {/* Continue-Link */}
        <ContinueLink/>
        {/* Continue-Link /- */}
        
        {/* Brand-Slider */}
        <BrandSlider/>
        {/* Brand-Slider /- */}
        
        {/* Site-Priorities */}
        <SitePriorities/>
        {/* Site-Priorities /- */}
        
        {/* Footer */}
        <Footer/>
        {/* Footer /- */}
        
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
      </div>
      {/* app /- */}  
        </Fragment>
    )
}

export default HomePage
