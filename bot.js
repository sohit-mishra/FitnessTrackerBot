const express = require('express');
const app = express();

const { Telegraf } = require("telegraf");
require('dotenv').config()
const schedule = require('node-schedule');

const bot = new Telegraf(process.env.BOT_TOKEN);
const PORT = process.env.PORT || 3000;

bot.start((ctx) => {
    ctx.reply(`
Welcome to Fitness Bot! 💪 Here are the available commands:

/workout 🏋️‍♂️ - Get today's workout plan.
/progress 📊 - Log your fitness progress.
/log [activity] 📝 - Log an activity (e.g., /log 10 push-ups).
/motivation 🌟 - Receive a random motivational quote.
/remindme ⏰ - Schedule daily workout reminders.

Type any of the above commands to get started! 🚀
`);
});


bot.command('workout', (ctx) => {
    const workoutPlan = `
Beginner Plan 🏅:
     10 Push-ups 💪
     15 Squats 🏋️‍♀️
     30s Plank ⏳

Advanced Plan 🔥:
     20 Push-ups 💪
     30 Squats 🏋️‍♂️
     1-minute Plank ⏳
    `;

    ctx.reply(workoutPlan);
})

bot.command('progress', (ctx) => {
    ctx.reply("Log your progress! Example: /log 20 squats completed.📝💪");
})

bot.hears(/\/log (.+)/, (ctx) => {
    const progress = ctx.match[1];
    ctx.reply(`Great job logging: ${progress}! Keep pushing forward.  💯💪🚀`);
});

bot.command('motivation', (ctx) => {
    const quotes = [
        "Don't stop when you're tired. Stop when you're done.💪🔥",
        "Believe in yourself and all that you are.🌟💖",
        "The harder you work, the luckier you get.💯🍀",
    ];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    ctx.reply(quote);
});

bot.command('remindme', (ctx) => {
    schedule.scheduleJob('0 7 * * *', () => {
        ctx.reply("Morning reminder: Time to hit your fitness goals today! 💥💪🌅");
    });
    ctx.reply("Daily reminders set for 7 AM.⏰💪");
});

bot.launch();
console.log('Fitness bot is running...🚀💪');

app.get('', (req, res) => {
    res.send({message:"Hello World"});
});

app.listen(PORT,()=>{
    console.log(`Server is running...`);
})
