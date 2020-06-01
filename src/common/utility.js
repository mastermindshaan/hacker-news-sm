export const dateDiff = (date) => {
    let hours, days, years;
    const date1 = new Date(date);
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffYears = Math.floor(diffDays / 365);
    hours = diffHours === 1 ? "hour" : "hours";
    days = diffDays === 1 ? "day" : "days";
    years = diffYears === 1 ? "year" : "years";
    return diffYears > 0 ? `${diffYears}  ${years}` : diffDays > 0 ? `${diffDays} ${days}` : `${diffHours} ${hours}`;
}


export const shortUrl = (url) => {
    const urlArray = url.split('/');
    const shortenUrl = `${urlArray[0]}//${urlArray[2]}`;
    return shortenUrl;

}


export const canUseDOM = () => {
    const isClitent =
        typeof window !== "undefined" &&
        window.document &&
        window.document.createElement;
    return isClitent;
};
