import React from 'react';
import './descriptionTitle.scss';

interface Props {
  title: string;
}

export const DescriptionTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="about">
      <h3 className="about__title">{title}</h3>
    </div>
  );
};
