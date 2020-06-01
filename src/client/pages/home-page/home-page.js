import React from 'react';

import UIConfig from '../../../common/config';
import HeadHoc from "../../components/base/meta-component/meta-component";
import DynamicContent from "../../components/base/dynamic-content-component/dynamic-content-component";

const { metaTags, mainHeading, content } = UIConfig.homePage;

/*
* This is created for Home Page Rendering
*/
const HomePageRender = () => {

    return (
        <div className="home-page">
            <div className="row">
                <h2>{mainHeading}</h2>
                <DynamicContent tagName="div" innerHtml={content}
                    attrs={{ className: "home-page-content", }} />
            </div>
        </div>
    )
}


const HomePage = HeadHoc(HomePageRender, metaTags);


export default HomePage;