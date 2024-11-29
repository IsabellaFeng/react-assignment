import * as React from 'react';
import * as styles from "../app.module.scss";

interface Props {
  goBack: () => void;
}

const MenuContent: React.FC<Props> = ({ goBack }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.menu_button} aria-label='menu-go-back-button' onClick={goBack}>
          ←
        </button>
        <span>Menu</span>
      </header>
      <main className={styles.content}>
        <p>This is menu content</p>
      </main>
    </div>
  )
}

export default MenuContent;