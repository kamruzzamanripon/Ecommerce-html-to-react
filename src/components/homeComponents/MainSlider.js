import React, {Fragment} from 'react'

function MainSlider() {
    return (
        <Fragment>
            <div className="default-height ph-item">
            <div className="slider-main owl-carousel">
                <div className="bg-image one">
                <div className="slide-content slide-animation">
                    <h1>Casual Clothing</h1>
                    <h2>lifestyle / clothing / hype</h2>
                </div>
                </div>
                <div className="bg-image two">
                <div className="slide-content-2 slide-animation">
                    <h2 className="slide-2-h2-a">Hiking</h2>
                    <h2 className="slide-2-h2-b">Collection</h2>
                    <h1>2018</h1>
                </div>
                </div>
                <div className="bg-image three">
                <div className="slide-content slide-animation">
                    <h1>Tech
                    <span style={{color: '#333'}}>Deals</span>
                    </h1>
                    <h2 style={{color: '#333'}}># shopping</h2>
                </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default MainSlider
