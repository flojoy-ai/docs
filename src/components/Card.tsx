import React from 'react';

type CardProps = {
  cardLink: string;
  cardHeader: string;
  cardEmoji: string;
  cardContent: string;
};

export default function Card({
  cardLink,
  cardHeader,
  cardEmoji,
  cardContent,
}: CardProps) {
  return (
    <a
      className="flex flex-col gap-2 rounded-2xl border-4 border-modal p-8 text-black hover:no-underline dark:text-white"
      href={`${cardLink}`}
    >
      <div className="flex gap-2 text-2xl font-bold">
        <div>{cardEmoji}</div>
        <div>{cardHeader}</div>
      </div>
      <p className="">{`${cardContent}`}</p>
    </a>
  );
}
