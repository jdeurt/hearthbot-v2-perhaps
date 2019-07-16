import { createLogger, transports } from "winston";

export const logger = createLogger({
    transports: [
        new transports.Console(),

        new transports.File({
            filename: "combined.log",
            level: "info"
        }),
        new transports.File({
            filename: "errors.log",
            level: "error"
        }),
    ],

    exceptionHandlers: [
        new transports.File({
            filename: "exceptions.log"
        })
    ]
});