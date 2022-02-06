import { Link } from "@components";

export const GitHubLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <li>
      <Link href={href} externalIcon noWrap>
        <span className=" whitespace-nowrap">{text}</span>
      </Link>
    </li>
  );
};
