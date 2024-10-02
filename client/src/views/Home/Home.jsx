import React, { useState } from 'react';
import { Btn, Paragraph } from '../../components';
import { LoginForm, RegisterForm } from '../../Containers';
import styles from './Home.module.css';

const Home = () => {
  const [formType, setFormType] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (type) => {
    setActiveButton(type);

    if (formType === type) return;

    setShowForm(false);
    setTimeout(() => {
      setFormType(type);
      setShowForm(true);
    }, 300);
  };

  const renderForm = () => {
    if (!showForm) return null;
    switch (formType) {
      case 'login':
        return <LoginForm />;
      case 'register':
        return <RegisterForm />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.leftSection} ${showForm ? styles.formVisible : ''}`}>
        {renderForm()}
      </div>
      <div className={styles.rightSection}>
        <h1 className={styles.title}>Challenger's League</h1>
        <div className={styles.btnGroup}>
          {formType === 'register' ? (
            <Btn
              type="button"
              style="primary"
              text="Login"
              onClick={() => handleButtonClick('login')}
              className={activeButton === 'login' ? styles.activeButton : ''}
            />
          ) : (
            <Btn
              type="button"
              style="primary"
              text="Register"
              onClick={() => handleButtonClick('register')}
              className={activeButton === 'register' ? styles.activeButton : ''}
            />
          )}

        </div>
        <Paragraph text="Challenger League lets you challenge players in random or draft pick games, connect with new friends, and track your match history, win rate, and champion performance." />
      </div>
    </div>
  );
};

export default Home;
