// @flow
const PUBLIC_PATH = ((process.env.PUBLIC_PATH: any): string);

const buildPath = (path: string = ''): string => `${PUBLIC_PATH}${path}`;

export default buildPath;