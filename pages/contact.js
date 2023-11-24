import React, { useState } from 'react';
import styles from '@/styles/Contact.module.css';



function Contact() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log(name, phone, email, message);
    const data = { phone, name, email, message };

    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
        console.log('Success:', data);
        alert("Thanks for contacting us");
        setPhone('')
        setName('')
        setMessage('')
        setEmail('')
      })
      .catch((error) => {
        console.error('Error:', error);
      });



    // async function postJSON(data) {
    //   try {
    //     const response = await fetch("http://localhost:3000/api/postcontact", {
    //       method: "POST", // or 'PUT'
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(data),
    //     });
    
    //     const result = await response.json();
    //     console.log("Success:", result);
    //     alert("Thanks for contacting us");
    //     setPhone('')
    //     setName('')
    //     setMessage('')
    //     setEmail('')
    //   } catch (error) {
    //     console.error("Error:", error);
    //   }
    // }
    
    // const data = { phone, name, email, message };
    // postJSON(data);
    

  }

  const haldelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "name") {
      setName(value)
    }
    else if (name == "phone") {
      setPhone(value)
    }
    else if (name == "email") {
      setEmail(value)
    }
    else if (name == "des") {
      setMessage(value)
    }

  }


  return (
    <div className={styles.container}>
      <h1>Contact us now</h1>
      <form onSubmit={handelSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>Enter your name:- </label>
          <input type="text" value={name} onChange={haldelChange} className="form-control" id="name" name="name" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>Enter your phone:- </label>
          <input type="phone" value={phone} onChange={haldelChange} className="form-control" id="phone" name="phone" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" name="email" className={styles.formlabel}>Email address:- </label>
          <input type="email" value={email} onChange={haldelChange} className="form-control" id="email" name="email" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="msg" className={styles.formlabel}>leave your message:- </label>
          <textarea id="msg" name="des" className="form-control" value={message} onChange={haldelChange} ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default Contact;