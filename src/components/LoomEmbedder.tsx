import React from 'react';

type LoomEmbedderProps = {
  VLink: string;
};

export default function LoomEmbedder({ VLink }: LoomEmbedderProps) {
  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '52.916666666666664%',
      }}
    >
      <iframe
        src={`${VLink}`}
        allowFullScreen
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}
