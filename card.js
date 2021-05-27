#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "Here's what you can do right now",
        choices: [
            {
                name: `Toss an ${chalk.bold("email")}?`,
                value: () => {
                    open("mailto:sandipan2224@gmail.com");
                    console.log("\nLooking forward to hearing your message and replying to you!\n");
                }
            },
            {
                name: "Exit",
                value: () => {
                    console.log("Good bye, have a nice day!\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("                     Sandipan Das"),
    handle: chalk.white("@sandipan2224"),
    fact: chalk.hex('#B10000')('I love Open-Source!'),
    twitter: chalk.hex('#00A1D9')("https://twitter.com/sandipan_2224"),
    github: chalk.hex('#787878')("https://github.com/sandip2224"),
    dev: chalk.hex('#330093')("https://dev.to/sandip2224"),
    website: chalk.hex('#00AB9E')("https://sandipan-2224.web.app/"),
    npx: chalk.hex('#A1AB00')("npx sandip2224"),

    labelFact: chalk.hex('#FF6262').bold("          Fun Fact:"),
    labelTwitter: chalk.hex('#629DFF').bold("        Twitter:"),
    labelGitHub: chalk.hex('#9E9E9E').bold("         GitHub:"),
    labelDev: chalk.hex('#A959FF').bold("            Dev:"),
    labelWebsite: chalk.hex('#59FFC8').bold("        Website:"),
    labelCard: chalk.hex('#FFF976').bold("                  Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelFact}  ${data.fact}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelDev}  ${data.dev}`,
        `${data.labelWebsite}  ${data.website}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.bold(
            "Hi there! I'm Sandipan, an aspiring software " 
        )}`,
        `${chalk.bold("developer and web designer from India. I also have a ")}`,
        `${chalk.bold(
            "knack for creating aesthetically pleasing, responsive "
        )}`,
        `${chalk.bold(
            "web apps. Toss me an email if you want to talk!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
);

console.log(me);
const tip = [
    `Tip: ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above to open them in your broswer.`,
    '',
].join("\n");
console.log(tip);


prompt(questions).then(answer => answer.action());