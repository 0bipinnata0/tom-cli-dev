import pkg from "../package.json";
import { Command } from "commander";
import colors from "colors";
import { exec } from "@tom-cli-dev/exec";
import logger from "@tom-cli-dev/log";

const program = new Command();

function registerCommand() {
  program
    .version(pkg.version)
    .usage("<command> [options]")
    .option("-d, --debug", "是否开启调试模式", false)
    .option("-t, --targetPath <targetPath>", "是否指定本地调试文件路径", "");

  program
    .command("init [projectName]")
    .description("初始化项目")
    .option("-f, --force", "是否强制初始化项目", false)
    .action(exec);

  program.on("option:debug", function () {
    if (program.opts().debug) {
      process.env.LOG_LEVEL = "debug";
    } else {
      process.env.LOG_LEVEL = "info";
    }
    logger.level = process.env.LOG_LEVEL;
  });

  program.on("option:targetPath", function () {
    process.env.CLI_TARGET_PATH = program.opts().targetPath;
  });

  program.on("command:*", function (obj) {
    const availableCommands = program.commands.map((cmd) => cmd.name());
    console.info(colors.red(`未知的命令：${obj[0]}`));
    if (availableCommands.length > 0) {
      console.info(colors.red(`可用命令：${availableCommands.join(",")}`));
    }
  });

  if (process.argv.length < 3) {
    program.outputHelp();
    console.log();
  }

  program.parse(process.argv);
}

export default registerCommand;
