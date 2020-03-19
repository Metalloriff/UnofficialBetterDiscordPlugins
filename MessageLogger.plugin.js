//META{"name":"MessageLogger","website":"https://metalloriff.github.io/toms-discord-stuff/","source":"https://github.com/Metalloriff/BetterDiscordPlugins/blob/master/MessageLogger.plugin.js"}*//

// THIS LOGGER IS DEPRECATED AND NO LONGER MAINTAINED!!!
// USE THIS ONE INSTEAD!!!
// https://1lighty.github.io/BetterDiscordStuff/?plugin=MessageLoggerV2&dl=1

class MessageLogger {
  getName() {
    return 'MessageLogger';
  }
  getDescription() {
    return 'Records all sent messages, message edits and message deletions in the specified servers, all unmuted servers or all servers, and in direct messages.';
  }
  getVersion() {
    return '1.14.50';
  }
  getAuthor() {
    return 'Metalloriff';
  }
  load() {
    const request = require('request');
    const fs = require('fs');
    const path = require('path');
    try {
        require('fs').unlink(__filename, () => {});
    } catch(e){}
    if (fs.existsSync(path.join(window.ContentManager.pluginsFolder, 'MessageLoggerV2.plugin.js'))) return;
    request('https://gitlab.com/_Lighty_/bdstuff/-/raw/master/public/plugins/MessageLoggerV2.plugin.js', (error, response, body) => {
      try {
        if (error || response.statusCode !== 200) throw 'fuck';
        fs.writeFile(path.join(window.ContentManager.pluginsFolder, 'MessageLoggerV2.plugin.js'), body, () => {});
      } catch (e) {
        window.open('https://1lighty.github.io/BetterDiscordStuff/?plugin=MessageLoggerV2&dl=1');
      }
    });
  }
  start() {}
  stop() {}
}
