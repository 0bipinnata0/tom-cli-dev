import logger from "@tom-cli-dev/log";
import { Package } from "@tom-cli-dev/package";
export function exec(...args: any[]) {
  const targetPath = process.env.CLI_TARGET_PATH;
  const homePath = process.env.CLI_HOME_PATH;
  logger.default.info("exec", targetPath, homePath);
  const cmdObj = args[args.length - 1];
  const pkgName = cmdObj.name();
  const pkgVersion = "latest";
  const pkg = new Package({
    targetPath,
    pkgName,
    pkgVersion,
  });
}
