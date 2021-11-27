import React,{Fragment} from 'react'

function PageIntroductionWrapper(props) {
    return (
        <Fragment>
            <div className="page-style-a">
            <div className="container">
                <div className="page-intro">
                <h2>{props.title}</h2>
                <ul className="bread-crumb">
                    <li className="has-separator">
                    <i className="ion ion-md-home" />
                    <a href="home.html">{props.linkOne}</a>
                    </li>
                    <li className="is-marked">
                    <a href="single-product.html">{props.linkTwo}</a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default PageIntroductionWrapper
