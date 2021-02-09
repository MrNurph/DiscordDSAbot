const randomizer = require('./config/randomizer');

module.exports = async (message, args, db) => {

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
        message.channel.send(item);
    } else if (args[0].toUpperCase().startsWith('N')) {
        getNames();
    } else {
        message.channel.send('Es existiert keine Zufallsliste für diesen Wert. Gib **$help** für eine Liste gültiger Eingaben ein.')
    }


    function getNames() {
        let culture;
        if (typeof args[1] !== 'undefined') {

            if (args[1].toUpperCase().startsWith('G')) {
                culture = 'Gareth';
            } else if (args[1].toUpperCase().startsWith('H')) {
                culture = 'Horas';
            } else if (args[1].toUpperCase().startsWith('A')) {
                culture = 'Albernia';
            } else if (args[1].toUpperCase().startsWith('W')) {
                culture = 'Weiden';
            } else if (args[1].toUpperCase().startsWith('T')) {
                culture = 'Tulamidisch';
            } else if (args[1].toUpperCase().startsWith('B')) {
                culture = 'Bornland';
            } else {
                message.channel.send('Es gibt keine Kultur mit diesem Namen. Gib **$help** ein für eine Liste gültiger Eingaben.')
            }
        }
        let gender;
        if (typeof args[2] !== 'undefined') {
            if (args[2].toUpperCase().startsWith('M')) {
                gender = 'firstNameMale';
            } else if (args[2].toUpperCase().startsWith('W')) {
                gender = 'firstNameFemale';
            } else {
                message.channel.send('Es gibt kein Gender mit diesem Namen. Gib **$help** ein für eine Liste gültiger Eingaben.')
            }
        }
        if (culture !== undefined && gender !== undefined) {
            db.query('SELECT * FROM names WHERE culture = ' + '"' + culture + '"', function (err, row) {
                if (row && err) {
                    message.reply('Es gab einen Fehler.');
                } else {
                    if (gender === 'firstNameMale') {
                        firstNames = row[0].firstNameMale.split(', ');
                        lastNames = row[0].lastName.split(', ');
                        message.channel.send(getRandomItem(firstNames) + ' ' + getRandomItem(lastNames));
                    } else {
                        firstNames = row[0].firstNameFemale.split(', ');
                        lastNames = row[0].lastName.split(', ');
                        message.channel.send(getRandomItem(firstNames) + ' ' + getRandomItem(lastNames));
                    }
                }
            })
        } else if (culture !== undefined) {
            db.query('SELECT * FROM names WHERE culture = ' + '"' + culture + '"', function (err, row) {
                if (row && err) {
                    message.reply('Es gab einen Fehler.');
                } else {
                    firstNames = row[0].firstNameMale.split(', ').concat(row[0].firstNameFemale.split(', '));
                    lastNames = row[0].lastName.split(', ');
                    message.channel.send(getRandomItem(firstNames) + ' ' + getRandomItem(lastNames));
                }
            })
        } else {
            message.channel.send('Der Befehl ist zu unspezifisch. Gib **$help** ein für eine Liste gültiger Eingaben.');
        }
    }
}

function getRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}

