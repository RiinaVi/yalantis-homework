import zeropad from 'zeropad';

export function formatDate(date) {
    let properDate = new Date(date);
    return zeropad(properDate.getDate()) + '/'
        + zeropad(properDate.getMonth() + 1) + '/'
        + properDate.getFullYear();
}

export function alertTimer(time = 2000, stateSetter) {
    stateSetter(true);
    setTimeout(() => stateSetter(false), time);
}