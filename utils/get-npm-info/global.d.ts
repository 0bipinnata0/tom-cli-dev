declare global {
  interface NpmTime {
    created: string;
    modified: string;
    [version: string]: string;
  }

  interface NpmPerson {
    name?: string;
    email?: string;
    url?: string;
  }

  interface NpmDist {
    integrity: string;
    shasum: string;
    tarball: string;
    fileCount?: number;
    unpackedSize?: number;
    signatures?: Array<{
      keyid: string;
      sig: string;
    }>;
  }

  interface NpmVersion {
    name: string;
    version: string;
    description: string;
    main?: string;
    types?: string;
    files: string[];
    scripts?: { [key: string]: string };
    publishConfig?: { access: string };
    keywords?: string[];
    author: string;
    license: string;
    dependencies?: { [key: string]: string };
    devDependencies?: { [key: string]: string };
    dist: NpmDist;
  }

  interface NpmInfo {
    name: string;
    "dist-tags": { [tag: string]: string };
    versions: { [version: string]: NpmVersion };
    time: NpmTime;
    maintainers: NpmPerson[];
    description: string;
    homepage?: string;
    keywords?: string[];
    repository?: { type: string; url: string };
    author: NpmPerson;
    bugs?: { url: string };
    license: string;
    readme: string;
    readmeFilename: string;
  }
}

export {}