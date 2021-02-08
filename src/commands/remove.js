module.exports = async (message, args, db) => {
    var n;
    let value;

    if (!isNaN(args[0]) && (args[1].toUpperCase().startsWith('G') || args[1].toUpperCase().startsWith('S')
        || args[1].toUpperCase().startsWith('K') || args[1].toUpperCase().startsWith('L') || args[1].toUpperCase().startsWith('A')
        || args[1].toUpperCase().startsWith('V'))) {
        // eslint-disable-next-line no-undef
        db.query('SELECT * FROM dsageld WHERE userName = ' + '"' + message.author.tag + '"', function (err, row) { //the row is the user's data
            if (row && err) {
                message.reply('Es gab einen Fehler.');
            }
            if (typeof (row) == 'undefined') { //if the user is not in the database
                message.reply('Es existiert kein Eintrag für dich. Füge ihn mit **$create** hinzu.');
            } else { //if the user is in the database

                if (args[1].toUpperCase().startsWith('G')) {
                    n = parseInt(row[0].Geld, 10) - parseInt(args[0], 10) * 10000;
                } else if (args[1].toUpperCase().startsWith('S')) {
                    n = parseInt(row[0].Geld, 10) - parseInt(args[0], 10) * 100;
                } else if (args[1].toUpperCase().startsWith('K')) {
                    n = parseInt(row[0].Geld, 10) - parseInt(args[0], 10);
                } else if (args[1].toUpperCase().startsWith('L')) {
                    n = parseInt(row[0].LeP, 10) - parseInt(args[0], 10);
                } else if (args[1].toUpperCase().startsWith('A')) {
                    n = parseInt(row[0].AsP, 10) - parseInt(args[0], 10);
                } else if (args[1].toUpperCase().startsWith('V')) {
                    n = parseInt(row[0].Verfall, 10) - parseInt(args[0], 10);
                }

                if (args[1].toUpperCase().startsWith('G')) {
                    value = 'Gold';
                    args[1] = 'Geld';
                } else if (args[1].toUpperCase().startsWith('S')) {
                    value = 'Silber';
                    args[1] = 'Geld';
                } else if (args[1].toUpperCase().startsWith('K')) {
                    value = 'Kupfer';
                    args[1] = 'Geld';
                } else if (args[1].toUpperCase().startsWith('L')) {
                    value = 'LeP';
                    args[1] = 'LeP';
                } else if (args[1].toUpperCase().startsWith('A')) {
                    value = 'AsP';
                    args[1] = 'AsP';
                } else if (args[1].toUpperCase().startsWith('V')) {
                    value = 'Verfall';
                    args[1] = 'Verfall';
                }

                if (n >= 0) {
                    // eslint-disable-next-line no-undef
                    db.query('UPDATE dsageld SET' + '`' + args[1] + '`' + ' = (' + n + ') WHERE userName = ' + '"' + message.author.tag + '"');
                    // eslint-disable-next-line no-undef
                    db.query('SELECT * FROM dsageld WHERE userName = ' + '"' + message.author.tag + '"', function (err, row) { //the row is the user's data
                        message.reply(args[0] + ' ' + value + ' **abgezogen**, du hast ' + row[0].LeP + ' <:globe_hp:793443892367982603>, '
                            + row[0].AsP + ' <:globe_mana:793443931572011039>, ' + parseInt(row[0].Geld / 10000) + ' <:2992_Terraria_GoldCoin:793443084368216075>, '
                            + parseInt(parseInt(row[0].Geld / 100).toString().slice(parseInt(row[0].Geld / 100).toString().length - 2)) + ' <:2436_Terraria_SilverCoin:793443120951590942>, '
                            + parseInt(row[0].Geld.toString().slice(row[0].Geld.toString().length - 2)) + ' <:8717_Terraria_CopperCoin:793442344178548737>, '
                            + row[0].Verfall + ':wilted_rose:.');
                    });
                } else if (n < 0 && !(args[1] === 'LeP')) {
                    message.reply('du hast nicht genügend ' + args[1] + '.');
                } else if (n < 0 && args[1] === 'LeP') {
                    // eslint-disable-next-line no-undef
                    db.query('UPDATE dsageld SET' + '`' + args[1] + '`' + ' = (' + n + ') WHERE userName = ' + '"' + message.author.tag + '"');
                    // eslint-disable-next-line no-undef
                    db.query('SELECT * FROM dsageld WHERE userName = ' + '"' + message.author.tag + '"', function (err, row) { //the row is the user's data
                        message.reply('Deine LeP sind unter Null: ' + n + '  :skull_crossbones:');
                    });
                }
            }
        });
    } else {
        message.reply(' dafür existiert kein Datenbankeintrag. Gültige Eingaben sind LeP, Asp, Gold, Silber, Kupfer und Verfall.')
    }
};