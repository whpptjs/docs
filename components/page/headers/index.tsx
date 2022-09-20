import { HeaderData, useWhppt } from "@whppt/next";
import React, { FC, useCallback } from "react";
import { DocsHeader } from "./DocsHeader";

export const PageHeader: FC = () => {
  const { page, setPage } = useWhppt();

  const onChange = useCallback(
    (content: any) => {
      setPage({
        ...page,
        header: { ...page.header, content } as HeaderData<any>,
      });
    },
    [page, setPage]
  );

  if (page.header?.type === "DocsHeader")
    return <DocsHeader data={page.header.content} onChange={onChange} />;
  return <div>Base Header</div>;
};
