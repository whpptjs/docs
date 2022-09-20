import type { GetServerSideProps, NextPage } from "next";
import { PageData, Api, WhpptPage } from "@whppt/next";
import { Nav, Domain } from "@whppt/next";
import { DocsLayout } from "../../components/site/docs/Layout";
import { PageContent } from "../../components/page/Content";
import { SiteNavigation } from "../../components/site/Nav";
import { DocsPageProps } from "../_app";
import { PageHeader } from "../../components/page/headers";

const DocsPage: NextPage<DocsPageProps> = () => {
  return (
    <WhpptPage
      getContents={({ page, setPage }) => [
        {
          name: "Contents",
          value: page.content.content,
          onChange: (value) =>
            setPage({
              ...page,
              content: { ...page.content, content: value },
            }),
        },
      ]}
    >
      <DocsLayout>
        <PageHeader />
        <PageContent />
      </DocsLayout>
    </WhpptPage>
  );
};

export default DocsPage;

export const getServerSideProps: GetServerSideProps = ({ params, req }) => {
  const api = Api();
  if (!req?.headers) return Promise.resolve({ notFound: true });
  const referer = req.headers.referer || req.headers.origin || req.headers.host;
  if (!referer) return Promise.resolve({ notFound: true });

  const slug = !params?.slug
    ? ""
    : Array.isArray(params.slug)
    ? params.slug.join("/")
    : params.slug;
  const refererUrl = new URL(
    referer.startsWith("http") ? referer : `http://${referer}`
  );
  const hostname = refererUrl.host;

  // const hostname =
  //   process.env.WHPPT_HOSTNAME || "draft.dev.hentleyfarm.svelteteam.com";

  const isDraft = process.env.NEXT_PUBLIC_DRAFT === "true";

  const loadedDomainProps = (
    domain: Domain,
    nav: Nav<SiteNavigation>,
    page: PageData
  ) => {
    return JSON.parse(
      JSON.stringify({
        notFound: false,
        props: {
          domain,
          nav,
          page,
        },
      })
    );
  };
  return api.app.domain
    .loadForHost({ hostname })
    .then((domain) => {
      if (!domain && !isDraft) return { props: {}, notFound: true };
      if (!domain) return { props: {} };
      return Promise.all([
        api.site.nav.load({ domain }),
        api.page.loadFromSlug({
          slug: `docs/${slug}`,
          collection: "pages",
          domain,
        }),
      ]).then(([nav, page]) => {
        if (!isDraft && !(nav && page)) return { notFound: true, props: {} };
        const loadedProps = loadedDomainProps(domain, nav, page);
        return loadedProps;
      });
    })
    .catch((err) => {
      console.error(`Error: Host: '${hostname}' Slug: '${slug}' ${err}`);
      if (err.status === 404) return { notFound: true };
      throw err;
    });
};
