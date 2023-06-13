import React from 'react';
import './Button.scss';

type Props = {
  text: string;
  onClick: () => void;
  classes?: string;
};

export const Button: React.FC<Props> = ({
  text,
  onClick,
  classes = '',
}) => {
  return (
    <button
      className={`customButton ${classes}`}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
