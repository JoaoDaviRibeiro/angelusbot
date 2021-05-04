const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('AngelusBot is online!');
})


client.on('message', message =>{
 if(!message.content.startsWith(prefix) ||message.author.bot) return;

 const args = message.content.slice(prefix.length).split(" ");
 const command = args.shift().toLowerCase();


 if (command === 'paternoster'){
     client.commands.get('paternoster').execute(message, args);
 } else if (command == 'avemarialat'){
     client.commands.get('avemarialat').execute(message, args);
 } else if (command == 'avemaria'){
     client.commands.get('avemaria').execute(message, args);
 } else if (command == 'painosso'){
     client.commands.get('painosso').execute(message, args);
 } else if (command == 'salveregina'){
     client.commands.get('salveregina').execute(message, args);
 } else if (command == 'salverainha'){
     client.commands.get('salverainha').execute(message, args);
 } else if (command == 'fatima'){
     client.commands.get('fatima').execute(message, args);
 } else if (command == 'fatimalat'){
     client.commands.get('fatimalat').execute(message, args);
 }
 

})

