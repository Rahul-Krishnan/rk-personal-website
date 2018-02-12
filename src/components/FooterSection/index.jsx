import React from 'react';
import styles from './styles.module.css';
import ContactItem from '../ContactItem/';
// import ContactTextSection from '../ContactTextSection/'

const FooterSection = ({ title, background, data }) => (
  <footer className={styles.footer}>
    <div className={styles.footerTitle} id="contact">
      {title}
    </div>
    {data.map(contactItem => (
      <ContactItem
        key={contactItem.type}
        type={contactItem.type}
        details={contactItem.details}
        subject={contactItem.subject}
        body={contactItem.body}
        image={contactItem.image}
      />
    ))}
    {/* <ContactTextSection /> */}
    <img
      className={styles.background}
      alt={title}
      src={background}
    />
  </footer>
)

export default FooterSection;
