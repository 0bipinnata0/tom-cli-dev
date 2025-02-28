import logger from "@tom-cli-dev/log";
import { Package } from "@tom-cli-dev/package";

const SETTINGS = {
  init: "@tom-cli-dev/init",
  config: "@tom-cli-dev/config",
};

export function exec(...args: any[]) {
  const targetPath = process.env.CLI_TARGET_PATH;
  const homePath = process.env.CLI_HOME_PATH;
  logger.info("exec" + "__" + targetPath + "__" + homePath);
  const cmdObj = args[args.length - 1];
  const pkgName = cmdObj.name();
  const pkgVersion = "latest";
  const pkg = new Package({
    targetPath,
    pkgName: SETTINGS[pkgName as keyof typeof SETTINGS],
    pkgVersion,
  });
  logger.info(pkg);
}
