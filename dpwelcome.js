

const Discord = require('discord.js');
const config = require('./config.json');
const token = config.token;
const client = new Discord.Client();



let statusess = [`at DarkPoetry.org`,`poetry`,`a warm welcome.`];

client.on('ready', () => 
{
    setInterval(() => {
        const index = Math.floor(Math.random() * (statusess.length - 1) + 1); // generates a random number between 1 and the length of the activities array list.
        client.user.setActivity(statusess[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 20000); // Runs this every 10 seconds = 10000.
    console.log(`Now Logged in as ${client.user.tag}!`);
    console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
});


client.on("guildMemberAdd", (member) => 
{
    let guild = member.guild; // finds the guild (ID)
    const role = guild.roles.cache.find(role => role.name === 'newjoin');
    const memberDisplayName = member.displayName;
    member.roles.add(role) .catch(error => guild.systemChannel.send(`Sorry, an error occured. on new member join. Please notify <!${config.ownerID}`));
    console.log(`Welcomed ${memberDisplayName} to ${guildname}`)
});



client.login(token);