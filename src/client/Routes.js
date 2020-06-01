import HomePage from './pages/home-page/home-page';
import NotFoundPage from './pages/not-found-page/not-found-page';
import NewsListingPage from './pages/news-listing-page/news-listing-page';
import App from './App';

export default [
    {
        ...App,
        routes: [
            {
                component: HomePage,
                path: '/',
                exact: true
            },
            {
                ...NewsListingPage,
                path: '/news/',
                exact: true
            },
            {
                ...NewsListingPage,
                path: '/news/:id'

            },
            {
                ...NewsListingPage,
                path: '/newest/',
                exact: true
            },
            {
                ...NewsListingPage,
                path: '/newest/:id'

            },
            {
                ...NotFoundPage
            }
        ]
    }
];