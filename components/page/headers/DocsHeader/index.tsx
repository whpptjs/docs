import { FC, useMemo } from "react";
import { PlainTextEditor, RichTextEditor } from "@whppt/next";

export type DocsHeaderData = {
  subTitle: string;
  title: string;
  description: string;
};

export const DocsHeader: FC<{
  data: DocsHeaderData;
  onChange: (data: DocsHeaderData) => void;
}> = ({ data, onChange }) => {
  const _data = useMemo(() => {
    return {
      subTitle: data?.subTitle || "",
      title: data?.title || "",
      description: data?.description || "",
    };
  }, [data]);

  return (
    <div className="docsHeader">
      <p className="docsHeader__header">
        <PlainTextEditor
          value={_data.subTitle}
          onChange={(subTitle) => onChange({ ..._data, subTitle })}
        />
      </p>
      <h1 className="docsHeader__title">
        <PlainTextEditor
          value={_data.title}
          onChange={(title) => onChange({ ..._data, title })}
        />
      </h1>
      <p className="docsHeader__description richText">
        <RichTextEditor
          value={_data.description}
          onChange={(description) => onChange({ ..._data, description })}
        />
      </p>
    </div>
  );
};
