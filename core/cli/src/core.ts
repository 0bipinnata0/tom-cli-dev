import pkg from "../package.json";
import { DEFAULT_CLI_HOME, LOWEST_NODE_VERSION } from "./constant";
import colors from "colors";
import semver from "semver";
import rootCheck from "root-check";
import os from "os";
import fs from "fs";
import logger from "@tom-cli-dev/log";
import minimist from "minimist";
import dotenv from "dotenv";
import path from "path";

function checkPkgVersion() {
  logger.info(pkg.version);
}
function checkNodeVersion() {
  const currentVersion = process.version;
  const lowestVeresion = LOWEST_NODE_VERSION;
  if (!semver.gte(currentVersion, lowestVeresion)) {
    throw new Error(
      colors.red(`tom-cli 需要安装 v${lowestVeresion} 以上版本的 Node.js`)
    );
  }
}
function checkRoot() {
  rootCheck();
}

function checkUserHome() {
  const userHome = os.homedir();
  logger.info("userHome", userHome);
  if (!userHome || !fs.existsSync(userHome)) {
    throw new Error(colors.red("当前用户主目录不存在！"));
  }
}

function checkInputArgs() {
  const args = minimist(process.argv.slice(2));
  if (args.debug) {
    process.env.LOG_LEVEL = "debug";
  } else {
    process.env.LOG_LEVEL = "info";
  }
  logger.level = process.env.LOG_LEVEL;
}

function createDefaultConfig() {
  const home = os.homedir();
  if (process.env.CLI_HOME) {
    process.env.CLI_HOME = path.join(home, process.env.CLI_HOME);
  } else {
    process.env.CLI_HOME = path.join(home, DEFAULT_CLI_HOME);
  }
}

function checkEnv() {
  const dotenvPath = os.homedir() + "/.tom-env";
  if (fs.existsSync(dotenvPath)) {
    dotenv.config({
      path: dotenvPath,
    });
  }
  createDefaultConfig();
}

function core(args: string[]) {
  try {
    checkPkgVersion();
    checkNodeVersion();
    checkRoot();
    checkUserHome();
    checkInputArgs();
    checkEnv();
  } catch (e) {
    if (e instanceof Error) {
      logger.error(e.message);
    }
  }
}
export default core;
