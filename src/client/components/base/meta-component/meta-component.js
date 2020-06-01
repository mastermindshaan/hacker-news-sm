import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom';

/*
* This HOC created due to Helmet Meta tags 
*/
const HeadHoc = (WrappedComponent, { title, description, canonicalURL }) => {
    const HeadMeta = (props) => {
        let { pathname } = useLocation(),
            selectedPath = pathname.split('/')[1];
        return (
            <>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta name="robots" content="index, follow" />
                    <link rel="canonical" href={`${canonicalURL}${selectedPath}`} />
                </Helmet>
                <WrappedComponent {...props} />
            </>
        );
    }
    return HeadMeta;
};

export default HeadHoc;
