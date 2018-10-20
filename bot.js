1.const Discord = require('discord.js');
2.const client = new Discord.Client();
3. 
4.client.on('ready', () => {
5.  console.log(`Logged in as ${client.user.tag}!`);
6.client.user.setGame(` اكتب اي شي هنا  `,"http://twitch.tv/S-F")
7.  console.log('')
8.  console.log('')
9.  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
10.  console.log(`[Start] ${new Date()}`);
11.  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
12.  console.log('')
13.  console.log('╔[════════════════════════════════════]╗');
14.  console.log(`Logged in as * [ " ${client.user.username} " ]`);
15.  console.log('')
16.  console.log('Informations :')
17.  console.log('')
18.  console.log(`servers! [ " ${client.guilds.size} " ]`);
19.  console.log(`Users! [ " ${client.users.size} " ]`);
20.  console.log(`channels! [ " ${client.channels.size} " ]`);
21.  console.log('╚[════════════════════════════════════]╝')
22.  console.log('')
23.  console.log('╔[════════════]╗')
24.  console.log(' Bot Is Online ')
25.  console.log('╚[════════════]╝')
26.  console.log('')
27.  console.log('')
28.});
29. 
30. 
client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith('^bc')) {
    if(!message.channel.guild) return message.channel.send('هذا الأمر فقط للسيرفرات').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('للأسف لا تمتلك صلاحية ADMINISTRATOR' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "SkelBot";
    let request = Requested By ${message.author.username};
    if (!args) return message.reply('يجب عليك كتابة كلمة او جملة لأرسال البرودكاست');message.channel.send(**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \ ${args}`).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
 
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(:ballot_box_with_check: |   ${message.guild.members.size} يتم أرسال البرودكاست الى عضو ).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('البرودكاست') .addField('السيرفر', message.guild.name) .addField('المرسل', message.author.username)
       .addField('الرساله', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(تم الغاء البرودكاست`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    })
71. 
72. 
73. 
74.client.login(process.env.BOT_TOKEN);
