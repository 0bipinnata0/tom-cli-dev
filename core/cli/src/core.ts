import pkg from "../package.json";
import log from "@tom-cli-dev/log";

function core(args: string[]) {
    console.info("core", args);
    checkPkgVersion();
}

function checkPkgVersion() {
  console.info(pkg.version);
  log();
}

export default core;
