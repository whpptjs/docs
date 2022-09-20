import { UseDefaultEditors, WhpptAppEditorsArg } from "@whppt/next";

export const editors: WhpptAppEditorsArg = (allArgs) => {
  const { editor, ...args } = allArgs;

  const defaultEditor = UseDefaultEditors(allArgs);

  return defaultEditor || <div></div>;
};
