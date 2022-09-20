import { FC } from "react";

export const ClientError: FC<{ error: Error }> = ({ error }) => {
  return <div>{error.message}</div>;
};
