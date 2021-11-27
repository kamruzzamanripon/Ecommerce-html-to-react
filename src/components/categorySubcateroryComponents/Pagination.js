import React,{Fragment} from 'react'

function Pagination() {
    return (
        <Fragment>
            <div className="pagination-area">
                    <div className="pagination-number">
                        <ul>
                        <li style={{display: 'none'}}>
                            <a href="shop-v1-root-category.html" title="Previous">
                            <i className="fa fa-angle-left" />
                            </a>
                        </li>
                        <li className="active">
                            <a href="shop-v1-root-category.html">1</a>
                        </li>
                        <li>
                            <a href="shop-v1-root-category.html">2</a>
                        </li>
                        <li>
                            <a href="shop-v1-root-category.html">3</a>
                        </li>
                        <li>
                            <a href="shop-v1-root-category.html">...</a>
                        </li>
                        <li>
                            <a href="shop-v1-root-category.html">10</a>
                        </li>
                        <li>
                            <a href="shop-v1-root-category.html" title="Next">
                            <i className="fa fa-angle-right" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
        </Fragment>
    )
}

export default Pagination
