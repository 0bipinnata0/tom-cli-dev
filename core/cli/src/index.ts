import importLocal from "import-local";

import log from "winston";
import core from "./core";
if (importLocal(__filename)) {
  log.info("cli", "正在使用本地版本");
} else {
  core(process.argv.slice(2));
}
