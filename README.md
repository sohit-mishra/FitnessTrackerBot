# Fitness Bot 🤖💪

Fitness Bot is a Telegram bot built with **Telegraf.js** that helps users stay fit and motivated by providing workout plans, tracking progress, sending motivational quotes, and scheduling reminders.

---

## Features 📋

- **Workout Plans**: Get daily workout routines with the `/workout` command.
- **Progress Tracking**: Log your activities and track your fitness journey with `/progress` and `/log`.
- **Motivational Quotes**: Stay inspired with random quotes using `/motivation`.
- **Reminders**: Set daily reminders for workouts with `/remindme`.

---

## Commands 🛠️

| Command           | Description                               |
| ----------------- | ----------------------------------------- |
| `/start`          | Start interacting with the bot.           |
| `/workout`        | Get today's workout plan.                 |
| `/progress`       | View or log your fitness progress.        |
| `/log [activity]` | Log a specific activity (e.g., push-ups). |
| `/motivation`     | Receive a random motivational quote.      |
| `/remindme`       | Schedule daily workout reminders.         |
| `/help`           | Show help information about the bot.      |

---

## Installation 🚀

1. Clone this repository:

   ```bash
   git clone https://github.com/sohit-mishra/FitnessTrackerBot.git
   cd fitness-bot
   ```

2. Install dependencies:

```bash
   npm install
```

3. Create a .env file and add your bot token:

```
BOT_TOKEN = your-telegram-bot-token
```

4. Run the bot:

```
node index.js
```

## Usage 🏋️

1. Search for your bot on Telegram (e.g., @ActivePulse_bot).
2. Click Start and use the commands to interact with the bot.

## Environment Variables 📁

The bot requires the following environment variable:

- BOT_TOKEN: Your Telegram bot token (obtained from BotFather).

## Technologies Used 🛠️

- Node.js
- Telegraf.js
- Telegram Bot API

## Contributing 🤝

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:

```
git checkout -b feature-name
```

3. Commit your changes:

```
git commit -m "Add your message here"
```

4. Push to the branch:

```
git push origin feature-name
```

Submit a pull request.
