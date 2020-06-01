import React from 'react';
import { renderRoutes } from 'react-router-config';
import ErrorBoundary from './components/error-boundary/error-boundary';
import Header from './components/header/header';

import './styles/styles.scss';

const App = ({ route }) => {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="main">
                    <Header />
                    <div className="container">
                        <ErrorBoundary>{renderRoutes(route.routes)}</ErrorBoundary>
                    </div>
                </div>
            </div>
        </div>
    );
};


App.defaultProps = {
    route: null
};

export default {
    component: App
};