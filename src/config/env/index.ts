import dotenv from "dotenv";
import { logger } from "../../logging";

dotenv.load();

if (!process.env["DISCORD_CLIENT_SECRET"]) {
    logger.log("error", "Missing DISCORD_CLIENT_SECRET environmental variable.");
    process.exit(1);
}

if (!process.env["CARD_REGEXP"]) {
    logger.log("error", "Missing CARD_REGEXP environmental variable.");
    process.exit(1);
}

if (!process.env["DECK_REGEXP"]) {
    logger.log("error", "Missing DECK_REGEXP environmental variable.");
    process.exit(1);
}