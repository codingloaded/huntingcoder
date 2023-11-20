import React from 'react';
import styles from '@/styles/Contact.module.css';

function Contact() {
  return (
    <div className={styles.container}>
     <h1>Contact us now</h1>
          <form>
            <div className={styles.mb3}>
              <label htmlFor="name" className={styles.formlabel}>Enter your name:- </label>
              <input type="text" className="form-control" id="name" name = "name" />
            </div>
            <div className={styles.mb3}>
              <label htmlFor="phone" className={styles.formlabel}>Enter your phone:- </label>
              <input type="phone" className="form-control" id="phone" name = "phone" />
            </div>
            <div className={styles.mb3}>
              <label htmlFor="email" name ="email" className={styles.formlabel}>Email address:- </label>
              <input type="email" className="form-control" id="email" name ="email" />
            </div>
            <div className={styles.mb3}>
              <label htmlFor="msg" className={styles.formlabel}>leave your message:- </label>
              <textarea id ="msg" name ="des" className="form-control" ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default Contact;