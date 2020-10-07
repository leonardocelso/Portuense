const dateFormat = require('dateformat');

module.exports =  function getDate() {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = (today.getUTCHours() - 6) + ":" + today.getMinutes();
    const dateTime = date + ' ' + time;
    return dateTime;
}