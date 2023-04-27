import React from 'react';

type Props = {
  text: string;
  onClick: () => void;
};

const LogButton: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center">
      {text}
    </button>
  );
};
export default LogButton;