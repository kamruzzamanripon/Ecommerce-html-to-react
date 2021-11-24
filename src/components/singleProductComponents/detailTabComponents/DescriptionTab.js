import React,{Fragment} from 'react'

function DescriptionTab() {
    return (
        <Fragment>
            <div className="tab-pane fade active show" id="description">
                      <div className="description-whole-container">
                        <p className="desc-p u-s-m-b-26">This hoodie is full cotton. It includes a muff sewn onto the lower front, and (usually) a drawstring to adjust the hood opening. Throughout the U.S., it is common for middle-school, high-school, and college students to wear this sweatshirts—with or without hoods—that display their respective school names or mascots across the chest, either as part of a uniform or personal preference.
                        </p>
                        <img className="desc-img img-fluid u-s-m-b-26" src="images/product/product@3x.jpg" alt="Product" />
                        <iframe className="desc-iframe u-s-m-b-45" width={710} height={400} src="images/product/iframe-youtube.jpg" allowFullScreen />
                      </div>
                    </div>
        </Fragment>
    )
}

export default DescriptionTab
