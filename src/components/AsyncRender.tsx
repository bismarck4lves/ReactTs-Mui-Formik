import React from "react";
import FullLoading from "./FullLoading";

interface AsyncRenderProps {
  component: React.ReactNode;
  componentAwait?: React.ReactNode;
  render: boolean;
}

function AsyncRender(props: AsyncRenderProps) {
  const comportToAwait = props.componentAwait ? (
    props.componentAwait
  ) : (
    <FullLoading open />
  );

  return <> {props.render ? props.component : comportToAwait}</>;
}

export default AsyncRender;
