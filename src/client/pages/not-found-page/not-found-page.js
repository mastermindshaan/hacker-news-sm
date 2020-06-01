import React from 'react';

import UIConfig from '../../../common/config';
import HeadHoc from "../../components/base/meta-component/meta-component";
import DynamicContent from "../../components/base/dynamic-content-component/dynamic-content-component";

const { metaTags, content } = UIConfig.notFoundPage;

const NotFoundPageRenderer = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return (
        <div className="not-found-container">
            <h1>{UIConfig.noPageFoundText}</h1>
            <DynamicContent tagName="p" innerHtml={content} />
        </div>
    );
};

const NotFoundPage = HeadHoc(NotFoundPageRenderer, metaTags);
export default {
    component: NotFoundPage
};