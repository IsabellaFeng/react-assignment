import React, { useState } from 'react';
import MenuContent from './MenuContent';

const RegisterCardForm: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      {showMenu ? (
        <MenuContent goBack={() => setShowMenu(false)} />
      ) : (
        <div>
          RegisterCardForm
          <button onClick={() => setShowMenu(true)}>
            menu
          </button>

        </div>
      )}
    </div>
  )
}

export default RegisterCardForm;