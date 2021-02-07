const create = require('./create');
const add = require('./add');
const remove = require('./remove');
const show = require('./show');
const help = require('./help');
const mysql = require('mysql');
require('dotenv').config();
const prefix = '$';
const prefix2 = '§';

const commands = {
  create,
  add,
  remove,
  show,
  help
};

var db = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : '',
  database : 'DSA'
});

db.connect((err) => {
  if(err){
    throw err;
  }
  console.log('MySql connected...');
});

module.exports = async (message) =>{
  //command manager
  if(message.content.startsWith(prefix2)) {
    message.content = '$' + message.content.substring(1);
  }
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();

  if(Object.keys(commands).includes(command)) {
    commands[command](message, args, db);
  } else {
    message.channel.send('Unbekannter Befehl. Gib **$help** für eine Liste gültiger Eingaben ein.')
  }
  
};
