import React, { memo } from "react";
import { CustomNodeProps } from "@site/src/types/node";
import NodeWrapper from "./components/NodeWrapper";
import HandleComponent from "./components/HandleComponent";
import { textWrap } from "@site/src/utils/textWrap";

const DefaultNode = (props: CustomNodeProps) => {
  const {
    nodeProps: { data },
    height,
    width,
    children,
  } = props;

  return (
    <NodeWrapper wrapperProps={props}>
      <div
        className="flex min-h-[160px] items-center justify-center break-words rounded-2xl border-2 border-solid border-accent1 bg-accent1/5 p-2"
        style={{
          width: width ?? textWrap(160, 24, data.label),
          minHeight: height,
        }}
      >
        {children ?? (
          <h2 className="m-0 text-center font-sans text-2xl font-extrabold tracking-wider text-accent1">
            {data.label}
          </h2>
        )}
        <HandleComponent data={data} variant="accent1" />
      </div>
    </NodeWrapper>
  );
};

export default memo(DefaultNode);
