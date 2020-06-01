
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

    let { pathname } = useLocation();
    const newsSelected = pathname.indexOf('news') > -1 ? ' selected' : '';
    const newestSelected = pathname.indexOf('newest') > -1 ? ' selected' : '';
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="container">
                    <div className="nav-wrapper">
                        <div className="thead">
                            <span className="logo">
                                <Link to="/">
                                    <img src="/images/y18.gif" alt="Hacker News" />
                                </Link>
                            </span>
                            <span className="top-news">
                                <Link to="/news/" className={`item${newsSelected}`} >
                                    Top
                                </Link>
                            </span>
                            <span className="seperator"></span>
                            <span className="latest-news">
                                <Link to="/newest/" className={`item${newestSelected}`} >
                                    New
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;