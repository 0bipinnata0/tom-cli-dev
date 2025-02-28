import pkg from "../package.json";
import semver from "semver";
import { getNpmSemverVersion } from "@tom-cli-dev/get-npm-info";
import colors from "colors";
import logger from "@tom-cli-dev/log";

async function checkGlobalUpdate() {
  const currentVersion = pkg.version;
  const npmName = pkg.name;

  const lastVersion = await getNpmSemverVersion(currentVersion, npmName);

  if (lastVersion && semver.gt(lastVersion, currentVersion)) {
    logger.warn(
      colors.yellow(
        `请手动更新 ${npmName}，当前版本：${currentVersion}，最新版本：${lastVersion}`
      )
    );
    logger.warn(`更新命令: npm install -g ${npmName}`);
  }
}

export default checkGlobalUpdate;
