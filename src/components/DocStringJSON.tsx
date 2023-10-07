import React from 'react';

type Props = {
  data: string;
};

const DocStringJSON = ({ data }: Props) => {
  const parsedData = JSON.parse(data);
  return (
    <div className="flex flex-col">
      <div>{parsedData.description}</div>
      <div className="flex gap-2">
        <div className="w-32 font-bold">Parameters:</div>
        <div className="flex flex-col gap-2">
          {parsedData.parameters.map((param: any) => (
            <>
              <div className="font-bold">
                {param.name} : {param.type}
              </div>
              <div className="ml-8">{param.description}</div>
            </>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <div className="w-32 font-bold">Returns:</div>
        <div className="flex flex-col gap-2">
          {parsedData.returns.map((param: any) => (
            <>
              <div className="font-bold">
                {param.name ?? 'out'} : {param.type}
              </div>
              <div className="ml-8">{param.description}</div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocStringJSON;
