import React from 'react';
import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftPanel}>
        <div className={styles.overlay}>
          <div className={styles.logo}>🎲 Lottery Display</div>
          <h1>A few clicks away from creating your Lottery Display</h1>
          <img src="./images/imgform2.svg" alt="Lottery Display Background" className={styles.backgroundImage} />
        </div>
      </div>
      <div className={styles.rightPanel}>
        <h2>Register</h2>
        <p>Manage all your lottery efficiently</p>
        <p>Let's get you all set up so you can verify your personal account and begin setting up your profile.</p>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <input type="text" placeholder="First Name" className={styles.input} />
            <input type="text" placeholder="Last Name" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <input type="tel" placeholder="Phone Number" className={styles.input} />
            <input type="email" placeholder="Email" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <input type="password" placeholder="Password" className={styles.input} />
            <input type="password" placeholder="Confirm Password" className={styles.input} />
          </div>
          <div className={styles.checkboxGroup}>
            <label>
              <input type="checkbox" /> Yes, I want to receive Lottery Display emails
            </label>
            <label>
              <input type="checkbox" /> I agree to all the Terms, Privacy Policy and Fees
            </label>
          </div>
          <button type="button" className={styles.button}>Create Account</button>
          <p className={styles.loginLink}>Already have an account? Log in</p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;