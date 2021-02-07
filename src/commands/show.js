// eslint-disable-next-line no-unused-vars
module.exports = async (message, args, db) => {
  // eslint-disable-next-line no-undef
  db.query('SELECT * FROM dsageld WHERE userName = ' + '"' + message.author.tag + '"', function(err, row) { //the row is the user's data
    if(row && err) {
      message.reply('Es gab einen Fehler.');
    }
    if(row.length < 1) { //if the user is not in the database
      message.reply('Es existiert kein Eintrag für dich füge ihn mit !create hinzu.');
    } else if(row.length >= 1){
      message.reply( 'du hast: ' + row[0].LeP + ' <:globe_hp:793443892367982603>, ' + row[0].AsP + '<:globe_mana:793443931572011039>, ' + row[0].Gold + ' <:2992_Terraria_GoldCoin:793443084368216075>, ' + row[0].Silber + ' <:2436_Terraria_SilverCoin:793443120951590942>, ' + row[0].Kupfer + ' <:8717_Terraria_CopperCoin:793442344178548737>, ' + row[0].Verfall + ':wilted_rose:.')
    }
  }
  );
};