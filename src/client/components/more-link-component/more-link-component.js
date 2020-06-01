import React from 'react';
import { Link, useParams } from 'react-router-dom';

import UIConfig from '../../../common/config';

const MoreLink = props => {
    let { path, paramId } = props;
    return (
        <div className="more-link">
            <span>
                <Link to={`/${path}/${paramId ? (+paramId + 1) : 1}`} className="item" >
                    {UIConfig.moreText}
                </Link>
            </span>
        </div>
    );
}

export default MoreLink;

