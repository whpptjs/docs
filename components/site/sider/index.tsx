import { VercelLogo, Link } from "@components";

export const SiteSider = () => {
  return (
    <div className="flex flex-col border-r border-grey-400 justify-between h-full">
      <div>Test</div>
      <div className="p-6">
        <Link href="https://vercel.com/?utm_source=whppt&utm_campaign=oss">
          <VercelLogo />
        </Link>
      </div>
    </div>
  );
};
