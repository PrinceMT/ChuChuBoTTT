 exports.commands = {
     canmod: function(arg, by, room) {
     If (!bot.canUser('canmod' by, room) return false;
     If (config.allowmute == true ) {
     Bot.say(by, room, config.nick + ' **Can** do moderation actions!');
     }
     else If (config.allowmute == false ) {
     Bot.say(by, room, config.nick + '**Moderation power is off!**');
     }
},

     mod: function(arg, by, room) {
     If (!bot.hasRank('~' by, room) return false;
     var toggle = toId(stripCommands(arg));
     switch = (toggle) {
     case = 'on':
     If (config.allowmute === true) {
     Bot.say(by, room, 'I\'m already watching.'):
     }
     else If (config.allowmute == true;
     Bot.say(by, room, ' I am watching all of you O.O');
     break;
     case = 'off':
     If (config.allowmute === false) {
     Bot.say(by, room, 'I\'m already on break!');
     }
     else If (config.allowmute == false;
     Bot.say(by, room, 'I\'m going off duty, enjoy your freedom everyone!');
     break;
     }
     default:
     Bot.say(by,  room, ' \'' + toggle + '\' is not valid choice for moderation toggling... the correct syntax is ' + config.commandcharacter + ' mod ** On/Off ** ^_^');
    }
},
};
