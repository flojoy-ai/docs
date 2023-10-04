import React from 'react';

type CardProps = {
  cardLink: string,
  cardHeader: string,
  cardEmoji: string
  cardContent: string
};

export default function Card({ cardLink, cardHeader, cardEmoji, cardContent }: CardProps) {
  return (
    <>
        <a className = 'card-container' href = {`${cardLink}`}>
            <article className = 'card-collection-column'>
                <h2 className = 'card-header'>{`${cardEmoji} ${cardHeader}`}</h2>
                <p className = 'card-content'>{`${cardContent}`}</p>
            </article>
        </a>
    </>
  );
}
