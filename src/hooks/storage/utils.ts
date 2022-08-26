import { getProjectName } from "utils/getPackage";

export const setKey = (key: string) => `@${getProjectName}:${key}`;
