const readline = require('readline');
const profile = {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)? ", (answer) => {
  profile.username = answer;
  rl.question("What's an activity you like doing?", (answer) => {
    profile.activity = answer;
    rl.question("What do you listen to while doing that?", (answer) => {
      profile.listen = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        profile.meal = answer;
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          profile.eat = answer;
          rl.question("Which sport is your absolute favourite?", (answer) => {
            profile.sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              profile.power = answer;
              console.log("Your profile is as follows: ");
              console.log(profile);
              rl.close();
            });
          });
        });
      });
    });
  });
  
});
