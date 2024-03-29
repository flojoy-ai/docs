import React from 'react';
import UniversalAdmonition from '@site/src/components/UniversalAdmonition'

type Props = {
  data: string;
};

const DocStringJSON = ({ data }: Props) => {
  const parsedData = JSON.parse(data);
  return (

    <div className="flex flex-col">

      <UniversalAdmonition />

      <div>{parsedData.description}</div>

      <div className="flex gap-2">
        <div className="w-24 shrink-0 font-bold">Params:</div>
        <div className="flex flex-col gap-2">
          {parsedData.parameters.map((param: any) => (
            <>
              <div className="font-bold">
                {param.name} : {param.type}
              </div>
              <div className="pl-8">{param.description}</div>
            </>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <div className="w-24 shrink-0 font-bold">Returns:</div>
        <div className="flex flex-col gap-2">
          {parsedData.returns.map((param: any) => (
            <>
              <div className="font-bold">
                {param.name ?? 'out'} : {param.type}
              </div>
              <div className="pl-8">{param.description}</div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocStringJSON;
