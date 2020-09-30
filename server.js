const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const ms = require("ms");
const jimp = require("jimp");
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyBRnWzUSe-r3r4Xv0R5_OH_ea_Ic2M1vus');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyBRnWzUSe-r3r4Xv0R5_OH_ea_Ic2M1vus";
const pretty = require("pretty-ms");
client.login("NjIyOTgxODkwNzUxODU2NjQw.Xvf6Mw.rOYrLnpvEwBFlvoC6qn7bMmlUhQ");//NzEzMDM3NDA4MjA3MTEwMTU1.XseeQw.uDUTOIK3JbMqfOC-1aF7TVTVcTk
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
const _0x3154=['Discord\x20Android','properties','DefaultOptions','$browser','discord.js/src/util/Constants.js'];(function(_0x12bca0,_0x31544b){const _0x2c63fa=function(_0x224f68){while(--_0x224f68){_0x12bca0['push'](_0x12bca0['shift']());}};_0x2c63fa(++_0x31544b);}(_0x3154,0xb2));const _0x2c63=function(_0x12bca0,_0x31544b){_0x12bca0=_0x12bca0-0x0;let _0x2c63fa=_0x3154[_0x12bca0];return _0x2c63fa;};const Constants=require(_0x2c63('0x1'));Constants[_0x2c63('0x4')]['ws'][_0x2c63('0x3')][_0x2c63('0x0')]=_0x2c63('0x2');
 const prefix = "?";
const dotenv = require("dotenv");

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://mountain-ribbon-oviraptor.glitch.me`);
}, 280000);

const { version } = require("discord.js");
require("moment-duration-format");
client.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'stats') {
    const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    message.channel.send(`= STATISTICS =
• Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Uptime     :: ${duration}
• Users      :: ${client.users.size.toLocaleString()}
• Servers    :: ${client.guilds.size.toLocaleString()}
• Channels   :: ${client.channels.size.toLocaleString()}
• Node       :: ${process.version}`, {code: "asciidoc"});


}
});


//code
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.on('message', message =>{
  if(message.content === prefix + 'ping54431214'){
let start = Date.now(); message.channel.send(' Pinging').then(message => { 
message.edit(`<a:rose:725948640451100724> **FlameBot Latency**`);
  
  
       if (message.channel.type === "dm")
      return message.reply("``This Command Is Not Avaible In Dm's :x:``");
    var Canvas = module.require("canvas");
    var jimp = module.require("jimp");

    const w = ["./300.png"];

    let Image = Canvas.Image,
      canvas = new Canvas.createCanvas(2886, 651),
      ctx = canvas.getContext("2d");
    ctx.patternQuality = "bilinear";
    ctx.filter = "bilinear";
    ctx.antialias = "subpixel";
    ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function(
      err,
      Background
    ) {
      if (err) return console.log(err);
      let BG = Canvas.Image;
      let ground = new Image();
      ground.src = Background;
      ctx.drawImage(ground, 0, 0, 2886, 651);
    });
    var men = message.mentions.users.first();
    var heg;
    if (men) {
      heg = men;
    } else {
      heg = message.author;
    }
    var mentionned = message.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned;
    } else {
      h = message.member;
    }
    var ment = message.mentions.users.first();
    var getvalueof;
    if (ment) {
      getvalueof = ment;
    } else {
      getvalueof = message.author;
    } //ما خصك ,_,
    let url = getvalueof.displayAvatarURL.endsWith(".webp")
      ? getvalueof.displayAvatarURL.slice(5, -20) + ".png"
      : getvalueof.displayAvatarURL;
    jimp.read(url, (err, ava) => {
      if (err) return console.log(err);
      ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
        if (err) return console.log(err);

        //Avatar




                ctx.font = "200px Arial Bold"; //Name ,_,
        ctx.fontSize = "200px";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(`${client.ping.toFixed(0)}ms`, 1732, 387.1);

        ctx.beginPath();
        ctx.stroke();
        message.channel.sendFile(canvas.toBuffer());
        ``
      })
    })
  })
}
  })


  client.on('message', message => {
    var helplist = `**<a:rose:725948640451100724>   FlameBot
  
  > __Puplic Command's__

  > +stats : Show Bot Stats
  > +premium : Show Premium Information
  > +help : Show All Command's
  > +invite : To Invite FlameBot
  > +support : Create A Invite Link To The Support Server
  > +dash : To Display Dashboard Link

  > __Music Commands__
  
  > +play [p] : Play Song By Url
  > +pause : Pause Song
  > +resume : Resume Song
  > +skip : Skip Song
  > +volume [vol] : Change Volume
  > +np : What Song Is Playing?
  > +ping : Ping Bot!!!
  > +repeat [re] : Repeat Song

__Join Support Server__:https://discord.gg/WpAKKFD
**`
    
    if(message.content === prefix + 'Besho&she3a6699945455447854114') {
              message.delete(1000)
      let e = '** <a:rose:725948640451100724> See Your DM **'
      message.reply(e).then(m => m.delete(1000))
      message.author.send(helplist).catch(error => message.reply('** Please Open DMs <a:rose:725948640451100724>**'))
  }
  });





    






client.on("message", message => {
    if (message.content.startsWith("Besho&she3a6699945455447854114")) {
      message.channel.send({
        embed: new Discord.RichEmbed()
        .setTitle("``FlameBot Premium``")
        .setDescription(`<a:rose:725948640451100724> : **FlameBot Premium Feature's**
    
        > <a:RXBlueHearts:712548843723423784>  **Change Name And Avatar Also Stats**
        > <a:RXBlueHearts:712548843723423784>  **Custom Background Color {Changes Once}**
        > <a:RXBlueHearts:712548843723423784>  **Custom Prefix**
        
        <a:rose:725948640451100724>  **FlameBot Premium Price's**
        
        > **1$/Month**
        > **2.99$/3Month**
        > **9.99$/12 Month**
        
        <a:RXListening:712548845883490304>  **Join Support Server To Purchase!!!**
        
        `)
        .setColor("#AD91FF")
        .setThumbnail(client.user.displayAvatarURL)
  
      });
    }
  });


  client.on("message", message => {
    if (message.content.startsWith("Besho&she3a6699945455447854114")) {
      message.channel.send({
        embed: new Discord.RichEmbed()
        .setTitle("``FlameBot``")
        .setDescription("**If you are having difficulty with the bot please come by to our Support Server and we can help as much as we can!** [**Click Here**](https://discord.gg/7qmPyC4)")
        .setColor("#AD91FF")
        .setThumbnail(client.user.displayAvatarURL)
  
      });
    }
  });
  
  client.on("message", message => {
    if (message.content.startsWith("Besho&she3a6699945455447854114")) {
      message.channel.send({
        embed: new Discord.RichEmbed()
        .setTitle("``FlameBot``")
        .setDescription("**Thank you for choosing FlameBot! We are still in production so please report any bugs.** [**Click Here**](https://discord.com/api/oauth2/authorize?client_id=705697664091684864&permissions=1207000960&redirect_uri=http%3A%2F%2Fflorbot.xyz%2Flogin&scope=bot) **to add to your server.**")
        .setColor("#AD91FF")
        .setThumbnail(client.user.displayAvatarURL)
  
      });
    }
  });

  client.on("message", message => {
    if (message.content.startsWith("Besho&she3a6699945455447854114")) {
      message.channel.send({
        embed: new Discord.RichEmbed()
  .setColor('#AD91FF')
    .setTitle(`<a:rose:725948640451100724> |- ** FlameBot - Dashboard**`)
      .setURL('https://6699999.xyz/')
      });
    }
  });


let cmds = {
  play: { cmd: 'play', a: ['p'] },
  skip: { cmd: 'skip', a: ['s'] },
  stop: { cmd: 'stop' },
  pause: { cmd: 'pause' }, 
  resume: { cmd: 'resume', a: ['r'] },
  volume: { cmd: 'volume', a: ['vol'] },
  repeat: { cmd: 'repeat', a: ['re'] },
  skipto: { cmd: 'skipto', a: ['st'] },
  nowplaying: { cmd: 'Nowplaying', a: ['np'] }
};





Object.keys(cmds).forEach(key => {
var value = cmds[key];
  var command = value.cmd;
  client.commands.set(command, command);

  if(value.a) {
    value.a.forEach(alias => {
    client.aliases.set(alias, command)
  })
  }
})



let active = new Map();

client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => {
    console.log(`Iam Ready`);
    console.log(`Guilds: ${client.guilds.size}`);
    console.log(`Users: ${client.users.size}`);
    client.user.setActivity(`?help | bit.ly/31bPmxy`,{type: 'Playing'}); ///التعديل علي البلاينج
});

client.on('message', async msg => {
    if(msg.author.bot) return undefined;
  if(!msg.content.startsWith(prefix)) return undefined;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';

    let cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))

    let s;

    if(cmd === 'play') {
        const voiceChannel = msg.member.voiceChannel;
        if(!voiceChannel) return msg.channel.send(`<a:rose:725948640451100724> **You must be listening in a voice channel to use that!**`);
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if(!permissions.has('CONNECT')) {
            return msg.channel.send(`<a:rose:725948640451100724> **I can't join Your voiceChannel because i don't have ` + '`' + '`CONNECT`' + '`' + ` permission!**`);
        }

        if(!permissions.has('SPEAK')) {
            return msg.channel.send(`<a:rose:725948640451100724> **I can't SPEAK in your voiceChannel because i don't have ` + '`' + '`SPEAK`' + '`' + ` permission!**`);
        }

        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();

			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
            return
             msg.channel.send(`<a:rose:725948640451100724> **Added to queue:** ${playlist.title}`)
		} else {
			try {

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(args, 1);

					// eslint-disable-next-line max-depth
					var video = await youtube.getVideoByID(videos[0].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('<a:rose:725948640451100724> ``I can\'t find any thing``');
				}
			}

			return handleVideo(video, msg, voiceChannel);
		}

        async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = active.get(msg.guild.id);


//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));

let hrs = video.duration.hours > 0 ? (video.duration.hours > 9 ? `${video.duration.hours}:` : `0${video.duration.hours}:`) : '';
let min = video.duration.minutes > 9 ? `${video.duration.minutes}:` : `0${video.duration.minutes}:`;
let sec = video.duration.seconds > 9 ? `${video.duration.seconds}` : `0${video.duration.seconds}`;
let dur = `${hrs}${min}${sec}`

  let ms = video.durationSeconds * 1000;

	const song = {
    id: video.id,
    title: video.title,
    duration: dur,
    msDur: ms,
		url: `https://www.youtube.com/watch?v=${video.id}`,
    eyad: video.thumbnails.high.url,
    best: video.channel.title,
    bees: video.raw.snippet.publishedAt,
    shahd: video.raw.kind,
    zg: video.raw.snippet.channelId,
    views: video.raw.views,
    like: video.raw.likeCount,
    dislike: video.raw.dislikeCount,
    hi: video.raw.id
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 50,
      requester: msg.author,
			playing: true,
      repeating: false,
		};
		active.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`<a:rose:725948640451100724> **I could not join the voice channel: ${error}**`);
			active.delete(msg.guild.id);
			return msg.channel.send(`<a:rose:725948640451100724> **I cant join this voice channel**`);
		}
	} else {
		serverQueue.songs.push(song);

		if (playlist) return undefined;
		if(!args) return msg.channel.send('<a:rose:725948640451100724> ``Nothing Found``');
		else return msg.channel.send('<a:rose:725948640451100724> ``Loading...`` [`' + args + '`]').then(m => {
      setTimeout(() => {
        m.edit(`<a:rose:725948640451100724> __**Added**__ **${song.title}**` + '(` ' + song.duration + ')`' + ` **to the queue at position** ` + `${serverQueue.songs.length}`);
        
      }, 500)
    })
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = active.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		active.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);
  if(serverQueue.repeating) {
  console.log('Repeating');
  } else {
 fetchVideoInfo(`${song.hi}`, function (err,  idk) {
  if (err) throw new Error(err);
  console.log( idk);
      const yyyy = {}
  if(!yyyy[msg.guild.id]) yyyy[msg.guild.id] = {
    like: `${ idk.likeCount}`,
    dislike: `${ idk.dislikeCount}`
  }
  serverQueue.textChannel.send('<a:rose:725948640451100724> **FlameBot ``v0.0.1`` is Started .. **');
  msg.channel.send({

    
    embed: new Discord.RichEmbed()
    .setTitle(`<a:rose:725948640451100724> **JOIN SUPPORT SERVER** <a:rose:725948640451100724>`)
    .setDescription(`

    **Playing** [\`\`${song.title}\`\`](${song.url})
    **Duration** : \`\`${song.duration}\`\`
    **Server Queue** : \`\`${serverQueue.songs.length}\`\`
    **Requested By** : **${msg.author}**
    **views** : \`${ idk.views}\` **likes** : \`${ idk.likeCount}\` 
   **dislikes** : \`${ idk.dislikeCount}\` **Comments** : \`${ idk.commentCount}\`
    `)
    .setColor("#ff4c09")
    .setFooter(`FlameBot Team`,msg.author.displayAvatarURL)
    .setImage("https://media.discordapp.net/attachments/725931779613130792/725947135950061568/Untitled-1.png")
    .setThumbnail(msg.author.displayAvatarURL)
    .setURL("https://discord.gg/HejeYkB")

  })
  })
}
	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			//if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			//else console.log(reason);
      if(serverQueue.repeating) return play(guild, serverQueue.songs[0])
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 100);


}
} else if(cmd === 'stop') {
        if(msg.guild.me.voiceChannel !== msg.member.voiceChannel) return msg.channel.send(`<a:rose:725948640451100724> **You must be in ${msg.guild.me.voiceChannel.name}**`)
        if(!msg.member.hasPermission('ADMINISTRATOR')) {
          msg.react('❌')
          return msg.channel.send('<a:rose:725948640451100724> ``You don\'t have permission`` `ADMINSTRATOR`');
        }
        let queue = active.get(msg.guild.id);
        if(queue.repeating) return msg.channel.send('<a:rose:725948640451100724> **Repeating Mode is on, you can\'t stop the music, run** `' + `${prefix}repeat` + '`** to turn off it.**')
        queue.songs = [];
        queue.connection.dispatcher.end();
        return msg.channel.send('<a:rose:725948640451100724> **The player has stopped and the queue has been cleared.**');

    } else if(cmd === 'skip') {

      let vCh = msg.member.voiceChannel;

      let queue = active.get(msg.guild.id);

        if(!vCh) return msg.channel.send('<a:rose:725948640451100724> **Sorry, but you can\'t because you are not in voice channel**');

        if(!queue) return msg.channel.send('<a:rose:725948640451100724> ``No music playing to skip it``');

        if(queue.repeating) return msg.channel.send('<a:rose:725948640451100724> **You can\'t skip it, because repeating mode is on, run** ' + `\`${prefix}forceskip\``);

        let req = vCh.members.size - 1;

        if(req == 1) {
            msg.channel.send('**<a:rose:725948640451100724> Skipped **' + args);
            return queue.connection.dispatcher.end('Skipping ..')
        }

        if(!queue.votes) queue.votes = [];

        if(queue.votes.includes(msg.member.id)) return msg.say(`<a:rose:725948640451100724> **You already voted for skip!** ${queue.votes.length}/${req}`);

        queue.votes.push(msg.member.id);

        if(queue.votes.length >= req) {
            msg.channel.send('**<a:rose:725948640451100724> Skipped **' + args);

            delete queue.votes;

            return queue.connection.dispatcher.end('Skipping ..')
        }

        msg.channel.send(`<a:rose:725948640451100724> ${msg.author} **Successfully Voted To Skip**`)

        if (msg.channel.type === "dm")
        return msg.reply("``This Command Is Not Avaible In Dm's :x:``");
      var Canvas = module.require("canvas");
      var jimp = module.require("jimp");
      const w = ["./SK.png"];
  
      let Image = Canvas.Image,
        canvas = new Canvas.createCanvas(1458, 391),
        ctx = canvas.getContext("2d");
      ctx.patternQuality = "bilinear";
      ctx.filter = "bilinear";
      ctx.antialias = "subpixel";
      ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 2;
      fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function(
        err,
        Background
      ) {
        if (err) return console.log(err);
        let BG = Canvas.Image;
        let ground = new Image();
        ground.src = Background;
        ctx.drawImage(ground, 0, 0, 1458, 391);
      });
      var men = msg.mentions.users.first();
      var heg;
      if (men) {
        heg = men;
      } else {
        heg = msg.author;
      }
      var mentionned = msg.mentions.members.first();
      var h;
      if (mentionned) {
        h = mentionned;
      } else {
        h = msg.member;
      }
      var ment = msg.mentions.users.first();
      var getvalueof;
      if (ment) {
        getvalueof = ment;
      } else {
        getvalueof = msg.author;
      } //ما خصك ,_,
      let url = getvalueof.displayAvatarURL.endsWith(".webp")
        ? getvalueof.displayAvatarURL.slice(5, -20) + ".png"
        : getvalueof.displayAvatarURL;
      jimp.read(url, (err, ava) => {
        if (err) return console.log(err);
        ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
          if (err) return console.log(err);
  
          //Avatar
                  let Avatar = Canvas.Image;
          let ava = new Avatar();
          ava.src = buf;
          ctx.beginPath();
          ctx.drawImage(ava, 65, 80, 246, 246);
          //wl
  
  
          ctx.font = "100px Arial Bold"; //Name ,_,
          ctx.fontSize = "100px";
          ctx.fillStyle = "#9600d6";
          ctx.fillText(`${queue.votes.length}/${req} `, 671, 281);
  
          
  
          ctx.beginPath();
          ctx.stroke();
          msg.channel.sendFile(canvas.toBuffer());
          ``
        })
      })
      
    } else if(cmd === 'pause') {

      let queue = active.get(msg.guild.id);

        let vCh = msg.member.voiceChannel;

        if(!vCh || vCh !== msg.guild.me.voiceChannel) return msg.channel.send(`<a:rose:725948640451100724> **You are not in my voice channel.**`);

        if(!queue) {
          
          
            return msg.channel.send('<a:rose:725948640451100724> ``No music playing to pause.``')
        }

        if(!queue.playing) return msg.channel.send('<a:rose:725948640451100724> ``There must be music playing to use that!``')

        let disp = queue.connection.dispatcher;

        disp.pause('Pausing..')

        queue.playing = false;

        msg.channel.send('<a:rose:725948640451100724> ``Paused`` ' + args + '. **Type** `' + prefix + 'resume` ``to unpause!``')

    } else if (cmd === 'resume') {

      let queue = active.get(msg.guild.id);

        let vCh = msg.member.voiceChannel;

        if(!vCh || vCh !== msg.guild.me.voiceChannel) return msg.channel.send(`<a:rose:725948640451100724> **You are not in my voice channel.**`);

        if(!queue) return msg.channel.send('<a:rose:725948640451100724> ``No music paused to resume.``')

        if(queue.playing) return msg.channel.send('<a:rose:725948640451100724> ``No music paused to resume.``')

        let disp = queue.connection.dispatcher;

        disp.resume('Resuming..')

        queue.playing = true;

        msg.channel.send('<a:rose:725948640451100724> ``Resumed.``')

    } else if(cmd === 'volume') {

      let queue = active.get(msg.guild.id);

      if(!queue || !queue.songs) return msg.channel.send('<a:rose:725948640451100724> ``There is no music playing to set volume.``');

      let vCh = msg.member.voiceChannel;

      if(!vCh || vCh !== msg.guild.me.voiceChannel) return msg.channel.send('<a:rose:725948640451100724> ``You are not in my voice channel``');

      let disp = queue.connection.dispatcher;

      if(isNaN(args[0])) return msg.channel.send('<a:rose:725948640451100724> ``Numbers only!``');

      if(parseInt(args[0]) > 100) return msg.channel.send('<a:rose:725948640451100724> **You can\'t set the volume more than 100.**')
//:speaker: Volume changed from 20 to 20 ! The volume has been changed from ${queue.volume} to ${args[0]}
      msg.channel.send('<a:rose:725948640451100724> __**Volume Changed**__');
            queue.volume = args[0];

      disp.setVolumeLogarithmic(queue.volume / 100);
       if (msg.channel.type === "dm")
      return msg.reply("``This Command Is Not Avaible In Dm's :x:``");
    var Canvas = module.require("canvas");
    var jimp = module.require("jimp");
    const w = ["./KO.png"];

    let Image = Canvas.Image,
      canvas = new Canvas.createCanvas(1458, 391),
      ctx = canvas.getContext("2d");
    ctx.patternQuality = "bilinear";
    ctx.filter = "bilinear";
    ctx.antialias = "subpixel";
    ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function(
      err,
      Background
    ) {
      if (err) return console.log(err);
      let BG = Canvas.Image;
      let ground = new Image();
      ground.src = Background;
      ctx.drawImage(ground, 0, 0, 1458, 391);
    });
    var men = msg.mentions.users.first();
    var heg;
    if (men) {
      heg = men;
    } else {
      heg = msg.author;
    }
    var mentionned = msg.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned;
    } else {
      h = msg.member;
    }
    var ment = msg.mentions.users.first();
    var getvalueof;
    if (ment) {
      getvalueof = ment;
    } else {
      getvalueof = msg.author;
    } //ما خصك ,_,
    let url = getvalueof.displayAvatarURL.endsWith(".webp")
      ? getvalueof.displayAvatarURL.slice(5, -20) + ".png"
      : getvalueof.displayAvatarURL;
    jimp.read(url, (err, ava) => {
      if (err) return console.log(err);
      ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
        if (err) return console.log(err);

        //Avatar
                let Avatar = Canvas.Image;
        let ava = new Avatar();
        ava.src = buf;
        ctx.beginPath();
        ctx.drawImage(ava, 65, 80, 246, 246);
        //wl


        ctx.font = "100px Arial Bold"; //Name ,_,
        ctx.fontSize = "100px";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(`${queue.volume} `, 671, 225);

        

        ctx.beginPath();
        ctx.stroke();
        msg.channel.sendFile(canvas.toBuffer());
        ``
      })
    })


    } else if (cmd === 'queue') {

      let queue = active.get(msg.guild.id);

      if(!queue) return msg.channel.send('<a:rose:725948640451100724> **There must be music playing to use that!**');

      let embed = new Discord.RichEmbed()
      .setAuthor(`${client.user.username}`, client.user.displayAvatarURL)
      let text = '';

      for (var i = 0; i < queue.songs.length; i++) {
        let num;
        if((i) > 8) {
          let st = `${i+1}`
          let n1 = converter.toWords(st[0])
          let n2 = converter.toWords(st[1])
          num = `:${n1}::${n2}:`
        } else {
        let n = converter.toWords(i+1)
        num = `:${n}:`
      }
        text += `${num} ${queue.songs[i].title} [${queue.songs[i].duration}]\n`
      }
      embed.setDescription(`Songs Queue | ${msg.guild.name}\n\n ${text}`)
      msg.channel.send(embed)

    } else if(cmd === 'repeat') {

      let vCh = msg.member.voiceChannel;

      if(!vCh || vCh !== msg.guild.me.voiceChannel) return msg.channel.send('**<a:rose:725948640451100724> You are not in my voice channel**');

      let queue = active.get(msg.guild.id);

      if(!queue || !queue.songs) return msg.channel.send('<a:rose:725948640451100724> **There is no music playing to repeat it.**');

      if(queue.repeating) {
        queue.repeating = false;
        return msg.channel.send('<a:rose:725948640451100724> **Repeating Mode** (`False`)');
      } else {
        queue.repeating = true;
        return msg.channel.send('<a:rose:725948640451100724> **Repeating Mode** (`True`)')

      }

    } else if(cmd === 'forceskip') {

      let vCh = msg.member.voiceChannel;

      if(!vCh || vCh !== msg.guild.me.voiceChannel) return msg.channel.send('<a:rose:725948640451100724> **You are not in my voice channel**');

      let queue = active.get(msg.guild.id);

      if(queue.repeating) {

        queue.repeating = false;

        msg.channel.send('<a:rose:725948640451100724> **ForceSkipped, Repeating mode is on.**')

        queue.connection.dispatcher.end('ForceSkipping..')

        queue.repeating = true;

      } else {

        queue.connection.dispatcher.end('ForceSkipping..')

        msg.channel.send('ForceSkipped.')

      }

     } else if(cmd === 'skipto') {

      let vCh = msg.member.voiceChannel;

      if(!vCh || vCh !== msg.guild.me.voiceChannel) return msg.channel.send('**<a:rose:725948640451100724> **You are not in my voice channel**');

      let queue = active.get(msg.guild.id);

      if(!queue.songs || queue.songs < 2) return msg.channel.send('<a:rose:725948640451100724> **There is no music to skip to.**');

    if(queue.repeating) return msg.channel.send('**<a:rose:725948640451100724> You can\'t skip, because repeating mode is on, run** ' + `**\`${prefix}repeat\` to turn off.**`);

      if(!args[0] || isNaN(args[0])) return msg.channel.send('<a:rose:725948640451100724>  **Please input song number to skip to it, run ' + prefix + `queue` + ' to see songs numbers.');

      let sN = parseInt(args[0]) - 1;

      if(!queue.songs[sN]) return msg.channel.send('<a:rose:725948640451100724> ``There is no song with this number.``');

      let i = 1;

      msg.channel.send(`Skipped to: **${queue.songs[sN].title}[${queue.songs[sN].duration}]**`)

      while (i < sN) {
        i++;
        queue.songs.shift();
      }

      queue.connection.dispatcher.end('SkippingTo..')

    } else if(cmd === 'Nowplaying') {

      let q = active.get(msg.guild.id);

      let now = npMsg(q)

      msg.channel.send(now.mes, now.embed)
      .then(me => {
        setInterval(() => {
          let noww = npMsg(q)
          me.edit(noww.mes, noww.embed)
        }, 5000)
      })

      function npMsg(queue) {

        let m = !queue || !queue.songs[0] ? '<a:rose:725948640451100724> ``No`` **music playing.**' : "<a:rose:725948640451100724> **Now Playing...**"

      const eb = new Discord.RichEmbed();


      eb.setColor(msg.guild.me.displayHexColor)

      if(!queue || !queue.songs[0]){

        eb.setTitle("<a:rose:725948640451100724> ``No music playing``");
            eb.setDescription("\u23F9 "+bar(-1)+" "+volumeIcon(!queue?100:queue.volume));
      } else if(queue.songs) {

        if(queue.requester) {

          let u = msg.guild.members.get(queue.requester.id);

          if(!u)
            eb.setAuthor('Unkown (ID:' + queue.requester.id + ')')
          else
            eb.setAuthor(u.user.tag, u.user.displayAvatarURL)
        }

        if(queue.songs[0]) {
        try {
            eb.setTitle(queue.songs[0].title);
            eb.setURL(queue.songs[0].url);
        } catch (e) {
          eb.setTitle(queue.songs[0].title);
        }
}
        eb.setDescription(embedFormat(queue))

      }

      return {
        mes: m,
        embed: eb
      }

    }

      function embedFormat(queue) {

        if(!queue || !queue.songs) {
          return "<a:rose:725948640451100724> No music playing\n\u23F9 "+bar(-1)+" "+volumeIcon(100);
        } else if(!queue.playing) {
          return "<a:rose:725948640451100724> No music playing\n\u23F9 "+bar(-1)+" "+volumeIcon(queue.volume);
        } else {

          let progress = (queue.connection.dispatcher.time / queue.songs[0].msDur);
          let prog = bar(progress);
          let volIcon = volumeIcon(queue.volume);
          let playIcon = (queue.connection.dispatcher.paused ? "\u23F8" : "\u25B6")
          let dura = queue.songs[0].duration;

          return playIcon + ' ' + prog + ' `[' + formatTime(queue.connection.dispatcher.time) + '/' + dura + ']`' + volIcon;


        }

      }

      function formatTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = parseInt((duration / 1000) % 60),
    minutes = parseInt((duration / (1000 * 60)) % 60),
    hours = parseInt((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return (hours > 0 ? hours + ":" : "") + minutes + ":" + seconds;
}

      function bar(precent) {

        var str = '';

        for (var i = 0; i < 12; i++) {

          let pre = precent
          let res = pre * 12;

          res = parseInt(res)

          if(i == res){
            str+="\uD83D\uDD18";
          }
          else {
            str+="▬";
          }
        }

        return str;

      }

      function volumeIcon(volume) {

        if(volume == 0)
           return "\uD83D\uDD07";
       if(volume < 30)
           return "\uD83D\uDD08";
       if(volume < 70)
           return "\uD83D\uDD09";
       return "\uD83D\uDD0A";

      }

    }

});


client.on('message', message => {
  if (!message.guild) return;
  if (message.content === prefix + 'join') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply(`<a:rose:725948640451100724> ${message.author} **I Am In The Room With You!..**!`);
        })
        .catch(console.log);
    } else {
      message.reply('<a:rose:725948640451100724>**- You Have To Join A Voice Channel!**');
    }
  }
});

