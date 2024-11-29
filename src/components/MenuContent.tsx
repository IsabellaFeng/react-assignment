import React from 'react';

interface Props {
  goBack: () => void;
}

const MenuContent: React.FC<Props> = ({ goBack }) => {
  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <div>Menu Content</div>
    </div>
  )
}

export default MenuContent;