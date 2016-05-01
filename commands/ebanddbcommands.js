 exports.commands = {
     ebcommands: function(arg, by, room) {
     If(!bot.hasRank(by, '~')) return false;
     Config.defaultrank = '+':
     Bot.say(by, room, 'Commands Enabled!');
},

     dbcommands: function:(arg, by, room) {
     If(!bot.hasRank(by, '~')) return false;
     config.defaultrank = '~';
     Bot.say(by, room, 'Commands Disabled!');
},
};
