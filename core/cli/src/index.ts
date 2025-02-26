import importLocal from "import-local";
import pino from "pino";
const logger = pino();

import core from "./core";
if (importLocal(__filename)) {
    logger.info("cli", "正在使用本地版本");
} else {
  core(process.argv.slice(2));
}
