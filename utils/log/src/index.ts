import pino from "pino";

const logger = pino();
export default function log() {
  logger.info("log", "test");
}
