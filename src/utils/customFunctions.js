import zeropad from 'zeropad';

export function formatDate(date) {
    let properDate = new Date(date);
    return zeropad(properDate.getDate()) + '/'
        + zeropad(properDate.getMonth() + 1) + '/'
        + properDate.getFullYear();
}

export function debounce(f, ms) {
    let isCooldown = false;
    return function () {
        if (isCooldown) return;
        f.apply(this, arguments);
        isCooldown = true;
        setTimeout(() => isCooldown = false, ms);
    };

}

export const toQueryString = (obj) => {
    let str = [];
    for (let p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
};
