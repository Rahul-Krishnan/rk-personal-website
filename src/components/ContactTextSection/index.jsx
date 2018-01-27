import React, { Component } from 'react';
import styles from './styles.module.css';
import email from 'emailjs';

class ContactTextSection extends Component {
  sendIt = () => {
    // let email 	= require("./path/to/emailjs/email");
    let server = email.server.connect({
      user: 'user_a5NbHKws4rWrFgZXXUCdJ',
      password: 'iamnotafool',
      host: 'smtp.gmail.com',
      ssl: true,
    });

    // send the message and get a callback with an error or details of the message that was sent
    server.send(
      {
        text: 'i hope this works now',
        from: 'you <rk2211@gmail.com>',
        to: 'someone <rk2211@gmail.com>',
        cc: '',
        subject: 'testing emailjs',
      },
      function(err, message) {
        console.log(err || message);
      },
    );
  };

  render() {
    return <div className={styles.email} />;
  }
}

export default ContactTextSection;
