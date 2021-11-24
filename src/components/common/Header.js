import React, {Fragment} from 'react'
import BottomHeader from './headerComponents/BottomHeader'
import MidHeader from './headerComponents/MidHeader'
import MiniCart from './headerComponents/MiniCart'
import TopHeader from './headerComponents/TopHeader'

function Header(props) {
  
    return (
        <Fragment>
             <header >
              {/* Top-Header */}
              <TopHeader />
              {/* Top-Header /- */}
              
              {/* Mid-Header */}
              <MidHeader />
              {/* Mid-Header /- */}
              
              {/* Mini Cart */}
              <MiniCart/>
              {/* Mini Cart /- */}
              
              {/* Bottom-Header */}
              <BottomHeader 
                allCategoryMenu={props.allCategoryMenu}
                />
              {/* Bottom-Header /- */}
            </header>
        </Fragment>
    )
}

export default Header
