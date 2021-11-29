import React,{Fragment, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

function RightComponent(props) {
    const[displayList, setDisplayList] = useState(true)
    const[displayGrid, setDisplayGrid] = useState(false)
    
    const setDisplayStyle = ()=>{
        setDisplayList(!displayList)
        setDisplayGrid(!displayGrid)
    }

    useEffect(()=>{
        props.col==="12" ? setDisplayList(!displayList) : setDisplayList(!displayList) 
        props.col==="12" ? setDisplayGrid(!displayGrid) : setDisplayGrid(!displayGrid) 
    },[])
    
    return (
        <Fragment>
             <div className={props.col==="12" ? 'col-lg-12 col-md-12 col-sm-12' : 'col-lg-9 col-md-9 col-sm-12'}>
                    {/* Page-Bar */}
                    <div className="page-bar clearfix">
                        <div className="shop-settings">
                        <a id="list-anchor" className={displayList === true ? 'active' : ' '} onClick={setDisplayStyle}>
                            <i className="fas fa-th-list" />
                        </a>
                        <a  id="grid-anchor" onClick={setDisplayStyle} className={displayGrid === true ? 'active' : ' '}>
                            <i className="fas fa-th" />
                        </a>
                        </div>
                        {/* Toolbar Sorter 1  */}
                        <div className="toolbar-sorter">
                        <div className="select-box-wrapper">
                            <label className="sr-only" htmlFor="sort-by">Sort By</label>
                            <select className="select-box" id="sort-by">
                            <option selected="selected" value>Sort By: Best Selling</option>
                            <option value>Sort By: Latest</option>
                            <option value>Sort By: Lowest Price</option>
                            <option value>Sort By: Highest Price</option>
                            <option value>Sort By: Best Rating</option>
                            </select>
                        </div>
                        </div>
                        {/* //end Toolbar Sorter 1  */}
                        {/* Toolbar Sorter 2  */}
                        <div className="toolbar-sorter-2">
                        <div className="select-box-wrapper">
                            <label className="sr-only" htmlFor="show-records">Show Records Per Page</label>
                            <select className="select-box" id="show-records">
                            <option selected="selected" value>Show: 8</option>
                            <option value>Show: 16</option>
                            <option value>Show: 28</option>
                            </select>
                        </div>
                        </div>
                        {/* //end Toolbar Sorter 2  */}
                    </div>
                    {/* Page-Bar /- */}

                    {/* Row-of-Product-Container */}
                    <div className={displayList===true ? 'row product-container list-style' : 'row product-container grid-style'}>
                        <div className="product-item col-lg-4 col-md-6 col-sm-6">
                        <div className="item">
                            <div className="image-container">
                            <Link className="item-img-wrapper-link" to="/singleProduct/productName">
                                <img className="img-fluid" src="images/product/product@3x.jpg" alt="Product" />
                            </Link>
                            <div className="item-action-behaviors">
                                <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                <a className="item-mail" href="javascript:void(0)">Mail</a>
                                <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                            </div>
                            </div>
                            <div className="item-content">
                            <div className="what-product-is">
                                <ul className="bread-crumb">
                                <li className="has-separator">
                                    <a href="shop-v1-root-category.html">Men's</a>
                                </li>
                                <li className="has-separator">
                                    <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Hoodies</a>
                                </li>
                                </ul>
                                <h6 className="item-title">
                                    <Link className="item-img-wrapper-link" to="/singleProduct/productName">Casual Hoodie Full Cotton</Link>
                                </h6>
                                <div className="item-description">
                                <p>This hoodie is full cotton. It includes a muff sewn onto the lower front, and (usually) a drawstring to adjust the hood opening. Throughout the U.S., it is common for middle-school, high-school, and college students to wear this sweatshirts—with or without hoods—that display their respective school names or mascots across the chest, either as part of a uniform or personal preference.
                                </p>
                                </div>
                                <div className="item-stars">
                                <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                    <span style={{width: '67px'}} />
                                </div>
                                <span>(23)</span>
                                </div>
                            </div>
                            <div className="price-template">
                                <div className="item-new-price">
                                $55.00
                                </div>
                                <div className="item-old-price">
                                $60.00
                                </div>
                            </div>
                            </div>
                            <div className="tag new">
                            <span>NEW</span>
                            </div>
                        </div>
                        </div>
                        <div className="product-item col-lg-4 col-md-6 col-sm-6">
                        <div className="item">
                            <div className="image-container">
                            <Link className="item-img-wrapper-link" to="/singleProduct/productName">
                                <img className="img-fluid" src="images/product/product@3x.jpg" alt="Product" />
                            </Link>
                            <div className="item-action-behaviors">
                                <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                <a className="item-mail" href="javascript:void(0)">Mail</a>
                                <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                            </div>
                            </div>
                            <div className="item-content">
                            <div className="what-product-is">
                                <ul className="bread-crumb">
                                <li className="has-separator">
                                    <a href="shop-v1-root-category.html">Men's</a>
                                </li>
                                <li className="has-separator">
                                    <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">T-Shirts</a>
                                </li>
                                </ul>
                                <h6 className="item-title">
                                <Link className="item-img-wrapper-link" to="/singleProduct/productName">Mischka Plain Men T-Shirt</Link>
                                </h6>
                                <div className="item-description">
                                <p>T-shirts with bold slogans were popular in the UK in the 1980s. T-shirts were originally worn as undershirts, but are now worn frequently as the only piece of clothing on the top half of the body, other than possibly a brassiere or, rarely, a waistcoat (vest). T-shirts have also become a medium for self-expression and advertising, with any imaginable combination of words, art and photographs on display.</p>
                                </div>
                                <div className="item-stars">
                                <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                    <span style={{width: '67px'}} />
                                </div>
                                <span>(23)</span>
                                </div>
                            </div>
                            <div className="price-template">
                                <div className="item-new-price">
                                $55.00
                                </div>
                                <div className="item-old-price">
                                $60.00
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="product-item col-lg-4 col-md-6 col-sm-6">
                        <div className="item">
                            <div className="image-container">
                            <Link className="item-img-wrapper-link" to="/singleProduct/productName">
                                <img className="img-fluid" src="images/product/product@3x.jpg" alt="Product" />
                            </Link>
                            <div className="item-action-behaviors">
                                <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                <a className="item-mail" href="javascript:void(0)">Mail</a>
                                <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                            </div>
                            </div>
                            <div className="item-content">
                            <div className="what-product-is">
                                <ul className="bread-crumb">
                                <li className="has-separator">
                                    <a href="shop-v1-root-category.html">Men's</a>
                                </li>
                                <li className="has-separator">
                                    <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                    <a href="shop-v4-filter-as-category.html">T-Shirts</a>
                                </li>
                                </ul>
                                <h6 className="item-title">
                                <Link className="item-img-wrapper-link" to="/singleProduct/productName">Black Bean Plain Men T-Shirt</Link>
                                </h6>
                                <div className="item-description">
                                <p>T-shirts with bold slogans were popular in the UK in the 1980s. T-shirts were originally worn as undershirts, but are now worn frequently as the only piece of clothing on the top half of the body, other than possibly a brassiere or, rarely, a waistcoat (vest). T-shirts have also become a medium for self-expression and advertising, with any imaginable combination of words, art and photographs on display.</p>
                                </div>
                                <div className="item-stars">
                                <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                    <span style={{width: '67px'}} />
                                </div>
                                <span>(23)</span>
                                </div>
                            </div>
                            <div className="price-template">
                                <div className="item-new-price">
                                $55.00
                                </div>
                                <div className="item-old-price">
                                $60.00
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="product-item col-lg-4 col-md-6 col-sm-6">
                        <div className="item">
                            <div className="image-container">
                            <Link className="item-img-wrapper-link" to="/singleProduct/productName">
                                <img className="img-fluid" src="images/product/product@3x.jpg" alt="Product" />
                            </Link>
                            <div className="item-action-behaviors">
                                <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                <a className="item-mail" href="javascript:void(0)">Mail</a>
                                <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                            </div>
                            </div>
                            <div className="item-content">
                            <div className="what-product-is">
                                <ul className="bread-crumb">
                                <li className="has-separator">
                                    <a href="shop-v1-root-category.html">Men's</a>
                                </li>
                                <li className="has-separator">
                                    <a href="shop-v2-sub-category.html">Bottoms</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Jeans</a>
                                </li>
                                </ul>
                                <h6 className="item-title">
                                <Link className="item-img-wrapper-link" to="/singleProduct/productName">Regular Rock Blue Men Jean</Link>
                                </h6>
                                <div className="item-description">
                                <p>Traditionally, jeans were dyed to a blue color using natural indigo dye. Most denim is now dyed using synthetic indigo. Approximately 20 thousand tons of indigo are produced annually for this purpose, though only a few grams of the dye are required for each pair. For other colors of denim other dyes must be used. Currently, jeans are produced in any color that can be achieved with cotton.
                                </p>
                                </div>
                                <div className="item-stars">
                                <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                    <span style={{width: '67px'}} />
                                </div>
                                <span>(23)</span>
                                </div>
                            </div>
                            <div className="price-template">
                                <div className="item-new-price">
                                $55.00
                                </div>
                                <div className="item-old-price">
                                $60.00
                                </div>
                            </div>
                            </div>
                            <div className="tag new">
                            <span>NEW</span>
                            </div>
                        </div>
                        </div>
                        <div className="product-item col-lg-4 col-md-6 col-sm-6">
                        <div className="item">
                            <div className="image-container">
                            <Link className="item-img-wrapper-link" to="/singleProduct/productName">
                                <img className="img-fluid" src="images/product/product@3x.jpg" alt="Product" />
                            </Link>
                            <div className="item-action-behaviors">
                                <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                <a className="item-mail" href="javascript:void(0)">Mail</a>
                                <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                            </div>
                            </div>
                            <div className="item-content">
                            <div className="what-product-is">
                                <ul className="bread-crumb">
                                <li className="has-separator">
                                    <a href="shop-v1-root-category.html">Men's</a>
                                </li>
                                <li className="has-separator">
                                    <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Suits</a>
                                </li>
                                </ul>
                                <h6 className="item-title">
                                <Link className="item-img-wrapper-link" to="/singleProduct/productName">Black Maire Full Men Suit</Link>
                                </h6>
                                <div className="item-description">
                                <p>British dandy Beau Brummell redefined and adapted this style, then popularised it, leading European men to wearing well-cut, tailored clothes, adorned with carefully knotted neckties. The simplicity of the new clothes and their sombre colours contrasted strongly with the extravagant, foppish styles just before. Brummell's influence introduced the modern era of men's clothing which now includes the modern suit and necktie.</p>
                                </div>
                                <div className="item-stars">
                                <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                    <span style={{width: '67px'}} />
                                </div>
                                <span>(23)</span>
                                </div>
                            </div>
                            <div className="price-template">
                                <div className="item-new-price">
                                $55.00
                                </div>
                                <div className="item-old-price">
                                $60.00
                                </div>
                            </div>
                            </div>
                            <div className="tag sale">
                            <span>SALE</span>
                            </div>
                        </div>
                        </div>
                        <div className="product-item col-lg-4 col-md-6 col-sm-6">
                        <div className="item">
                            <div className="image-container">
                            <Link className="item-img-wrapper-link" to="/singleProduct/productName">
                                <img className="img-fluid" src="images/product/product@3x.jpg" alt="Product" />
                            </Link>
                            <div className="item-action-behaviors">
                                <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                <a className="item-mail" href="javascript:void(0)">Mail</a>
                                <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                            </div>
                            </div>
                            <div className="item-content">
                            <div className="what-product-is">
                                <ul className="bread-crumb">
                                <li className="has-separator">
                                    <a href="shop-v1-root-category.html">Men's</a>
                                </li>
                                <li className="has-separator">
                                    <a href="shop-v2-sub-category.html">Outwear</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Jackets</a>
                                </li>
                                </ul>
                                <h6 className="item-title">
                                <Link className="item-img-wrapper-link" to="/singleProduct/productName">Woodsmoke Rookie Parka Jacket</Link>
                                </h6>
                                <div className="item-description">
                                <p>A parka or anorak is a type of coat with a hood, often lined with fur or faux fur. The Caribou Inuit invented this kind of garment, originally made from caribou or seal skin, for hunting and kayaking in the frigid Arctic. Some Inuit anoraks require regular coating with fish oil to retain their water resistance.</p>
                                </div>
                                <div className="item-stars">
                                <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                    <span style={{width: '67px'}} />
                                </div>
                                <span>(23)</span>
                                </div>
                            </div>
                            <div className="price-template">
                                <div className="item-new-price">
                                $55.00
                                </div>
                                <div className="item-old-price">
                                $60.00
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="product-item col-lg-4 col-md-6 col-sm-6">
                        <div className="item">
                            <div className="image-container">
                            <Link className="item-img-wrapper-link" to="/singleProduct/productName">
                                <img className="img-fluid" src="images/product/product@3x.jpg" alt="Product" />
                            </Link>
                            <div className="item-action-behaviors">
                                <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                <a className="item-mail" href="javascript:void(0)">Mail</a>
                                <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                            </div>
                            </div>
                            <div className="item-content">
                            <div className="what-product-is">
                                <ul className="bread-crumb">
                                <li className="has-separator">
                                    <a href="shop-v1-root-category.html">Men's</a>
                                </li>
                                <li className="has-separator">
                                    <a href="shop-v2-sub-category.html">Accessories</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Ties</a>
                                </li>
                                </ul>
                                <h6 className="item-title">
                                <Link className="item-img-wrapper-link" to="/singleProduct/productName">Blue Zodiac Boxes Reg Tie
                                </Link>
                                </h6>
                                <div className="item-description">
                                <p>A necktie, or simply a tie, is a long piece of cloth, worn usually by men, for decorative purposes around the neck, resting under the shirt collar and knotted at the throat.</p>
                                </div>
                                <div className="item-stars">
                                <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                    <span style={{width: '67px'}} />
                                </div>
                                <span>(23)</span>
                                </div>
                            </div>
                            <div className="price-template">
                                <div className="item-new-price">
                                $55.00
                                </div>
                                <div className="item-old-price">
                                $60.00
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="product-item col-lg-4 col-md-6 col-sm-6">
                        <div className="item">
                            <div className="image-container">
                            <Link className="item-img-wrapper-link" to="/singleProduct/productName">
                                <img className="img-fluid" src="images/product/product@3x.jpg" alt="Product" />
                            </Link>
                            <div className="item-action-behaviors">
                                <a className="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                                <a className="item-mail" href="javascript:void(0)">Mail</a>
                                <a className="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                                <a className="item-addCart" href="javascript:void(0)">Add to Cart</a>
                            </div>
                            </div>
                            <div className="item-content">
                            <div className="what-product-is">
                                <ul className="bread-crumb">
                                <li className="has-separator">
                                    <a href="shop-v1-root-category.html">Men's</a>
                                </li>
                                <li className="has-separator">
                                    <a href="shop-v2-sub-category.html">Bottoms</a>
                                </li>
                                <li>
                                    <a href="shop-v3-sub-sub-category.html">Shoes</a>
                                </li>
                                </ul>
                                <h6 className="item-title">
                                <Link className="item-img-wrapper-link" to="/singleProduct/productName">Zambezi Carved Leather Business Casual Shoes
                                </Link>
                                </h6>
                                <div className="item-description">
                                <p>Dress shoes are characterized by smooth and supple leather uppers, leather soles, and narrow sleek figure. Casual shoes are characterized by sturdy leather uppers, non-leather outsoles, and wide profile. Some designs of dress shoes can be worn by either gender. The majority of dress shoes have an upper covering, commonly made of leather, enclosing most of the lower foot, but not covering the ankles.</p>
                                </div>
                                <div className="item-stars">
                                <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                    <span style={{width: '67px'}} />
                                </div>
                                <span>(23)</span>
                                </div>
                            </div>
                            <div className="price-template">
                                <div className="item-new-price">
                                $55.00
                                </div>
                                <div className="item-old-price">
                                $60.00
                                </div>
                            </div>
                            </div>
                            <div className="tag discount">
                            <span>-15%</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Row-of-Product-Container /- */}
                    </div>
        </Fragment>
    )
}

export default RightComponent
