import pkg from "../package.json";
import { DEFAULT_CLI_HOME, LOWEST_NODE_VERSION } from "./constant";
import semver from "semver";
import rootCheck from "root-check";
import os from "os";
import fs from "fs";
import logger from "@tom-cli-dev/log";
import dotenv from "dotenv";
import path from "path";
import colors from "colors";
import registerCommand from "./registerCommand";
import checkGlobalUpdate from "./checkGlobalUpdate";


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


async function core(args: string[]) {
  try {
    checkPkgVersion();
    checkNodeVersion();
    checkRoot();
    checkUserHome();
    // checkInputArgs();
    checkEnv();
    await checkGlobalUpdate();
    registerCommand();
  } catch (e) {
    if (e instanceof Error) {
      logger.error(e.message);
    }
  }
}
export default core;
