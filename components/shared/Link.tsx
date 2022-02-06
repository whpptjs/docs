import { default as NextLink } from "next/link";
import { Icon } from "@components";

export const Link = ({
  href,
  children,
  redirect,
  externalIcon,
  noWrap,
  className,
}: {
  href: string;
  children: any;
  redirect?: boolean;
  externalIcon?: boolean;
  noWrap?: boolean;
  className?: string;
}) => {
  const _className =
    (noWrap ? "flex-nowrap " : "") + (className ? className : "") + "flex items-center space-x-1 hover:text-blue-400";
  return (
    <div>
      {!redirect ? (
        <a href={href} target="_blank" rel="noreferrer" className={_className}>
          <div>{children}</div>
          {externalIcon && <Icon icon="external" size={12} />}
        </a>
      ) : (
        <div className={_className}>
          <NextLink href={href}>{children}</NextLink>
        </div>
      )}
    </div>
  );
};
