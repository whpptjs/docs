import "../styles/globals.scss";
import "@whppt/next/styles/base.css";
import type { AppProps } from "next/app";
import { Domain, Nav, PageData, pageFactory, WhpptApp } from "@whppt/next";
import { InitSiteNavigation, SiteNavigation } from "../components/site/Nav";
import { ClientError } from "../components/ClientError";
import { editors } from "../components/page/components/editors";

export type DocsPageProps = {
  domain?: Domain;
  nav?: Nav<SiteNavigation>;
  page?: PageData;
};

export type InitPageArgs = { page?: PageData; domain?: Domain };
export type InitPage = ({ page, domain }: InitPageArgs) => PageData;
export const initPage: InitPage = ({ page, domain }) => {
  const _initPage = pageFactory.init(domain, page);

  return {
    ..._initPage,
    content: {
      activeSystem: _initPage?.content?.activeSytem || "",
      content: _initPage?.content?.content || [],
    },
  };
};

function MyApp({ Component, pageProps }: AppProps<DocsPageProps>) {
  return (
    <WhpptApp
      nav={InitSiteNavigation(pageProps)}
      page={initPage(pageProps)}
      domain={pageProps.domain}
      editors={editors}
      error={(error) => {
        return <ClientError error={error} />;
      }}
    >
      <Component {...pageProps} />
    </WhpptApp>
  );
}

export default MyApp;
