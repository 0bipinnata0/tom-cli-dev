export function isObject(obj: unknown): obj is Record<string, unknown> {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
