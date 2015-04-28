var ack = require('ac-koa').require('hipchat');
var pkg = require('./package.json');
var app = ack(pkg);

var addon = app.addon()
  .hipchat()
  .allowRoom(true)
  .scopes('send_notification');

addon.webhook('room_message', /@[Dd]orman/, function *() {
  var phrases = [
    "I left the company to pursue my dreams. If you need to reach me, I'll be sitting on my couch drinking whiskey and yelling at my TV.",
    "Let me google that for you.",
    "WordWhat?",
    "I love Druuuu-pall!",
    "No. Get back to work.",
    "Should I take the rest of the month off?",
    "Does Drupal API have more information on that?",
    "Ummmm, yeah... I'm going to need you to go ahead and come in on Saturday.",
    "Nevermind that. Did you update your timesheet?",
    "That is a veiled HR VIOLATION.",
    "Put $2.00 in the jar.",
    "I want my $2.00.",
    "Collect your pink slip at Nicole's desk.",
    "Prontos?",
    "Does Evan still work here?",
    "Is it 4:20 yet?",
    "It's Jason's fault.",
    "I'm wearing jeans right now..."
  ];

  yield this.roomClient.sendNotification(phrases[Math.floor(Math.random() * phrases.length)]);
});

app.listen();
