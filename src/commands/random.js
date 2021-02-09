const randomizer = require('./config/randomizer');

module.exports = async (message, args) => {

    if (args[0].toUpperCase().startsWith('WE')) {
        let item = randomizer.getWeather();
        message.channel.send(item);
    } else if (args[0].toUpperCase().startsWith('C')) {
        let item = randomizer.getGroup();
        message.channel.send(item);
    } else if (args[0].toUpperCase().startsWith('WA')) {
        let item = randomizer.getWeapon();
        let bf = randomizer.getBreakPoint();
        message.channel.send('Das Material der Waffe ist **' + item + '**. Der Bruchfaktor beträgt ' + bf + '.');
    } else if (args[0].toUpperCase().startsWith('K')) {
        let item = randomizer.getDisease();
        message.channel.send('Du bist an **' + item + '** erkrankt.');
    } else if (args[0].toUpperCase().startsWith('WI')) {
        let item = randomizer.getJokes();
        message.channel.send(item + ' :rofl:');
    } else if (args[0].toUpperCase().startsWith('N')) {
        if (typeof args[1] !== 'undefined' && args[1].toUpperCase().startsWith('M')) {
            if (args[2].toUpperCase().startsWith('M')) {
                message.channel.send(randomizer.getRandomItem(randomizer.constants.maleFirstNamesMR) + ' ' + randomizer.getRandomItem(randomizer.constants.familyNamesMR));
            } else if (args[2].toUpperCase().startsWith('W')) {
                message.channel.send(randomizer.getRandomItem(randomizer.constants.femaleFirstNamesMR) + ' ' + randomizer.getRandomItem(randomizer.constants.familyNamesMR));
            }
        } else if (typeof args[1] !== 'undefined'&& args[1].toUpperCase().startsWith('H')) {
            if (args[2].toUpperCase().startsWith('M')) {
                message.channel.send(randomizer.getRandomItem(randomizer.constants.maleFirstNamesHR) + ' ' + randomizer.getRandomItem(randomizer.constants.familyNamesHR));
            } else if (args[2].toUpperCase().startsWith('W')) {
                message.channel.send(randomizer.getRandomItem(randomizer.constants.femaleFirstNamesHR) + ' ' + randomizer.getRandomItem(randomizer.constants.familyNamesHR));
            }
            message.channel.send(item + ' :rofl:');
        } else {
            const firstnames = randomizer.constants.maleFirstNamesMR.concat(randomizer.constants.maleFirstNamesHR).concat(randomizer.constants.femaleFirstNamesHR).concat(randomizer.constants.femaleFirstNamesMR);
            const familynames = randomizer.constants.familyNamesHR.concat(randomizer.constants.familyNamesMR);
            message.channel.send(randomizer.getRandomItem(firstnames) + ' ' + randomizer.getRandomItem(familynames));
        }
    } else {
        message.channel.send('Es existiert keine Zufallsliste für diesen Wert. Gib **$help** für eine Liste gültiger Eingaben ein.')
    }
}