/**
 * Config is used for contain static data
 */

const UICONFIG = {
    homePage: {
        metaTags: {
            title: "Home | Hacker News",
            description: "Description of Home Page of Hacker News",
            canonicalURL: "https://ssr-news-app.herokuapp.com/"
        },
        mainHeading: "Home Page",
        content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue pellentesque augue eu iaculis. Phasellus eu nulla hendrerit, consequat quam nec, porttitor nunc. Ut pulvinar quis tellus vitae sagittis. Suspendisse a turpis ut quam dapibus feugiat at at nisi. Ut bibendum dignissim libero, sit amet tristique dolor vehicula eu. In imperdiet nunc nec eleifend euismod. Sed purus quam, finibus at fringilla id, imperdiet pharetra metus. Vivamus tempor imperdiet purus, id ullamcorper ante mattis ac. Nam ultricies mauris sed odio maximus, nec egestas ante auctor. Sed eu libero metus. Etiam elementum leo nec tellus dignissim, a porttitor lorem mattis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue pellentesque augue eu iaculis. Phasellus eu nulla hendrerit, consequat quam nec, porttitor nunc. Ut pulvinar quis tellus vitae sagittis. Suspendisse a turpis ut quam dapibus feugiat at at nisi. Ut bibendum dignissim libero, sit amet tristique dolor vehicula eu. In imperdiet nunc nec eleifend euismod. Sed purus quam, finibus at fringilla id, imperdiet pharetra metus. Vivamus tempor imperdiet purus, id ullamcorper ante mattis ac. Nam ultricies mauris sed odio maximus, nec egestas ante auctor. Sed eu libero metus. Etiam elementum leo nec tellus dignissim, a porttitor lorem mattis.</p>`
    },
    newsListingPage: {
        metaTags: {
            title: "Listing Page | Hacker News",
            description: "Description of Listing Page of Hacker News",
            canonicalURL: "https://ssr-news-app.herokuapp.com/"
        },
        voteLink: {
            directionText: {
                "up": "up",
                "down": "down",
                "upVote": "Up Vote",
                "downVote": "Down Vote"
            }
        },
        hideIdsText: "hideIds",
        voteObjText: "voteObj"
    },
    notFoundPage: {
        metaTags: {
            title: "Page Not Found | Hacker News",
            description: "Description of No Page Found of Hacker News",
            canonicalURL: "https://ssr-news-app.herokuapp.com/"
        },
        content: `<p>Please try again.</p>`
    },
    errorMsg: "Something went Wrong",
    moreText: "More",
    noDataText: "No Data Found",
    noPageFoundText: "Page Not Found",
    byText: "by",
    agoText: "ago",
    hideText: "hide"
}


export default UICONFIG;