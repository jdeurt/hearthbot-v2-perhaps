import "./config/env";
import Discord from "discord.js";
import getCard from "./actions/card-lookup";
import parseDeckCode from "./actions/deck-code";
import { logger } from "./logging";

const CARD_LOOKUP_REGEXP = new RegExp(process.env["CARD_REGEXP"]!);
const DECK_CODE_REGEXP = new RegExp(process.env["DECK_REGEXP"]!);

const bot = new Discord.Client();

bot.on("message", message => {
    if (CARD_LOOKUP_REGEXP.test(message.content)) {
        const matched = message.content.match(CARD_LOOKUP_REGEXP)![0];

        logger.log("info", `Running card lookup action on string: "${matched}".`);

        getCard(bot, message, matched);
    } else if (DECK_CODE_REGEXP.test(message.content)) {
        const matched = message.content.match(DECK_CODE_REGEXP)![0];

        logger.log("info", `Running deck code action on string: "${matched}".`);

        parseDeckCode(bot, message, matched);
    }
});

bot.login(process.env["DISCORD_CLIENT_SECRET"]!);