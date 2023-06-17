import React from 'react';
import './aboutTitle.scss';

interface Props {
  title: string;
}

export const AboutnTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="about">
      <h3 className="about__title">{title}</h3>
    </div>
  );
};
