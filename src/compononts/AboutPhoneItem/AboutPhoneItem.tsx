import React from 'react';
import './aboutPhoneItem.scss';

interface Props {
  descr: {
    title: string,
    text: string[],
  }
}

export const AboutPhoneItem: React.FC<Props> = ({ descr }) => {
  return (
    <article className="article" key={descr.title}>
      <h4 className="article__title">{descr.title}</h4>
      <p className="article__text">
        {descr.text.length === 1 ? descr.text[0] : (
          <>
            {descr.text[0]}
            <br />
            <br />
            {descr.text[1]}
          </>
        )}

      </p>
    </article>
  );
};
