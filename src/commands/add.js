module.exports = async (message, args, db) => {
  var n;

  if(!isNaN(args[0]) && (args[1] === 'Gold' || args[1] === 'Silber' || args[1] === 'Kupfer' || args[1] === 'LeP' || args[1] === 'AsP')) {
    // eslint-disable-next-line no-undef
    db.query('SELECT * FROM dsageld WHERE userName = ' + '"' + message.author.tag + '"', function(err, row) { //the row is the user's data
      if(row && err) {
        message.reply('Es gab einen Fehler.');
      }
      if(typeof(row) == 'undefined') { //if the user is not in the database
        message.reply('Es existiert kein Eintrag für dich füge ihn mit !create hinzu.');
      } else { //if the user is in the database
        if(args[1] === 'Gold') {
          n = parseInt(row[0].Gold, 10) + parseInt(args[0], 10);
        } else if(args[1] === 'Silber') {
          n = parseInt(row[0].Silber, 10) + parseInt(args[0], 10);
        } else if(args[1] === 'Kupfer') {
          n = parseInt(row[0].Kupfer, 10) + parseInt(args[0], 10);
        } else if(args[1] === 'LeP') {
          n = parseInt(row[0].LeP, 10) + parseInt(args[0], 10);
        } else if(args[1] === 'AsP') {
          n = parseInt(row[0].AsP, 10) + parseInt(args[0], 10);
        }
        // eslint-disable-next-line no-undef    
        db.query('UPDATE dsageld SET' + '`' + args[1] + '`' + ' = (' + n + ') WHERE userName = ' + '"' + message.author.tag + '"');
        // eslint-disable-next-line no-undef
        db.query('SELECT * FROM dsageld WHERE userName = ' + '"' + message.author.tag + '"', function(err, row) { //the row is the user's data
          message.reply(args[0] + ' ' + args[1] + ' **hinzugefügt**, du hast ' + row[0].LeP + ' <:globe_hp:793443892367982603>, ' + row[0].AsP + '<:globe_mana:793443931572011039>, ' + row[0].Gold + ' <:2992_Terraria_GoldCoin:793443084368216075>, ' + row[0].Silber + ' <:2436_Terraria_SilverCoin:793443120951590942>, ' + row[0].Kupfer + ' <:8717_Terraria_CopperCoin:793442344178548737>.');
        });
      }
    });
  }
};