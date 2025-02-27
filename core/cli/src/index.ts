import importLocal from "import-local";

import core from "./core";
import logger from "@tom-cli-dev/log";


if (importLocal(__filename)) {
  logger.info("cli", "正在使用本地版本");
} else {
  core(process.argv.slice(2));
}
