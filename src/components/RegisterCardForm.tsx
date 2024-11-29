import React, { useState } from 'react';
import MenuContent from './MenuContent';
import * as styles from "../app.module.scss";

const RegisterCardForm: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [form, setForm] = useState({
    useFirstName: "Isabella",
    creditCardNumber: "",
    cvc: "",
    expiry: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", form);
  };

  return (
    <div>
      {showMenu ? (
        <MenuContent goBack={() => setShowMenu(false)} />
      ) : (
        <div className={styles.container}>
          <header className={styles.header}>
            <button
              className={styles.menu_button}
              aria-label='register-card-form-menu-button'
              onClick={() => setShowMenu(true)}
            >
              ☰
            </button>
            <span>Register Card Form</span>
          </header>
          <main className={styles.content}>
            <p>Welcome {form.useFirstName}</p>
            <form onSubmit={handleSubmit}>
              <div className={styles["form-group"]}>
                <input
                  type="text"
                  name="creditCardNumber"
                  placeholder="Credit card number"
                  value={form.creditCardNumber}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </div>
              <div className={styles["flex-group"]}>
                <input
                  type="text"
                  name="cvc"
                  placeholder="CVC"
                  value={form.cvc}
                  onChange={handleInputChange}
                  className={styles.input}
                />
                <input
                  type="text"
                  name="expiry"
                  placeholder="Expiry"
                  value={form.expiry}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </div>
              <button
                type="submit"
                className={styles["submit-button"]}
                aria-label="Submit"
              >
                Submit
              </button>
            </form>
          </main>
        </div>
      )}
    </div>
  )
}

export default RegisterCardForm;