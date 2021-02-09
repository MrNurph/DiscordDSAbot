const constants = require("./constants");

const getWeather = () => {
    return getRandomItem(constants.weather);
}

const getGroup = () => {
    return getRandomItem(constants.group);
}

const getJokes = () => {
    return getRandomItem(constants.jokes);
}

const getWeapon = () => {
    let num = Math.random() * 1000;
    if (num < 500) {
        return constants.metal[0];
    } else if (num < 750) {
        return constants.metal[1];
    } else if (num < 950) {
        return constants.metal[2];
    } else if (num < 975) {
        return constants.metal[3];
    } else if (num < 990) {
        return constants.metal[4];
    } else if (num < 998) {
        return constants.metal[5];
    } else {
        return constants.metal[6]
    }
}

const getBreakPoint = () => {
    let num = Math.random() * 30;
    if (num < 15) {
        return 5;
    } else if (num < 20) {
        return 4;
    } else if (num < 25) {
        return 3;
    } else if (num < 27) {
        return 2;
    } else if (num < 29) {
        return 1;
    } else {
        return 0;
    }
}

const getDisease = () => {
    let num = Math.random() * 100;
    if (num < 80) {
        return getRandomItem(constants.lightDisease);
    } else if (num < 98) {
        return getRandomItem(constants.seriousDisease);
    } else {
        return getRandomItem(constants.demonicDisease);
    }
}

function getRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}

exports.getWeather = getWeather;
exports.getGroup = getGroup;
exports.getJokes = getJokes;
exports.getWeapon = getWeapon;
exports.getBreakPoint = getBreakPoint;
exports.getDisease = getDisease;
exports.getRandomItem = getRandomItem;
exports.constants = constants;