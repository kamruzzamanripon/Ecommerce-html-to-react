import React,{Fragment, useState} from 'react'
import ReactImageZoom from 'react-image-zoom';

function ProductZoomArea() {
    const [previewImage, setPreviewImage] = useState("images/product/product@4x.jpg")
    

    const bigImageConvert = (event)=>{
      let imgSrc= event.target.getAttribute('src')
      setPreviewImage(imgSrc)
      
    }
    return (
        <Fragment>
            <div className="zoom-area">
                <ReactImageZoom
                  width= {480}
                  height= {400}
                  zoomWidth={500}
                  img={previewImage}
                  
                />
                  {/* <img id="zoom-pro" className="img-fluid" src="images/product/product@4x.jpg"  alt="Zoom Image" /> */}
                  
                  <div id="gallery" className="u-s-m-t-10">
                    
                    <a onClick={bigImageConvert} className="active" >
                      <img src="images/product/product@4x.jpg" alt="Product" />
                    </a>
                    <a  onClick={bigImageConvert} >
                      <img  src="images/product/product@3x.jpg" alt="Product" />
                    </a>
                    <a onClick={bigImageConvert} >
                      <img  src="images/product/product@4x.jpg" alt="Product" />
                    </a>
                    <a onClick={bigImageConvert} >
                      <img  src="images/product/product@3x.jpg" alt="Product" />
                    </a>
                    <a onClick={bigImageConvert} >
                      <img  src="images/product/product@4x.jpg" alt="Product" />
                    </a>
                    <a onClick={bigImageConvert}>
                      <img  src="images/product/product@3x.jpg" alt="Product" />
                    </a>
                  </div>
                </div>
        </Fragment>
    )
}

export default ProductZoomArea
