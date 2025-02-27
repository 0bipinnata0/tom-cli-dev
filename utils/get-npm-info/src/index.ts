import urlJoin from "url-join";
import semver from "semver";

export async function getNpmInfo(
  npmName: string,
  registry?: string
): Promise<NpmInfo | null> {
  if (!npmName) {
    return null;
  }

  const registryUrl = registry || getDefaultRegistry();
  const npmInfoUrl = urlJoin(registryUrl, npmName);

  const response = await fetch(npmInfoUrl);
  const npmInfo = await response.json();
  return npmInfo;
}

export async function getNpmVersions(npmName: string, registry?: string) {
  const npmInfo = await getNpmInfo(npmName, registry);
  if (!npmInfo) {
    return [];
  }
  return Object.keys(npmInfo.versions);
}

function getSemverVersions(baseVersion: string, versions: string[]) {
  return versions
    .filter((version) => semver.satisfies(version, `^${baseVersion}`))
    .sort((a, b) => (semver.gt(b, a) ? 1 : -1));
}

export async function getNpmSemverVersion(
  baseVersion: string,
  npmName: string,
  registry?: string
) {
  const versions = await getNpmVersions(npmName, registry);
  const newVersions = getSemverVersions(baseVersion, versions);
  if (newVersions && newVersions.length > 0) {
    return newVersions[0];
  }
  return null;
}

function getDefaultRegistry(isOriginal = false) {
  return isOriginal
    ? "https://registry.npmjs.org"
    : "http://registry.npmmirror.com";
}
