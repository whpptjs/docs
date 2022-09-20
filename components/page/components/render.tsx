import { ComponentData, UseWhpptContentComponents } from "@whppt/next";

export const renderComponent = (
  data: ComponentData,
  onChange: (data: ComponentData) => void
) => {
  const component = UseWhpptContentComponents(data, onChange);
  if (component) return component;
  return <div>Missing Component: {data.definitionKey}</div>;
};
