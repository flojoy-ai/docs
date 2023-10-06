import React from 'react';
import Card from '../components/Card';

type CardCollectionProps = { cardData: string; };

function CardCollection({cardData}: CardCollectionProps) {
  return (
    <section className="grid gap-8 lg:grid-cols-2 2xl:grid-cols-3">
      {cardData.map(cd => {
        return (
          <Card
            cardHeader={cd.cardHeader}
            cardLink={cd.cardLink}
            cardEmoji={cd.cardEmoji}
            cardContent={cd.cardContent}
          />
        );
      })}
    </section>
  );
}

export default CardCollection;
