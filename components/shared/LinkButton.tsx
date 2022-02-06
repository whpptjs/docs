import { default as NextLink } from "next/link";
import { Icon } from "@components";

export const LinkButton = ({
  href,
  children,
  redirect,
  externalIcon,
  className,
}: {
  href: string;
  children: any;
  redirect?: boolean;
  externalIcon?: boolean;
  className?: string;
}) => {
  return (
    <div>
      {!redirect ? (
        <a href={href} target="_blank" rel="noreferrer" className={className + " flex items-center space-x-1 "}>
          <div>{children}</div>
          {externalIcon && <Icon icon="external" size={12} />}
        </a>
      ) : (
        <NextLink href={href}>
          <div className={className + " hover:cursor-pointer"}>{children}</div>
        </NextLink>
      )}
    </div>
  );
};
