import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

type NodeSectionThumbnailProps = {
  images: {
    href: string;
    src: string;
    name: string;
  }[];
};
export default function NodeSectionThumbnail({
  images,
}: NodeSectionThumbnailProps) {
  const { colorMode } = useColorMode();
  return (
    <div className="flex flex-wrap gap-4">
      {images.map(img => (
        <div className="p-1" key={img.src}>
          <a href={img.href}>
            <figure className="m-0 h-[250px] w-[350px] overflow-hidden border border-slate-300 pb-3 dark:border-slate-500">
              <img
                className="h-full w-full object-cover transition-all duration-500 ease-in-out hover:scale-150"
                src={
                  colorMode === 'dark'
                    ? img.src
                    : `${img.src.split('.jpeg')[0]}_light.jpeg`
                }
              />
            </figure>
            <p className="mt-2">{img.name}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
