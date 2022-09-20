import { useWhppt, WhpptContent } from "@whppt/next";
import { FC } from "react";
import { pageComponents } from "./components/definitions";
import { renderComponent } from "./components/render";

export const PageContent: FC = () => {
  const { page, setPage } = useWhppt();
  return (
    <WhpptContent
      componentDefinitions={pageComponents}
      onChange={(value) =>
        setPage({ ...page, content: { ...page.content, content: value } })
      }
      value={page.content.content}
      renderComponent={renderComponent}
    />
  );
};
