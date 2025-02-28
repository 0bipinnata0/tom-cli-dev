import { isObject } from "@tom-cli-dev/tools";

interface PackageOptions {
  targetPath: string;
  storePath: string;
  pkgName: string;
  pkgVersion: string;
}

export class Package implements PackageOptions {
  targetPath: string;
  storePath: string;
  pkgName: string;
  pkgVersion: string;
  constructor(options: Partial<PackageOptions>) {
    if (!isObject(options)) {
      throw new Error("Package类的options参数必须为对象");
    }
    this.targetPath = options.targetPath || process.cwd();
    this.storePath = options.storePath || "";
    this.pkgName = options.pkgName || "";
    this.pkgVersion = options.pkgVersion || "";
  }
}
