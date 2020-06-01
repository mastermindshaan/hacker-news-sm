import React from 'react';

const VoteLink = props => {
    const { direction, anchorTitle, onVoteLinkClick, newsID, newsPoint } = props;

    return (
        <div className="votelinks">
            <a title={anchorTitle} onClick={(e) => onVoteLinkClick(e, newsID, newsPoint, direction)} href="#">
                <div className={`votearrow ${direction}`}></div>
            </a>
        </div>
    );
}

export default VoteLink;


